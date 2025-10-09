 const usuariosArray = [
  { id: "uuid-1", username: "isaías", passwordHash: "hash1" },
  { id: "uuid-2", username: "elena", passwordHash: "hash2" }
]



const usuariosObj = {
  "isaías": { id: "uuid-1", username: "isaías", passwordHash: "hash1" },
  "elena":  { id: "uuid-2", username: "elena", passwordHash: "hash2" }
}


const usuariosMap = new Map([
  ["isaías", { id: "uuid-1", username: "isaías", passwordHash: "hash1" }],
  ["elena", { id: "uuid-2", username: "elena", passwordHash: "hash2" }]
]);


export default {
  usuariosArray,
  usuariosObj,
  usuariosMap
}