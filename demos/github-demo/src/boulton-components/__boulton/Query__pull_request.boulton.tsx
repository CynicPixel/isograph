import type {BoultonFetchableResolver, ReaderAst, FragmentReference} from '@boulton/react';
import { getRefRendererForName } from '@boulton/react';
const resolver = x => x;
import Query__header, { ReadOutType as Query__header__outputType } from './Query__header.boulton';
import Query__pull_request_detail, { ReadOutType as Query__pull_request_detail__outputType } from './Query__pull_request_detail.boulton';

const queryText = 'query pull_request ($repositoryOwner: String!, $repositoryName: String!, $pullRequestNumber: Int!, $last: Int!) {\
  repository__owner_repositoryOwner__name_repositoryName: repository(owner: $repositoryOwner, name: $repositoryName) {\
    id,\
    pullRequest__number_pullRequestNumber: pullRequest(number: $pullRequestNumber) {\
      bodyHTML,\
      id,\
      title,\
      comments__last_last: comments(last: $last) {\
        edges {\
          node {\
            bodyText,\
            createdAt,\
            id,\
            author {\
              login,\
            },\
          },\
        },\
      },\
    },\
  },\
  viewer {\
    avatarUrl,\
    id,\
    name,\
  },\
}';

// TODO support changing this,
export type ReadFromStoreType = ResolverParameterType;

const normalizationAst = {notNeededForDemo: true};
const readerAst: ReaderAst<ReadFromStoreType> = [
  {
    kind: "Resolver",
    alias: "header",
    arguments: null,
    resolver: Query__header,
    variant: "Component",
  },
  {
    kind: "Resolver",
    alias: "pull_request_detail",
    arguments: null,
    resolver: Query__pull_request_detail,
    variant: "Component",
  },
];

export type ResolverParameterType = {
  header: Query__header__outputType,
  pull_request_detail: Query__pull_request_detail__outputType,
};

// The type, when returned from the resolver
export type ResolverReturnType = ResolverParameterType;

// the type, when read out (either via useLazyReference or via graph)
export type ReadOutType = ResolverReturnType;

const artifact: BoultonFetchableResolver<ReadFromStoreType, ResolverParameterType, ReadOutType> = {
  kind: 'FetchableResolver',
  queryText,
  normalizationAst,
  readerAst,
  resolver: resolver as any,
  convert: ((resolver, data) => resolver(data)),
};

export default artifact;
