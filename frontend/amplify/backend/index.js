const axios = require("axios");
const gql = require("graphql-tag");
const graphql = require("graphql");
const { print } = graphql;
const { listPipes } = require("./queries/queries");

const listPipesTemplate = gql(listPipes);

// const listTodos = gql`
//   query listTodos {
//     listTodos {
//       items {
//         id
//         name
//         description
//       }
//     }
//   }
// `;

exports.handler = async (event) => {
  try {
    const graphqlData = await axios({
      //   url: process.env.API_URL,
      url: "https://my.api.mockaroo.com/pipes.json",
      method: "get",
      headers: {
        // "x-api-key": process.env.API_KEY,
        "x-api-key": "6f1260c0",
      },
      data: {
        query: print(listPipesTemplate),
      },
    });
    const body = {
      graphqlData: graphqlData.data,
    };
    console.log(graphqlData.data);
    return {
      statusCode: 200,
      body: JSON.stringify(body),
      headers: {
        "Access-Control-Allow-Origin": "*",
      },
    };
  } catch (err) {
    console.log("error posting to appsync: ", err);
  }
};
