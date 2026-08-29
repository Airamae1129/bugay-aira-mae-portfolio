export const PROFILE = {
  name: 'Aira Mae',
  fullName: 'Aira Mae H. Bugay',
  roles: ['Cybersecurity Analyst', 'Cybersecurity Consultant', 'Web Developer'],
  tagline: 'Cybersecurity Analyst | Cybersecurity Consultant | Web Developer',
  intro:
    'I defend digital assets around the clock — monitoring threats in security operations, guiding organisations through consulting engagements, and engineering secure, resilient web experiences.',
  location: 'Mandaluyong, Metro Manila, Philippines',
  email: 'bugayairamae@gmail.com',
  phone: '+63 961 198 7657',
  phoneHref: '+639611987657',
  linkedin: 'https://www.linkedin.com/in/aira-mae-b-143409285',
  summary:
    "I'm a motivated, detail-oriented cybersecurity professional with a strong analytical mindset. I help organisations strengthen their security by turning complex threat information into clear, actionable decisions — aligning cybersecurity efforts with business goals so protection enables performance.",
  photo: '/assets/aira-photo.png',
  catPhoto: '/assets/cat-photo.png',
  heroVideo: '/assets/hero-soc-cat.mp4'
};

export const EXPERIENCE = [
  {
    period: 'Mar 2025 — Present',
    role: 'Cyber Security Analyst — SOC',
    company: 'InfoTrust',
    location: 'Sydney, Australia · Remote',
    type: 'Full-time',
    points: [
      'Monitor and respond to security alerts using SIEM, SOAR, and EDR tooling',
      'Perform incident response: investigation, containment, and escalation to clients',
      'Run daily Check Point firewall health checks and Rapid7 IVM vulnerability reviews',
      'Deliver daily IPS event reports and threat intelligence assessments with Recorded Future',
      'Document incidents and actions in ServiceNow, Jira, and Confluence'
    ],
    tools: ['Microsoft Sentinel', 'Splunk', 'CrowdStrike', 'Rapid7 IDR', 'SentinelOne', 'Check Point', 'Recorded Future', 'ServiceNow']
  },
  {
    period: 'Jan 2025 — Present',
    role: 'Cyber Security Consultant',
    company: 'Cyberhealth',
    location: 'Dublin, Ireland · Remote',
    type: 'Part-time',
    points: [
      'Provide strategic guidance on risk management, security policies, and regulatory compliance',
      'Ensure alignment with NIST CSF and ISO 27001 frameworks',
      'Conduct security assessments to identify, assess, and remediate potential risks',
      'Deliver Cyber Essentials validation, maturity assessments, and evidence-based scoring'
    ],
    tools: ['NIST CSF', 'ISO 27001', 'Archer GRC', 'MS PowerApps']
  },
  {
    period: 'Oct 2024 — Jul 2025',
    role: 'Cybersecurity Analyst / Consultant',
    company: 'Ultimum B.V.',
    location: 'Almere, Netherlands · Remote',
    type: 'Full-time',
    points: [
      'Monitored security events with advanced SIEM and EDR tools to detect threats',
      'Conducted in-depth log and network traffic analysis to identify anomalies',
      'Executed incident response procedures with severity-based escalation',
      'Monitored network infrastructure with PRTG and UniFi, managed Webroot antivirus',
      'Performed CVE analysis to prioritise and remediate vulnerabilities'
    ],
    tools: ['MS Sentinel', 'MS Defender', 'Rapid7 IDR', 'PRTG', 'UniFi', 'Webroot', 'Dynamics 365']
  },
  {
    period: 'Jan 2024 — Oct 2024',
    role: 'SOC Analyst — Tier 1',
    company: 'Integrity Cyber Consulting',
    location: 'Tel Aviv, Israel · Remote',
    type: 'Full-time',
    points: [
      'Triaged alerts from 150+ clients, each with multiple endpoints to monitor',
      'Analysed network traffic and logs for suspicious activity and anomalies',
      'Responded to incidents ranging from basic to high severity',
      'Conducted malware analysis, threat assessments, and daily threat-intel reporting on leaked credentials'
    ],
    tools: ['Rapid7 IDR', 'Rapid7 VM', 'Cynet 360', 'Darknet CTI']
  },
  {
    period: 'Aug 2023 — Jan 2024',
    role: 'National SOC (NSOC) Analyst',
    company: 'Dept. of Information & Communications Technology',
    location: 'Quezon City, Philippines · Onsite',
    type: 'Government',
    points: [
      'Monitored and triaged security alerts across national government infrastructure',
      'Escalated verified threats to L2 analysts for deeper investigation',
      'Assessed alert severity with Trend Micro Vision One, MS Defender, and Recorded Future',
      'Documented incidents through ServiceNow for compliance and tracking'
    ],
    tools: ['Trend Micro SOAR', 'Trend Micro Vision One', 'MS Defender', 'Recorded Future', 'ServiceNow']
  }
];

