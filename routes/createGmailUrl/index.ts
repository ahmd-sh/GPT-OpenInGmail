export default eventHandler((event) => {
  const { subjectLine, emailBody } = event.context.params;

  // Ensure inputs are URL-safe
  const encodedSubject = encodeURIComponent(subjectLine);
  const encodedBody = encodeURIComponent(emailBody);

  const oigUrl = `https://mail.google.com/mail/u/0/?tf=cm&fs=0&su=${encodedSubject}&body=${encodedBody}`;

  return {
    operationId: "createGmailComposeUrl",
    result: `[Open in Gmail](${oigUrl})`,
  };
});
