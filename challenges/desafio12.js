db.produtos.updateMany(
  { $and: [
    { ingredientes: { $not: { $in: ["ketchup"] } } },
    { nome: { $not: { $eq: "McChicken" } } },
  ] },
  { $addToSet: { ingredientes: "ketchup" } },
);
db.produtos.find({}, { _id: 0, nome: 1, ingredientes: 1 });