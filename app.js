var rellax = new Rellax('.rellax', {
          // center: true
          callback: function(position) {
              // callback every position change
              console.log(position);
          }
        });
