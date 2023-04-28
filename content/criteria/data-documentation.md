+++
title = "Data Documentation"
weight = 2
+++

Examine the dataset closely to understand what it is, how the files interrelate, and what information is needed to reuse.

- Check for quality assurance and usability issues such as missing data, ambiguous headings, code execution failures, and data presentation concerns
- Try to detect and extract any “hidden documentation” inherent to the data files that may facilitate reuse or expose unintended information
- Determine if the documentation of the data is sufficient for a user with similar qualifications to the researcher's to understand and reuse the data. If not, create additional documentation (e.g., a data dictionary)

## Key Ethical Considerations

- If working with human data, is this research done with and not on communities and populations involved?
  - Are there authoritative group representatives who should be contacted?
- Are there labels or other descriptive indicators that could be applied to better represent or protect an identified group of people impacted by this dataset? (Example: [TK labels](https://localcontexts.org/labels/traditional-knowledge-labels/))

## Essential Tasks

### A README file

Acceptable formats include `txt`, `rtf`, or `mdl`. For more information about READMEs, see [Cornell University’s Guide to writing “readme” style metadata](https://data.research.cornell.edu/content/readme).

- Include complete documentation about your dataset
  - Provenance Information
  - Licensing Information
  - Descriptions of Study Level and/or Data Level information:
    - Study-level data documentation:
      - Provenance of information gathered in this dataset
      - Methods used to acquire, organize, or normalize this data
      - Descriptions of any transformations that this data has undergone
    - Data-level documentation:
      - Contents of data files
      - Definitions of all variables, labels, descriptions, units of measurement used in data files
      - Defined labels or codes used to indicate missing data (ie no blank spaces, but what would indicate unknown or missing)
- Include participant information and codebooks (if applicable)
- Check the accessibility of all files
  - Each file can be opened without proprietary software
  - There are robust descriptions in plain text of data files and any images.

### File and Folder Names

How are your files (and folders) named?

- Are names consistent?
- Are the names meaningful?
- Have you documented each of the file (and folder) names?
- Do the file and folder names reflect versioning? (i.e. updated files are named in a way that is findable without opening up the files themselves)

#### Don'ts:

- Use special characters in the file name
- Leave blank spaces in the file name
- Use different naming logics for each file or type of file

#### Do's:

- Use less than 25 characters per file name
- Use ISO 8601 to format dates: YYYY-MM-DD
- Use capitals or underscores instead of spaces or periods
- Write down your naming convention
