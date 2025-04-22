import dotenv from "dotenv";
dotenv.config();

export async function postArticle(
  title: string,
  body: string,
  description: string,
  tags: string[]
) {
  try {
    const response = await fetch("https://dev.to/api/articles", {
      method: "POST",
      headers: {
        "api-key": `${process.env.DEV_TO_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        article: {
          title: title,
          body_markdown: body,
          published: true,
          series: null,
          main_image: null,
          canonical_url: null,
          description: description,
          tags: tags,
          organization_id: null,
        },
      }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(
        `DEV.to API Error (${response.status}): ${errorText.slice(0, 100)}`
      );
    }

    return await response.json();
  } catch (error) {
    throw new Error(
      `Post failed: ${error instanceof Error ? error.message : String(error)}`
    );
  }
}
