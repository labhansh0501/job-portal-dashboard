import React from 'react';
import ProfileHeader from './profileHeader';
import Section from './Section';
import { LinkSection, SkillSection , PreferedShift} from './LinkSection';

const ProfileOverview = () => {
  return (
    <div className="container mx-auto p-4">
      <div className="grid grid-cols-1 md:grid-cols-3">
        <div className="md:col-span-1">
          <ProfileHeader />
          <LinkSection />
          <SkillSection />
          <PreferedShift />
        </div>
        <div className="md:col-span-2">
          <Section title="Profile Summary">
            <p>Short summary about the profile...</p>
          </Section>
          <Section title="Education Details">
            <p>Education details 1</p>
            <p>Education details 2</p>
          </Section>
          <Section title="Work Experience">
            <p>Role 1</p>
            <p>Company Name</p>
            <p>Duration</p>
          </Section>
          <Section title="Courses & Certifications">
            <p>Course 1</p>
            <p>Certification details...</p>
          </Section>
          <Section title="Projects">
            <p>Project 1</p>
            <p>Project details...</p>
          </Section>
          <Section title="Awards & Achievements">
            <p>Award 1</p>
            <p>Award details...</p>
          </Section>
          <Section title="Personal Details">
            <p>Personal detail 1</p>
            <p>Personal detail 2</p>
          </Section>
          <Section title="Languages">
            <p>Language 1</p>
            <p>Language proficiency...</p>
          </Section>
        </div>
      </div>
    </div>
  );
};

export default ProfileOverview;
