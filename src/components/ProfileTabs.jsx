import ProfileTab from "./ProfileTab";

const profileSteps = [
  {
    name: "1. Personal Details",
    isSelected: true,
  },
  {
    name: "2. Work Experience",
    isSelected: false,
  },
  {
    name: "3. Personal Skills",
    isSelected: false,
  },
  {
    name: "4. Skill Assessments",
    isSelected: false,
  },
  {
    name: "5. Verification Status",
    isSelected: false,
  },
];

export default function ProfileTabs() {
  return (
    <header className="flex space-x-4 border-b border-white/5 py-4">
      {profileSteps.map((step) => {
        return (
          <ProfileTab
            key={step.name}
            name={step.name}
            isSelected={step.isSelected}
          />
        );
      })}
    </header>
  );
}
