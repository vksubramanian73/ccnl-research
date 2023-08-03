/* create timeline */
var timeline = [];

/* define instructions trial */
var instructions_block = create_instructions();
timeline.push(instructions_block);

var grid_block = create_grid_block();
timeline.push(grid_block);

var grid_block_two = create_grid_block();
timeline.push(grid_block_two);

function startExperiment(){
    console.log("Timeline: " + JSON.stringify(timeline));
    jsPsych.init({
      timeline: timeline,
      show_progress_bar: true,
      auto_update_progress_bar: false,
      //on_finish: function() {
        //window.location.href = "end.html";
      //}
    })
  };

startExperiment(); 