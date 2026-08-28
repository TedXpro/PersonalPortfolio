import React, { useState, useEffect, useMemo, useRef } from "react";
import {
  FolderGit2,
  Users,
  Calendar,
  Activity,
  ArrowUpRight,
  Code2,
} from "lucide-react";
import CountUp from "./CountUp";

const TOP_LANGUAGES = [
  { name: "C++ & Algorithms", percent: 32, color: "#f34b7d", repos: "11 repos" },
  { name: "TypeScript / JS", percent: 28, color: "#3178c6", repos: "Full-Stack" },
  { name: "C# / .NET", percent: 18, color: "#512bd4", repos: "3 repos" },
  { name: "Python / AI", percent: 12, color: "#3572A5", repos: "Data & ML" },
  { name: "Dart / Flutter", percent: 10, color: "#00ADD8", repos: "Mobile" },
];

const getCellColor = (level) => {
  switch (level) {
    case 4:
      return "bg-[#39d353] border border-[#39d353]/30";
    case 3:
      return "bg-[#26a641] border border-[#26a641]/20";
    case 2:
      return "bg-[#006d32] border border-[#006d32]/20";
    case 1:
      return "bg-[#0e4429] border border-[#0e4429]/20";
    default:
      return "bg-[#161b22] border border-[#21262d]/60";
  }
};

const MONTH_NAMES = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