export const TOOL_CATEGORIES = [
  { id: 'siem', name: 'SIEM', icon: 'Radar', tools: ['Microsoft Sentinel', 'Splunk', 'Rapid7 InsightIDR', 'CrowdStrike Next-Gen SIEM'] },
  { id: 'edr', name: 'EDR / XDR', icon: 'ShieldCheck', tools: ['Microsoft Defender for Endpoint', 'CrowdStrike Falcon', 'SentinelOne', 'Cynet 360'] },
  { id: 'soar', name: 'SOAR & Monitoring', icon: 'Workflow', tools: ['Trend Micro SOAR'] },
  { id: 'ticketing', name: 'Ticketing & Documentation', icon: 'ClipboardList', tools: ['ServiceNow', 'Jira', 'Confluence', 'Microsoft Dynamics 365'] },
  { id: 'threatintel', name: 'Threat Intelligence', icon: 'Eye', tools: ['Recorded Future', 'Sixgill'] },
  { id: 'network', name: 'Network Monitoring', icon: 'Network', tools: ['PRTG', 'UniFi'] },
  { id: 'firewall', name: 'Firewall Management', icon: 'BrickWall', tools: ['Check Point'] },
  { id: 'antivirus', name: 'Antivirus Monitoring', icon: 'Bug', tools: ['Webroot'] },
  { id: 'grc', name: 'eDiscovery / GRC', icon: 'Scale', tools: ['Relativity'] }
];

export const DEV_STACK = [
  { id: 'python', name: 'Python', tag: 'scripting & automation', level: 90, icon: 'Terminal' },
  { id: 'react', name: 'React JS', tag: 'interactive front-ends', level: 88, icon: 'Atom' },
  { id: 'javascript', name: 'JavaScript', tag: 'ES6+ application logic', level: 90, icon: 'Braces' },
  { id: 'php', name: 'PHP', tag: 'backend services', level: 84, icon: 'FileCode2' },
  { id: 'html', name: 'HTML5', tag: 'semantic structure', level: 96, icon: 'Code2' },
  { id: 'css', name: 'CSS3', tag: 'modern styling & motion', level: 94, icon: 'Palette' }
];

export const ABOUT_SKILLS = ['PHP', 'HTML', 'CSS', 'JavaScript', 'React JS', 'Python'];

export const CERTS = [
  'SC-200: Microsoft Security Operations Analyst',
  'Microsoft Sentinel',
  'CrowdStrike',
  'Splunk',
  'Rapid7 InsightIDR / InsightVM',
  'Cynet Certified Advanced Security Partner',
  'Cisco CCNA Security',
  'OPSWAT — Intro to CIP'
];

export const PROJECTS = [
  {
    id: 'proj-1',
    title: 'Sentinel Watch — SOC Threat Dashboard',
    tag: 'SIEM & Security Operations',
    description:
      'Real-time threat monitoring dashboard concept with live alert streams, severity-based triage queues, and incident timelines — modelled on day-to-day SOC workflows.',
    tech: ['React JS', 'Python', 'SIEM APIs', 'Tailwind CSS'],
    metric: 'MTTD reduced by 42% in simulated drills',
    image: 'https://images.unsplash.com/photo-1708807472445-d33589e6b090?crop=entropy&cs=srgb&fm=jpg&q=85&w=1200'
  },
  {
    id: 'proj-2',
    title: 'AutoTriage — SOAR Playbook Engine',
    tag: 'Security Automation',
    description:
      'Automated incident-response playbooks that enrich alerts with threat intelligence, isolate affected endpoints via EDR, and open documented tickets end-to-end.',
    tech: ['Python', 'SOAR', 'REST APIs', 'EDR Integration'],
    metric: '85% of Tier-1 triage automated',
    image: 'https://images.unsplash.com/photo-1751448555253-f39c06e29d82?crop=entropy&cs=srgb&fm=jpg&q=85&w=1200'
  },
  {
    id: 'proj-3',
    title: 'Aegis Vault — Secure Client Portal',
    tag: 'Web Development & Hardening',
    description:
      'A security-first web portal concept with hardened authentication, strict Content Security Policy, and OWASP Top-10 defences built into a clean modern interface.',
    tech: ['React JS', 'PHP', 'MySQL', 'OWASP'],
    metric: '100% OWASP baseline compliance',
    image: 'https://images.unsplash.com/photo-1767817099805-d79e31fb968c?crop=entropy&cs=srgb&fm=jpg&q=85&w=1200'
  },
  {
    id: 'proj-4',
    title: 'PawIntel — Threat Intel Collector',
    tag: 'Threat Intelligence Tooling',
    description:
      'OSINT collector that aggregates IOCs, scores domain and hash reputations, and compiles automated daily threat briefings for stakeholders.',
    tech: ['Python', 'FastAPI', 'CTI Feeds', 'Reporting'],
    metric: '50,000+ IOCs processed daily',
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?crop=entropy&cs=srgb&fm=jpg&q=85&w=1200'
  }
];

export const MARQUEE_ITEMS = [
  'Threat Hunting',
  'Incident Response',
  'SIEM & SOAR',
  'EDR / XDR',
  'Threat Intelligence',
  'Vulnerability Management',
  'NIST CSF & ISO 27001',
  'Secure Web Development',
  'React JS',
  'Python'
];
