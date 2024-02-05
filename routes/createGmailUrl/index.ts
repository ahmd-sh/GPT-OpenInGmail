export default eventHandler((event) => {
  const subjectLine = getQuery(event).subjectLine || "undefinedSubject";
  const emailBody = getQuery(event).emailBody || "undefinedBody";
  let accountId = parseInt(getQuery(event).accountId) || 0;

  // Check if conversion failed or if accountId is out of range, then default to 0
  if (isNaN(accountId) || accountId < 0 || accountId > 100) {
    accountId = 0;
  }

  // Ensure inputs are URL-safe
  const encodedSubject = encodeURIComponent(subjectLine.toString());
  const encodedBody = encodeURIComponent(emailBody.toString());

  const oigUrl = `https://mail.google.com/mail/u/${accountId}/?tf=cm&fs=0&su=${encodedSubject}&body=${encodedBody}`;

  return {
    operationId: "createGmailComposeUrl",
    result: `[Open in Gmail](${oigUrl})`,
  };
});
