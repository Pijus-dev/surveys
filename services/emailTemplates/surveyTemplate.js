module.exports = (survey) => {
  return `
    <html>
      <body>
          <div style="text-align:center;">
            <h3>I'd like your input</h3>
            <p>Please answer the following answer:</p>
            <p>${survey.body}</p>
             <div>
              <a href="http://localhost:3000/api/${survey.id}/yes">Yes</a>
              <a href="http://localhost:3000/api/${survey.id}/no">No</a>
             </div>
          </div>
      </body>
    </html>
  `;
};
