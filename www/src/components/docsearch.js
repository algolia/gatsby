import React, { Component } from "react"
import SearchIcon from "react-icons/lib/fa/search"

class DocSearch extends Component {
  state = {
    enabled: true,
  }
  componentDidMount() {
    // Initialize Algolia search.
    // eslint-disable-next-line no-undef
    if (window.docsearch) {
      // eslint-disable-next-line no-undef
      window.docsearch({
        apiKey: `71af1f9c4bd947f0252e17051df13f9c`,
        indexName: `gatsbyjs`,
        inputSelector: `#algolia-doc-search`,
        algoliaOptions: {
          hitsPerPage: 5,
        },
      })
    } else {
      console.warn(`Search has failed to load and now is being disabled`)
      this.setState({ enabled: false })
    }
  }

  render() {
    const { enabled } = this.state
    const { navItemStyles, socialIconsStyles } = this.props

    return enabled ? (
      <form
        css={{
          marginTop: `5vw`,
        }}
      >
        <input
          css={{}}
          id="algolia-doc-search"
          type="search"
          placeholder="Search docs"
          aria-label="Search docs"
          defaultValue="hello"
        />
        <a
          href=""
          css={{
            ...navItemStyles,
            ...socialIconsStyles,
          }}
        >
          <SearchIcon style={{ verticalAlign: `text-top` }} />
        </a>
      </form>
    ) : null
  }
}

export default DocSearch