const GitHubStatsCard = () => {
  const scrollContainerRef = useRef(null);

  const [stats, setStats] = useState({
    repos: 53,
    followers: 8,
    years: 4,
    avatar: "https://avatars.githubusercontent.com/u/71769245?v=4",
    bio: "Computer Science graduate from AAU — Full-Stack, Mobile & AI Systems",
  });

  const [contributionsData, setContributionsData] = useState({
    total: 771,
    weeks: [],
    loaded: false,
  });

  const [hoveredDay, setHoveredDay] = useState(null);

  // Auto-scroll to the far right so the latest current months and peak activity are in view
  useEffect(() => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollLeft = scrollContainerRef.current.scrollWidth;
    }
  }, [contributionsData.weeks]);


  // 1. Fetch User Profile Stats
  useEffect(() => {
    let isMounted = true;
    fetch("https://api.github.com/users/TedXpro")
      .then((res) => (res.ok ? res.json() : null))
      .then((data) => {
        if (isMounted && data) {
          const createdYear = data.created_at ? new Date(data.created_at).getFullYear() : 2020;
          setStats({
            repos: data.public_repos ?? 53,
            followers: data.followers ?? 8,
            years: Math.max(1, new Date().getFullYear() - createdYear),
            avatar: data.avatar_url || "https://avatars.githubusercontent.com/u/71769245?v=4",
            bio: data.bio || "Computer Science graduate from AAU — Full-Stack, Mobile & AI Systems",
          });
        }
      })
      .catch(() => {});

    return () => {
      isMounted = false;
    };
  }, []);

  // 2. Fetch Live Real GitHub Contribution Calendar Data
  useEffect(() => {
    let isMounted = true;

    const fetchLiveContributions = async () => {
      try {
        const res = await fetch("https://github-contributions-api.jogruber.de/v4/TedXpro?y=last");
        if (!res.ok) throw new Error("Primary API failed");
        const data = await res.json();

        if (isMounted && data && Array.isArray(data.contributions)) {
          const totalCount = data.total?.lastYear || data.contributions.reduce((acc, d) => acc + (d.count || 0), 0);

          // Group into week columns of 7 days
          const weeksList = [];
          let currentWeek = [];

          data.contributions.forEach((day, index) => {
            currentWeek.push(day);
            if (currentWeek.length === 7 || index === data.contributions.length - 1) {
              weeksList.push(currentWeek);
              currentWeek = [];
            }
          });

          setContributionsData({
            total: totalCount || 771,
            weeks: weeksList,
            loaded: true,
          });
        }
      } catch (err) {
        // Backup live endpoint
        try {
          const backupRes = await fetch("https://gh-calendar.rschristian.dev/user/TedXpro");
          if (!backupRes.ok) throw new Error("Backup failed");
          const backupData = await backupRes.json();
          if (isMounted && backupData && backupData.contributions) {
            setContributionsData({
              total: backupData.total || 771,
              weeks: backupData.contributions,
              loaded: true,
            });
          }
        } catch (e) {
          // Keep default state
        }
      }
    };

    fetchLiveContributions();

    return () => {
      isMounted = false;
    };
  }, []);

  // Compute Month Header Positions from Live Dates
  const monthHeaders = useMemo(() => {
    if (!contributionsData.weeks.length) {
      return [
        { name: "Aug", col: 0 },
        { name: "Sep", col: 3 },
        { name: "Oct", col: 7 },
        { name: "Nov", col: 11 },
        { name: "Dec", col: 15 },
        { name: "Jan", col: 19 },
        { name: "Feb", col: 23 },
        { name: "Mar", col: 27 },
        { name: "Apr", col: 32 },
        { name: "May", col: 36 },
        { name: "Jun", col: 40 },
        { name: "Jul", col: 44 },
        { name: "Aug", col: 49 },
      ];
    }

    const headers = [];
    let lastMonth = -1;

    contributionsData.weeks.forEach((week, colIdx) => {
      const firstDay = week[0];
      if (firstDay && firstDay.date) {
        const monthIndex = new Date(firstDay.date).getMonth();
        if (monthIndex !== lastMonth) {
          headers.push({
            name: MONTH_NAMES[monthIndex],
            col: colIdx,
          });
          lastMonth = monthIndex;
        }
      }
    });

    return headers;
  }, [contributionsData.weeks]);

  return (
    <div className="w-full flex flex-col justify-between h-full">
      {/* Header Profile Bar */}
      <div>
        <div className="flex items-center justify-between gap-3 mb-3">
          <div className="flex items-center gap-3">
            <div className="relative">
              <img
                src={stats.avatar}
                alt="TedXpro"
                className="w-11 h-11 rounded-2xl object-cover border border-white/20 shadow-md"
              />
              <span className="absolute -bottom-0.5 -right-0.5 w-3.5 h-3.5 rounded-full bg-emerald-500 border-2 border-[var(--primary)] shadow-sm" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h4 className="text-sm font-bold text-[var(--text-primary)] tracking-tight">
                  Yohannes Woldeyes
                </h4>
                <span className="text-[10px] font-mono px-1.5 py-0.2 rounded bg-white/10 text-accent-cyan border border-white/10">
                  @TedXpro
                </span>
              </div>
              <p className="text-[11px] text-secondary font-medium mt-0.5">
                Computer Science Graduate · AAU CNCS
              </p>
            </div>
          </div>

          <a
            href="https://github.com/TedXpro"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl glass-pill text-xs font-semibold text-accent-cyan hover:text-cyan-300 hover:border-accent-cyan/40 transition-all group/btn shadow-sm"
          >
            <span>GitHub</span>
            <ArrowUpRight className="w-3.5 h-3.5 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
          </a>
        </div>

        {/* Metrics Counters Grid */}
        <div className="grid grid-cols-3 gap-2 sm:gap-2.5 my-3">
          <div className="glass-panel p-2.5 sm:p-3 rounded-2xl border border-[var(--glass-border)] flex flex-col items-center text-center">
            <div className="w-7 h-7 rounded-lg bg-accent-cyan/15 text-accent-cyan flex items-center justify-center mb-1">
              <FolderGit2 className="w-3.5 h-3.5" />
            </div>
            <span className="text-lg sm:text-xl font-black text-[var(--text-primary)] font-mono">
              <CountUp value={stats.repos} duration={1.5} />+
            </span>
            <span className="text-[10px] text-secondary font-medium uppercase tracking-wider">
              Public Repos
            </span>
          </div>

          <div className="glass-panel p-2.5 sm:p-3 rounded-2xl border border-[var(--glass-border)] flex flex-col items-center text-center">
            <div className="w-7 h-7 rounded-lg bg-accent-purple/15 text-accent-purple flex items-center justify-center mb-1">
              <Users className="w-3.5 h-3.5" />
            </div>
            <span className="text-lg sm:text-xl font-black text-[var(--text-primary)] font-mono">
              <CountUp value={stats.followers} duration={1.5} />+
            </span>
            <span className="text-[10px] text-secondary font-medium uppercase tracking-wider">
              Dev Network
            </span>
          </div>

          <div className="glass-panel p-2.5 sm:p-3 rounded-2xl border border-[var(--glass-border)] flex flex-col items-center text-center">
            <div className="w-7 h-7 rounded-lg bg-emerald-500/15 text-emerald-400 flex items-center justify-center mb-1">
              <Calendar className="w-3.5 h-3.5" />
            </div>
            <span className="text-lg sm:text-xl font-black text-[var(--text-primary)] font-mono">
              <CountUp value={stats.years} duration={1.5} />+ Yrs
            </span>
            <span className="text-[10px] text-secondary font-medium uppercase tracking-wider">
              On GitHub
            </span>
          </div>
        </div>

        {/* Language Stacks Breakdown Section */}
        <div className="p-3.5 rounded-2xl glass-panel border border-[var(--glass-border)] my-3">
          <div className="flex items-center justify-between text-xs font-semibold mb-2.5">
            <span className="flex items-center gap-1.5 text-[var(--text-primary)] font-bold">
              <Code2 className="w-3.5 h-3.5 text-accent-purple" />
              <span>Language Stacks & Distribution</span>
            </span>
            <span className="text-[10px] font-mono text-accent-cyan">50+ Repositories</span>
          </div>

          {/* Multi-Segment Proportional Progress Bar */}
          <div className="w-full h-2 rounded-full overflow-hidden flex gap-0.5 bg-black/30 mb-3">
            {TOP_LANGUAGES.map((lang) => (
              <div
                key={lang.name}
                style={{
                  width: `${lang.percent}%`,
                  backgroundColor: lang.color,
                }}
                className="h-full rounded-sm transition-all duration-700 hover:opacity-90"
                title={`${lang.name}: ${lang.percent}%`}
              />
            ))}
          </div>

          {/* Language Cards Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-1.5 text-[10px]">
            {TOP_LANGUAGES.map((lang) => (
              <div
                key={lang.name}
                className="flex items-center justify-between p-1.5 px-2 rounded-lg bg-white/[0.02] border border-white/5"
              >
                <span className="flex items-center gap-1.5 text-secondary truncate">
                  <span
                    className="w-2 h-2 rounded-full shrink-0"
                    style={{ backgroundColor: lang.color }}
                  />
                  <span className="font-semibold text-[var(--text-primary)] truncate">{lang.name}</span>
                </span>
                <span className="text-[9px] font-mono text-secondary ml-1 font-bold">{lang.percent}%</span>
              </div>
            ))}
          </div>
        </div>

        {/* GitHub Live Contribution Heatmap (Direct Live Real API) */}
        <div className="p-4 sm:p-5 rounded-2xl bg-[#0d1117] border border-[#30363d] shadow-xl my-3 relative">

          {/* GitHub Header Bar with Fixed-Height Zero-Layout-Shift Hover Display */}
          <div className="flex items-center justify-between gap-2 mb-3 h-6">
            <div className="text-xs sm:text-sm font-semibold text-white font-sans tracking-tight flex items-center gap-2 truncate">
              {hoveredDay ? (
                <span className="text-emerald-400 font-mono text-xs flex items-center gap-1.5 truncate animate-fadeIn">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 shrink-0"></span>
                  <span className="font-bold">{hoveredDay.count ?? 0} contribution{(hoveredDay.count ?? 0) !== 1 ? 's' : ''}</span>
                  <span className="text-secondary font-sans font-normal truncate">on {hoveredDay.date ? new Date(hoveredDay.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }) : ''}</span>
                </span>
              ) : (
                <>
                  <span>
                    <CountUp value={contributionsData.total} duration={1.5} /> contributions in the last year
                  </span>
                  {contributionsData.loaded && (
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" title="Live Synced with GitHub" />
                  )}
                </>
              )}
            </div>
            <div className="flex items-center gap-1.5 shrink-0">
              <span className="px-2.5 py-0.5 rounded-md bg-[#1f6feb] text-white text-[10px] font-semibold shadow-sm">
                2026
              </span>
            </div>
          </div>

          {/* Authentic GitHub 53-Week Grid Scroll Container */}
          <div
            ref={scrollContainerRef}
            className="w-full overflow-x-auto pb-1 scrollbar-thin scroll-smooth"
          >
            <div className="inline-block min-w-max">
              {/* Month Labels Bar */}
              <div className="flex text-[9px] font-mono text-[#7d8590] mb-1.5 pl-6 gap-[2px] sm:gap-[2.5px]">
                {(contributionsData.weeks.length ? contributionsData.weeks : Array(53).fill(0)).map((_, colIdx) => {
                  const label = monthHeaders.find((m) => m.col === colIdx);
                  return (
                    <span
                      key={colIdx}
                      className="w-[8px] sm:w-[9px] min-w-[8px] sm:min-w-[9px] text-left shrink-0 overflow-visible whitespace-nowrap"
                    >
                      {label ? label.name : ""}
                    </span>
                  );
                })}
              </div>

              {/* Heatmap Matrix: Day Labels + Week Columns */}
              <div className="flex items-start gap-1.5">
                {/* Day of Week Labels */}
                <div className="flex flex-col gap-[2px] sm:gap-[2.5px] text-[8px] font-mono text-[#7d8590] w-5 shrink-0 text-right pr-0.5 pt-[1px]">
                  <span className="h-[8px] sm:h-[9px] leading-[8px] sm:leading-[9px]"></span>
                  <span className="h-[8px] sm:h-[9px] leading-[8px] sm:leading-[9px]">Mon</span>
                  <span className="h-[8px] sm:h-[9px] leading-[8px] sm:leading-[9px]"></span>
                  <span className="h-[8px] sm:h-[9px] leading-[8px] sm:leading-[9px]">Wed</span>
                  <span className="h-[8px] sm:h-[9px] leading-[8px] sm:leading-[9px]"></span>
                  <span className="h-[8px] sm:h-[9px] leading-[8px] sm:leading-[9px]">Fri</span>
                  <span className="h-[8px] sm:h-[9px] leading-[8px] sm:leading-[9px]"></span>
                </div>

                {/* 53 Columns of 1:1 Square Cells */}
                <div className="flex gap-[2px] sm:gap-[2.5px]">
                  {contributionsData.weeks.map((week, wIdx) => (
                    <div key={wIdx} className="flex flex-col gap-[2px] sm:gap-[2.5px]">
                      {week.map((day, dIdx) => (
                        <div
                          key={dIdx}
                          onMouseEnter={() => setHoveredDay(day)}
                          onMouseLeave={() => setHoveredDay(null)}
                          className={`w-[8px] h-[8px] sm:w-[9px] sm:h-[9px] min-w-[8px] sm:min-w-[9px] rounded-[1.5px] ${getCellColor(
                            day.level ?? 0
                          )} transition-colors hover:brightness-150 hover:ring-1 hover:ring-white/50 cursor-pointer`}
                          title={`${day.count ?? 0} contributions on ${day.date ?? ''}`}
                        />
                      ))}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* GitHub Standard Footer & Legend */}
          <div className="flex items-center justify-between text-[10px] text-[#7d8590] mt-3 pt-2 border-t border-[#30363d]/60 flex-wrap gap-2">
            <a
              href="https://docs.github.com/en/account-and-profile/setting-up-and-managing-your-github-profile/managing-contribution-settings-on-your-profile/why-are-my-contributions-not-showing-up-on-my-profile"
              target="_blank"
              rel="noreferrer"
              className="hover:text-[#58a6ff] hover:underline transition-colors"
            >
              Learn how we count contributions
            </a>
            <div className="flex items-center gap-1 font-mono text-[9px]">
              <span className="mr-0.5">Less</span>
              <span className="w-[8px] h-[8px] sm:w-[9px] sm:h-[9px] rounded-[1.5px] bg-[#161b22] border border-[#21262d]/60" />
              <span className="w-[8px] h-[8px] sm:w-[9px] sm:h-[9px] rounded-[1.5px] bg-[#0e4429] border border-[#0e4429]/20" />
              <span className="w-[8px] h-[8px] sm:w-[9px] sm:h-[9px] rounded-[1.5px] bg-[#006d32] border border-[#006d32]/20" />
              <span className="w-[8px] h-[8px] sm:w-[9px] sm:h-[9px] rounded-[1.5px] bg-[#26a641] border border-[#26a641]/20" />
              <span className="w-[8px] h-[8px] sm:w-[9px] sm:h-[9px] rounded-[1.5px] bg-[#39d353] border border-[#39d353]/30" />
              <span className="ml-0.5">More</span>
            </div>
          </div>
        </div>

      </div>


      {/* Card Footer Status Bar */}
      <div className="pt-3 border-t border-[var(--glass-border)] flex items-center justify-between text-xs text-secondary">
        <div className="flex items-center gap-1.5 text-emerald-400 font-medium text-[11px]">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
          <span>Verified Active Developer · Addis Ababa, ET</span>
        </div>
        <span className="text-[11px] font-mono text-secondary">2020 - 2026</span>
      </div>
    </div>
  );
};

export default GitHubStatsCard;
