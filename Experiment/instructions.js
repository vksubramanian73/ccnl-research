var instructions = {
    type: "html-keyboard-response",
    stimulus: "<p>In this experiment, a grid will appear in the center " +
        "of the screen, and you can choose to travel to Goal A (A) or Goal B(B) " + 
        "from the starting location (the blue dot).</p>" + 
        "<p>If you would rather go to <strong>Goal A</strong>, " +
        "press the letter A on the keyboard as fast as you can.</p>" +
        "<p>If you would rather go to <strong>Goal B</strong>, " +
        "press the letter B on the keyboard as fast as you can.</p>" +
        "<p>Press any key to begin!</p>",
    show_clickable_nav: true,
    post_trial_gap: 2000
  };

function create_instructions() {
    console.log("Creating instructions block!");
	return instructions;
};