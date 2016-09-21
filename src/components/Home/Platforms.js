import React from 'react'
import {
  Tab,
  Tabs,
  TabList,
  TabPanel,
} from 'react-tabs'
Tabs.setUseDefaultStyles(false)
import platforms from '../../data/platforms'
import {
  colors,
  spacing,
  borderSizes,
  borderRadii,
} from '../../data/styleGuide'
import Heading from '../Heading'
import Icon from '../Icon'
import List from '../List'
import Link from '../Link'
import Image from '../Image'

const tabBorder = `${borderSizes.medium}px solid ${colors.decoration.medium}`;

class Platforms extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      activeTab: 0,
    }
  }

  handleTabClick(clickedTabIndex) {
    this.setState({
      activeTab: clickedTabIndex,
    })
  }

  render() {
    return (
      <Tabs>
        <TabList style={{
          listStyle: 'none',
          padding: 0,
          display: 'flex',
          justifyContent: 'space-between',
          borderTop: tabBorder,
          borderRight: tabBorder,
          borderLeft: tabBorder,
          borderTopRightRadius: borderRadii.large,
          borderTopLeftRadius: borderRadii.large,
        }}>
          {platforms.map((platform, index) => (
            <Tab
              key={index}
              onClick={this.handleTabClick.bind(this, index)}
              style={{
                background: index === this.state.activeTab
                  ? colors.normal.black
                  : colors.decoration.medium,
                flex: 1,
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                padding: '2%',
                lineHeight: 0,
              }}
            >
              <div style={{
                width: '60%',
              }}>
                <Icon
                  type={platform.icon}
                  fill={
                    index === this.state.activeTab
                      ? colors.normal.cyan
                      : colors.normal.black
                  }
                />
              </div>
            </Tab>
          ))}
        </TabList>
        {platforms.map((platform, index) => (
          <TabPanel
            key={index}
            style={{
              borderRight: tabBorder,
              borderBottom: tabBorder,
              borderLeft: tabBorder,
              borderBottomRightRadius: borderRadii.large,
              borderBottomLeftRadius: borderRadii.large,
              paddingTop: spacing.large,
              paddingRight: spacing.medium,
              paddingBottom: spacing.medium,
              paddingLeft: spacing.medium,
            }}
          >
            <Heading level={4}>
              {platform.title}
            </Heading>
            <div style={{
              marginTop: spacing.large,
            }}>
              {platform.screenshot
                ? <div style={{
                    marginBottom: spacing.medium,
                  }}>
                    <Image
                      src={platform.screenshot}
                      quiet={true}
                    />
                  </div>
                : null
              }
              {platform.steps
                ? <div style={{
                    marginBottom: (platform.notes || platform.links)
                      ? spacing.medium
                      : 0,
                  }}>
                    <Heading level={3}>
                      Instructions
                    </Heading>
                    <List
                      items={platform.steps}
                      type='number'
                    />
                  </div>
                : null
              }
              {platform.notes
                ? <div style={{
                    marginBottom: (platform.links)
                      ? spacing.medium
                      : 0,
                  }}>
                    <Heading level={3}>
                      Notes
                    </Heading>
                    <List items={platform.notes} />
                  </div>
                : null
              }
              {platform.links
                ? <div>
                    <Heading level={3}>
                      Links
                    </Heading>
                    <List
                      items={platform.links.map(link => (
                        <Link
                          href={link.url}
                          inline={true}
                        >
                          {link.title}
                        </Link>
                      ))}
                      type='link'
                    />
                  </div>
                : null
              }
            </div>
          </TabPanel>
        ))}
      </Tabs>
    )
  }
}

export default Platforms
