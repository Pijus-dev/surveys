module.exports = (survey) => {
  return `
    <html>
      <body>
          <div style="text-align:center;">
            <h3>I'd like your input</h3>
            <p>Please answer the following answer:</p>
            <p>${survey.body}</p>
             <div>
              <a href="http://localhost:3000">Yes</a>
              <a href="">No</a>
             </div>
          </div>
      </body>
    </html>
  `;
};