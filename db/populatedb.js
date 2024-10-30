const { Client } = require("pg");

const SQL = `
CREATE TABLE IF NOT EXISTS messages (
    id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
    messageUser VARCHAR ( 255 ),
    messageText TEXT,
    date TIMESTAMPTZ
);

INSERT INTO messages (messageUser, messageText, date)
VALUES
    ('Chad', 'Test Message', '2016-01-01 00:00:00-07')
`;

async function main() {
  console.log("seeding...");
  const client = new Client({
    connectionString:
      "postgresql://chad:asdf@localhost:5432/mini_message_board",
  });
  await client.connect();
  await client.query(SQL);
  await client.end();
  console.log("done");
}

main();
