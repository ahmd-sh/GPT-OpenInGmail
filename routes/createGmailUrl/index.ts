export default eventHandler((event) => {
  const subjectLine = getQuery(event).subjectLine;
  const emailBody = getQuery(event).emailBody;

  // Ensure inputs are URL-safe
  const encodedSubject = encodeURIComponent(subjectLine.toString());
  const encodedBody = encodeURIComponent(emailBody.toString());

  const oigUrl = `https://mail.google.com/mail/u/0/?tf=cm&fs=0&su=${encodedSubject}&body=${encodedBody}`;

  return {
    operationId: "createGmailComposeUrl",
    result: `[Open in Gmail](${oigUrl})`,
  };
});
