window.addEventListener("load", function() {
    const form = document.getElementById('submitArticle');
    form.addEventListener("submit", function(e) {
      console.log("Form is Requesting Transfer");
      e.preventDefault();
      const data = new FormData(form);
      const action = e.target.action;
      fetch(action, {
        method: 'POST',
        body: data,
      })
      .then(() => {
        console.log("Form Sucessfully Transfered");
        window.location.href = "../recipes";
          this.form.reset();
        $("body").css("overflow-y", "scroll"); 
      })
    });
  });
   window.addEventListener("load", function() {
    const submitArticle = document.getElementById('submitArticle');
    submitArticle.addEventListener("submit", function(e) {
      console.log("Form is Requesting Transfer");
      e.preventDefault();
      const submitData = new FormData(submitArticle);
      const submitAction = e.target.action;
      fetch(submitAction, {
        method: 'POST',
        body: submitData,
      })
      .then(() => {
        window.location.href = "recipes";
        console.log("Form Sucessfully Transfered");
          this.form.reset();
      })
    });
  });
