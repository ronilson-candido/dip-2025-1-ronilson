import { Metadata } from "next";
import styles from "./page.module.scss";
import Header from "@/components/Header";
import {
  mainMembers,
  directorMembers,
  fiscalMembers,
} from "@/components/members";

export const metadata: Metadata = {
  title: "Diretoria | SINMED-AL",
  description: "Diretoria do Sinmed Alagoas",
};

export default function Diretoria() {
  return (
    <div className={styles.mainContainer}>
      <Header />
      <h1>Nossa Diretoria</h1>
      <main className={styles.mainContent}>
        {mainMembers.map((group) => (
          <div
            key={group.priority}
            className={`${styles.memberWrapper} ${
              group.priority === "Primary" ? styles.primary : styles.secondary
            }`}
          >
            {group.members.map((member) => (
              <div key={member.name} className={styles.memberContent}>
                <h3>{member.position}</h3>
                <p>{member.name}</p>
              </div>
            ))}
          </div>
        ))}
        <div className={styles.separator}></div>
        <div className={styles.directorMembersWrapper}>
          {directorMembers.map((member) => (
            <div key={member.name} className={styles.directorMembersContent}>
              <h3>{member.position}</h3>
              <p>{member.name}</p>
            </div>
          ))}
        </div>
        <section className={styles.fiscalSection}>
          <h2>Conselho Fiscal</h2>
          {fiscalMembers.map((member) => (
            <div key={member.priority} className={styles.fiscalWrapper}>
              {member.members.map((fiscalMember) => (
                <div key={fiscalMember.name} className={styles.fiscalContent}>
                  <h3>{fiscalMember.position}</h3>
                  <p>{fiscalMember.name}</p>
                </div>
              ))}
            </div>
          ))}
        </section>
      </main>
    </div>
  );
}
