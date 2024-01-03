document.getElementById('generate').addEventListener('click', function() {
  const adjective1 = document.getElementById('adjective1').value;
  const noun1 = document.getElementById('noun1').value;
  const verb1 = document.getElementById('verb1').value;
  const noun2 = document.getElementById('noun2').value;
  const adjective2 = document.getElementById('adjective2').value;
  const noun3 = document.getElementById('noun3').value;
  const noun4 = document.getElementById('noun4').value;
  const noun5 = document.getElementById('noun5').value;

  const story = `
    'Twas the night before Christmas, and all through the ${noun1},
    not a creature was stirring, not even a(n) ${adjective1} mouse.
    The ${noun1} were hung by the chimney with care, in hopes that St. Nicholas soon would be, a ${verb1} there.
    The children were nestled all snug in their beds, while visions of sugarplums danced in their heads.
    Meanwhile, in the bustling kitchen, Mrs. Claus was busy baking her famous ${noun2} for Santa's midnight snack.
    She carefully mixed the ${adjective2} dough and rolled it out with a jolly laugh.
    However, she realized she was missing a key ingredient: magical ${noun3}!
    Without them, the cookies wouldn't have their special holiday charm.
    With a worried look on her face, Mrs. Claus called upon the help of the mischievous elves to fetch the missing ingredient from the enchanted forest.
    The mischievous elves darted through the snow-covered woods, dodging snowflakes and giggling all the way.
    Finally, they stumbled upon the hidden grove where the magical ${noun4} grew.
    With a little elfish magic and a lot of teamwork, they gathered the sparkly ingredient and dashed back to the North Pole just in time.
    Mrs. Claus added the magical touch to the cookie dough, and soon the aroma of freshly baked cookies filled the air, ensuring Santa's snack was ready for his Christmas Eve journey.
  `;

  document.getElementById('story').innerHTML = `<p>${story}</p>`;
});