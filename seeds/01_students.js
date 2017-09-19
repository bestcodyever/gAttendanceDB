

exports.seed = function(knex, Promise) {
  return knex.raw('DELETE FROM "student"; ALTER SEQUENCE student_id_seq RESTART WITH 5;')

  .then(() => {
      var students = [{
        id: 1,
        name: "Bubba",
        rfid: "23iuwd23jdkjasdf",
        partial: 0,
        checked_in: false,
        excused: false
      }, {
        id: 2,
        name: "Kelly",
        rfid: "2w3sef2asgsdfgr",
        partial: 0,
        checked_in: false,
        excused: false
      }, {
        id: 3,
        name: "Bob",
        rfid: "5jw8fu38di43",
        partial: 0,
        checked_in: false,
        excused: false
      }, {
        id: 4,
        name: "Shila",
        rfid: "968rueu8du3udjd3",
        partial: 0,
        checked_in: false,
        excused: false
      }];

      return knex('student').insert(students);
    });
};
