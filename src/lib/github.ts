type GitHubRepo = {
    id: number;
    name: string;
    full_name: string;
    html_url: string;
    description: string;
    stargazers_count: number;
    language: string;
    owner: {
      login: string;
    };
  };
  
  const GITHUB_TOKEN = process.env.GITHUB_TOKEN;
  
  export async function fetchRepos(language: string) {
    try {
      // Filter for "mid-level startups" (stars between 1000 and 5000)
      const query = `
        language:${language}
        stars:1000..5000
        fork:false
        archived:false
      `.replace(/\s+/g, " ");
  
      const res = await fetch(
        `https://api.github.com/search/repositories?q=${encodeURIComponent(
          query
        )}&sort=stars&order=desc&per_page=50`,
        {
          headers: {
            Authorization: `Bearer ${GITHUB_TOKEN}`,
            Accept: "application/vnd.github+json",
          },
          next: { revalidate: 3600 }, // 1 hour caching (Next.js 13+)
        }
      );
  
      if (!res.ok) {
        console.error("GitHub API error:", res.status);
        return [];
      }
  
      const data = await res.json();
  
      if (!Array.isArray(data.items)) return [];
  
      return data.items as GitHubRepo[];
    } catch (err) {
      console.error("Fetch error:", err);
      return [];
    }
  }
  