function analyzeText(text) {
  const words = text.trim().split(/\s+/);
  const wordCount = words.length;

  const hashtagCount = (text.match(/#/g) || []).length;
  const questionCount = (text.match(/\?/g) || []).length;
  const exclamationCount = (text.match(/!/g) || []).length;

  const ctaWords = ["join", "buy", "click", "follow", "try", "subscribe"];
  const ctaMatches = ctaWords.filter((word) =>
    text.toLowerCase().includes(word),
  );

  let engagementScore = 0;

  if (wordCount > 30) engagementScore += 15;
  if (hashtagCount > 0) engagementScore += 15;
  if (questionCount > 0) engagementScore += 10;
  if (exclamationCount > 0) engagementScore += 10;
  if (ctaMatches.length > 0) engagementScore += 20;

  // Tone Detection
  let tone = "Neutral";

  if (ctaMatches.length > 0) tone = "Promotional";
  else if (questionCount > 0) tone = "Engaging";
  else if (wordCount > 80) tone = "Informative";

  // Suggestions
  let suggestions = [];

  if (hashtagCount === 0)
    suggestions.push("Consider adding relevant hashtags.");

  if (ctaMatches.length === 0)
    suggestions.push("Add a clear call-to-action (e.g., Follow, Join, Try).");

  if (questionCount === 0)
    suggestions.push("Ask a question to increase engagement.");

  return {
    wordCount,
    hashtagCount,
    questionCount,
    exclamationCount,
    ctaMatches,
    engagementScore,
    tone,
    suggestions,
  };
}

module.exports = analyzeText;
