import { GraphQLObjectType } from 'graphql';
import UserType from './user';
import db from '../database';

const QueryType = new GraphQLObjectType({
  name: 'Query',
  fields: () => ({
    viewer: {
      type: UserType,
      resolve: (_, _args, context) => db.getViewer({}, context),
    },
  }),
});

export default QueryType;
