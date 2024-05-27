# Willeder Next Boilerplate

To get started clone the repo and run below commands

```bash
yarn

yarn dev
```

# TodoTree Usage and Best Practices

## Utilizing TodoTree for Collaboration

TodoTree is a helpful tool for commenting and sharing information within a team. You can use specific keywords to annotate your code, facilitating better communication and task tracking. Here are some commonly used keywords and their purposes:

- **BUG**: Indicates an error or issue in the code.
- **FIXME**: Flags code that requires correction or fixing.
- **COMPLETED**: Marks tasks that have been finished.
- **QUESTION**: Identifies points where additional information is needed.
- **DOUBT**: Points out areas of uncertainty or ambiguity.
- **OPTIMISE**: Suggests opportunities for performance improvements.
- **IMPROVE**: Highlights areas that could be enhanced or made more efficient.
- **REFACTOR**: Signals that the code needs restructuring or cleanup.

### Comment Examples

Here are some examples of using TodoTree keywords in comments:

```
// BUG: This API call returns incorrect data.
```

```
// FIXME: This loop causes a stack overflow under certain conditions.
```

```
// QUESTION: Why are we using this algorithm instead of a more efficient one?
```

```
// REFACTOR: Consider breaking this large function into smaller pieces.
```

## Creating Component Folders

There are two primary approaches to creating component folders in a project:

### Bulk Creation

If you have a list of components at the project's start, you can use a script to create all the necessary folders at once. This method ensures consistency and saves time.

replace the folders list in bash to your required list of pages

## To create a list of pages for next js

- [For windows](docs/bulk_creation_pages_windows.md)
- [For OSX](docs/bulk_creation_pages_osx.md)

## To create list of components

- [For windows](docs/bulk_components_creation_windows.md)
- [For OSX](docs/bulk_components_creation_osx.md)

### Individual Creation

For smaller projects or creating individual components, you can use the FolderTemplate Extension in Visual Studio Code. Here's how to create component folders individually:

1. Right-click in the parent directory and select "Create New Templated Folder."
2. Enter the name of the folder, and then re-enter it to confirm.
3. Once the folders are created, you can start writing your code. Don't forget to add tests for each component.

### Testing Components

Testing is crucial for maintaining code quality. Ensure you add tests for each component after creating it. This practice helps catch bugs early and ensures a robust codebase.

## Structuring Meaningful Commits

When committing code to a version control system like Git, aim for smaller, more focused commits. This approach provides a clear project history and facilitates easier code reviews.

Here are some examples of meaningful commit messages:

- `Build: Initialized the project.`
- `Style: Added styles for input fields.`
- `Refactor: Reorganized component structure.`
- `Fix: Corrected API endpoint returning incorrect data.`

A good commit message typically contains:

- A concise summary of what changed.
- Additional details in the commit description if necessary.

By following these guidelines, you can improve collaboration, maintain clear project organization, and ensure a more efficient development process.
