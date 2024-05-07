import React, { useEffect, useState } from "react";

export const Instagram = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch(
          `https://graph.instagram.com/me/media?fields=id,media_type,media_url,thumbnail_url,permalink&access_token=IGQWRPYWVwcXBzcWNDTlpxOHRxN0JFOHRDSlVhUHBPRkJ4WWtsQzZAwSHlCcDFodG9OZAlJaSjliR1F5dTM0TzBrQlFCNWdTT3RfMVpMbnlXTWlUNy1BU1lkdVRQREt6TWxPZAlFrX29tUno5RVlMczZAMSS1GQnY5VDQZD`,
        );
        const data = await response.json();
        setPosts(data.data);
      } catch (error) {
        console.error("Error fetching Instagram feed:", error);
      }
    };

    fetchPosts();
  }, []);

  return (
    <div>
      {console.log(posts)}
      <h1 style={{ textAlign: "center" }}>
        Show Instagram Feed on your Website
      </h1>

      <div>
        {posts.map((post) => (
          <div key={post.id}>
            {post.media_type === "IMAGE" && (
              <img src={post.media_url} alt="Instagram Post" />
            )}
            {post.media_type === "VIDEO" && (
              <video controls>
                <source src={post.media_url} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            )}
            <p>
              <a
                href={post.permalink}
                target="_blank"
                rel="noopener noreferrer"
              >
                View on Instagram
              </a>
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};
