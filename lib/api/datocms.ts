import { request as graphqlRequest, RequestDocument, Variables } from 'graphql-request'
import { TypedDocumentNode } from '@graphql-typed-document-node/core'

// @todo resolve this Error: Unexpected any. Specify a different type.  @typescript-eslint/no-explicit-any
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function request<TDocument = any>(
  document: RequestDocument | TypedDocumentNode<TDocument, Variables>,
  variables?: Variables,
  includeDrafts = false,
  excludeInvalid = true,
  visualEditingBaseUrl = null
) {
  const url = 'https://graphql.datocms.com/'
  const requestHeaders = {
    Authorization: `Bearer ${process.env.NEXT_DATOCMS_API_TOKEN}`,
    ...(includeDrafts ? { 'X-Include-Drafts': 'true' } : {}),
    ...(excludeInvalid ? { 'X-Exclude-Invalid': 'true' } : {}),
    ...(visualEditingBaseUrl
      ? {
          'X-Visual-Editing': 'vercel-v1',
          'X-Base-Editing-Url': visualEditingBaseUrl,
        }
      : {}),
    ...(process.env.NEXT_DATOCMS_ENVIRONMENT
      ? { 'X-Environment': process.env.NEXT_DATOCMS_ENVIRONMENT }
      : {}),
  }

  return graphqlRequest<TDocument, Variables>(url, document, variables, requestHeaders)
}
