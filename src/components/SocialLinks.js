const profiles = [
  {
    name: "Instagram",
    label: "Instagram @BachirOueida",
    href: "https://www.instagram.com/BachirOueida/",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path
          fill="currentColor"
          d="M7 3h10a4 4 0 0 1 4 4v10a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V7a4 4 0 0 1 4-4zm10 2H7a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2zm-5 3.2A3.8 3.8 0 1 1 8.2 12 3.8 3.8 0 0 1 12 8.2zm0 1.6A2.2 2.2 0 1 0 14.2 12 2.2 2.2 0 0 0 12 9.8zM17.4 6.6a1 1 0 1 1-1 1 1 1 0 0 1 1-1z"
        />
      </svg>
    ),
  },
  {
    name: "LinkedIn",
    label: "L.A. Real Estate, Inc. on LinkedIn",
    href: "https://www.linkedin.com/company/l-a-real-estate-inc/",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path
          fill="currentColor"
          d="M4.7 3.3A2.2 2.2 0 1 1 2.5 5.5a2.2 2.2 0 0 1 2.2-2.2zM3 8.5h3.4V21H3zm5.6 0H12v1.7h.1c.5-1 1.7-2 3.5-2 3.7 0 4.4 2.4 4.4 5.6V21H16.6v-6.2c0-1.5 0-3.4-2.1-3.4s-2.4 1.6-2.4 3.3V21H8.6z"
        />
      </svg>
    ),
  },
  {
    name: "Douglas Elliman",
    label: "Douglas Elliman profile",
    href: "https://www.elliman.com/agent/bachir-oueida/1024916",
    icon: <span className="profile-monogram" aria-hidden="true">DE</span>,
  },
];

export default function SocialLinks({ className = "" }) {
  return (
    <div className={`profile-links ${className}`.trim()}>
      {profiles.map((profile) => (
        <a
          key={profile.name}
          href={profile.href}
          className="profile-link"
          target="_blank"
          rel="noopener noreferrer"
          aria-label={profile.label}
          title={profile.label}
        >
          {profile.icon}
        </a>
      ))}
    </div>
  );
}
