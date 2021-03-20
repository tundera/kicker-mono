# ColorScheme

-   [Fields](#fields)
-   [Queries](#queries)
-   [Mutations](#mutations)
-   [Subscriptions](#subscriptions)

## Fields

List of fields available in the `ColorScheme` type.

| Field     | Scalar Type       | Unique  | Required (create) |
| --------- | ----------------- | ------- | ----------------- |
| id        | Int               | true    | true              |
| createdAt | AWSDateTime       | _false_ | true              |
| updatedAt | AWSDateTime       | _false_ | true              |
| primary   | String            | _false_ | true              |
| secondary | String            | _false_ | true              |
| team      | [Team](./Team.md) | _false_ | true              |
| teamId    | Int               | true    | true              |

## Queries

Queries are responsible for all `Read` operations.

The generated queries are:

-   `getColorScheme`: Read a single ColorScheme.
-   `listColorSchemes`: Read multiple ColorSchemes.

### Querying a single ColorScheme

Single ColorScheme queries can take one input:

-   `where`: `ColorSchemeWhereUniqueInput!` A required object type specifying a field with a unique constraint (like id).

**Standard query**

```graphql
query {
    getColorScheme(where: { id: 2 }) {
        id
        createdAt
        updatedAt
        primary
        secondary
        team # Relation to one
        teamId
    }
}
```

### Querying multiple ColorSchemes

Multiple ColorSchemes queries can take two inputs:

-   `where`: `ColorSchemeWhereInput` An optional object type to filter the content based on a nested set of criteria.
-   `orderBy`: `ColorSchemeOrderByInput` An optional object type to select which field(s) and order to sort the records on. Sorting can be in ascending order `ASC` or descending order `DESC`.

**Standard query**

```graphql
query {
    listColorSchemes {
        id
        createdAt
        updatedAt
        primary
        secondary
        team # Relation to one
        teamId
    }
}
```

**Standard query with where**

```graphql
query {
    listColorSchemes(where: { createdAt: "dd/mm/YYYY" }) {
        id
        createdAt
        updatedAt
        primary
        secondary
        team # Relation to one
        teamId
    }
}
```

**Advanced query using filters**

<details><summary>List of all filters available</summary>
<p>

```graphql
id: Int
    id_equals: Int
    id_not: Int
    id_lt: Int
    id_lte: Int
    id_gt: Int
    id_gte: Int
    id_contains: Int
    id_startsWith: Int
    id_endsWith: Int
createdAt: AWSDateTime
    createdAt_equals: AWSDateTime
    createdAt_not: AWSDateTime
    createdAt_lt: AWSDateTime
    createdAt_lte: AWSDateTime
    createdAt_gt: AWSDateTime
    createdAt_gte: AWSDateTime
    createdAt_contains: AWSDateTime
    createdAt_startsWith: AWSDateTime
    createdAt_endsWith: AWSDateTime
updatedAt: AWSDateTime
    updatedAt_equals: AWSDateTime
    updatedAt_not: AWSDateTime
    updatedAt_lt: AWSDateTime
    updatedAt_lte: AWSDateTime
    updatedAt_gt: AWSDateTime
    updatedAt_gte: AWSDateTime
    updatedAt_contains: AWSDateTime
    updatedAt_startsWith: AWSDateTime
    updatedAt_endsWith: AWSDateTime
primary: String
    primary_equals: String
    primary_not: String
    primary_lt: String
    primary_lte: String
    primary_gt: String
    primary_gte: String
    primary_contains: String
    primary_startsWith: String
    primary_endsWith: String
secondary: String
    secondary_equals: String
    secondary_not: String
    secondary_lt: String
    secondary_lte: String
    secondary_gt: String
    secondary_gte: String
    secondary_contains: String
    secondary_startsWith: String
    secondary_endsWith: String
teamId: Int
    teamId_equals: Int
    teamId_not: Int
    teamId_lt: Int
    teamId_lte: Int
    teamId_gt: Int
    teamId_gte: Int
    teamId_contains: Int
    teamId_startsWith: Int
    teamId_endsWith: Int

```

</p>
</details>

```graphql
query {
    listColorSchemes(
        where: { createdAt_startsWith: "dd/mm/YYYY" }
    ) {
        id
        createdAt
        updatedAt
        primary
        secondary
        team # Relation to one
        teamId
    }
}
```

**Standard query with orderBy**

```graphql
query {
    listColorSchemes(orderBy: { createdAt: DESC }) {
        id
        createdAt
        updatedAt
        primary
        secondary
        team # Relation to one
        teamId
    }
}
```

## Mutations

Mutations are responsible for all `Create`, `Update`, and `Delete` operations.

The generated mutations are:

-   `createColorScheme`: Create a single ColorScheme.
-   `updateColorScheme`: Update a single ColorScheme.
-   `upsertColorScheme`: Update existing OR create single ColorScheme.
-   `deleteColorScheme`: Delete a single ColorScheme.
-   `deleteManyColorSchemes`: Delete multiple ColorSchemes.

### Creating a single ColorScheme

Single ColorScheme create mutations can take one input:

-   `data`: `ColorSchemeCreateInput!` A required object type specifying the data to create a new record.

**Standard create mutation**

```graphql
mutation {
    createColorScheme(
        data: {
            primary: "Foo"
            secondary: "Foo"
            teamId: 2
        }
    ) {
        id
        createdAt
        updatedAt
        primary
        secondary
        teamId
    }
}
```

**Advanced create mutation using relation queries**

<details><summary>List of all nested queries available</summary>
<p>

```graphql
team: {
    create: ColorSchemeTeamCreateInput, # Relation to one
    connect: ColorSchemeTeamWhereUniqueInput, # Relation to one
    connectOrCreate: ColorSchemeTeamConnectOrCreateInput # Relation to one
}
```

</p>
</details>

```graphql
mutation {
    createColorScheme(
        data: {
            team: {
                connectOrCreate: {
                    where: ColorSchemeWhereUniqueInput
                    create: ColorSchemeCreateInput
                }
            }
        }
    ) {
        id
    }
}
```

### Updating a single ColorScheme

Single ColorScheme update mutations can take two input:

-   `where`: `ColorSchemeWhereUniqueInput!` A required object type specifying a field with a unique constraint (like id).
-   `data`: `ColorSchemeUpdateInput!` A required object type specifying the data to update.

**Standard update mutation**

```graphql
mutation {
    updateColorScheme(
        where: { id: 2 }
        data: {
            primary: "Foo"
            secondary: "Foo"
            teamId: 2
        }
    ) {
        id
        createdAt
        updatedAt
        primary
        secondary
        teamId
    }
}
```

**Advanced update mutation using relation queries**

<details><summary>List of all nested queries available</summary>
<p>

```graphql
team: {
    create: ColorSchemeTeamCreateInput, # Relation to one
    connect: ColorSchemeTeamWhereUniqueInput, # Relation to one
    connectOrCreate: ColorSchemeTeamConnectOrCreateInput, # Relation to one
    update: ColorSchemeTeamUpdateInput, # Relation to one
    upsert: ColorSchemeTeamUpsertInput, # Relation to one
    delete: true,
    disconnect: true,
}
```

</p>
</details>

```graphql
mutation {
    updateColorScheme(
        data: {
            team: {
                connectOrCreate: {
                    where: ColorSchemeWhereUniqueInput
                    create: ColorSchemeCreateInput
                }
            }
        }
    ) {
        id
    }
}
```

### Deleting a single ColorScheme

Single ColorScheme delete mutations can take one input:

-   `where`: `ColorSchemeWhereUniqueInput!` A required object type specifying a field with a unique constraint (like id).

**Standard delete mutation**

```graphql
mutation {
    deleteColorScheme(where: { id: 2 }) {
        id
        createdAt
        updatedAt
        primary
        secondary
        teamId
    }
}
```

### Deleting multiple ColorSchemes

Multiple ColorSchemes delete mutations can take one input:

-   `where`: `ColorSchemeWhereInput!` A required object type specifying a field with a unique constraint (like createdAt).

**Standard deleteMany mutation**

```graphql
mutation {
    deleteManyColorSchemes(
        where: { createdAt: "dd/mm/YYYY" }
    ) {
        count
    }
}
```

> `deleteManyColorSchemes` returns an integer that represents the number of records that were deleted.

## Subscriptions

Subscriptions allows listen for data changes when a specific event happens, in real-time.

### Subscribing to a single ColorScheme creation

```graphql
subscription {
    onCreatedColorScheme {
        id
        createdAt
        updatedAt
        primary
        secondary
        teamId
    }
}
```

### Subscribing to a single ColorScheme update

```graphql
subscription {
    onUpdatedColorScheme {
        id
        createdAt
        updatedAt
        primary
        secondary
        teamId
    }
}
```

### Subscribing to a single ColorScheme deletion

```graphql
subscription {
    onDeletedColorScheme {
        id
        createdAt
        updatedAt
        primary
        secondary
        teamId
    }
}
```
