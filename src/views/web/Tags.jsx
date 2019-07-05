import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'
import { withRouter, Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { Icon, Tag, Divider } from 'antd'
import TagCloud from 'react3dtagcloud'

const mapStateToProps = state => ({})

@connect(state => ({
  colorList: state.common.colorList,
  tagList: state.article.tagList
}))

@withRouter
class Tags extends Component {
  static propTypes = {
    type: PropTypes.string.isRequired,
    list: PropTypes.array.isRequired
  }

  static defaultProps = {
    type: 'tags',
    list: []
  }

  render() {
    const { type, tagList } = this.props
    const tags = tagList.map(item => item.name)

    return (
      <div style={{ width: '100%', height: '1000px' }}>
        <TagCloud tagName={ tags } url="tags" radius={100}></TagCloud>
      </div>
    )
  }
}

export default Tags
