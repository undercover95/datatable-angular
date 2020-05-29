import * as faker from "faker";
import * as fs from "fs";

type Post = {
    title: string,
    author: string,
    createdOn: Date,
    updatedOn: Date,
    content: string,
    imageUrl: string,
};

const posts: Post[] = [];
for (let i = 0; i < 100; i++) {
    posts.push({
        title: faker.name.title(),
        author: faker.name.firstName(),
        createdOn: faker.date.recent(30),
        updatedOn: faker.date.future(10),
        content: faker.lorem.paragraph(4),
        imageUrl: faker.image.nightlife(600, 400)
    });
}

fs.writeFile("./db.json", JSON.stringify({ posts: posts }), () => console.log("Data has been generated."));