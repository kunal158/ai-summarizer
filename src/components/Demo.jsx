import React, { useState } from "react";
import axios from "axios";

const Demo = () => {
  const [url, setUrl] = useState("");
  const [summary, setSummary] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    const options = {
      method: "GET",
      url: "https://article-extractor-and-summarizer.p.rapidapi.com/summarize",
      params: { url: url, lang: "en", engine: "2" },
      headers: {
        "x-rapidapi-key": import.meta.env.VITE_RAPID_API_ARTICLE_KEY,
        "x-rapidapi-host": "article-extractor-and-summarizer.p.rapidapi.com",
      },
    };

    try {
      const response = await axios.request(options);
      setSummary(response.data.summary);
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center dark:bg-gray-800 mt-0">
      {" "}
      {/* Reduced top margin */}
      <div className="bg-gray-100 dark:bg-gray-900 p-6 rounded-lg shadow-lg w-full max-w-2xl">
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              htmlFor="url"
              className="block text-gray-700 dark:text-gray-200 text-sm font-bold mb-2"
            >
              Link:
            </label>
            <input
              type="url"
              id="url"
              name="url"
              value={url}
              placeholder="Paste URL"
              onChange={(e) => setUrl(e.target.value)}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 dark:text-gray-200 leading-tight focus:outline-none focus:shadow-outline"
              required
            />
          </div>
          <div className="flex items-center justify-between">
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              disabled={isLoading}
            >
              {isLoading ? "Summarizing..." : "Summarize"}
            </button>
          </div>
        </form>
        {summary && (
          <div className="mt-4 p-4 bg-gray-100 dark:bg-gray-700 rounded-lg">
            <h3 className="text-lg font-bold mb-2 dark:text-white">Summary:</h3>
            <p className="dark:text-gray-200">{summary}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Demo;
