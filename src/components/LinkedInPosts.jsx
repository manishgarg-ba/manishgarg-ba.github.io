import Section from "./Section";

export default function LinkedInPosts() {
  return (
    <Section>
      <h3>Latest LinkedIn Posts</h3>

      <div className="linkedin-posts">
        <div className="linkedin-card">
          <a
            href="https://www.linkedin.com/posts/manish-garg-51b072228_businessanalytics-giftcity-datascience-activity-7426657489825443840-n5qW?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAADj2R2cBwSOD21_WYG4yJGQwax5v-VyU_Xo"
            target="_blank"
            rel="noopener noreferrer"
          >
            Read on LinkedIn →
          </a>
        </div>

        <div className="linkedin-card">
          <a
            href="https://www.linkedin.com/posts/manish-garg-51b072228_unionbudget-businessanalytics-datadrivenpolicy-activity-7423991196689215488-iqkQ?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAADj2R2cBwSOD21_WYG4yJGQwax5v-VyU_Xo"
            target="_blank"
            rel="noopener noreferrer"
          >
            Read on LinkedIn →
          </a>
        </div>
      </div>
    </Section>
  );
}
