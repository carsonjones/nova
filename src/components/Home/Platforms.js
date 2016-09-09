import React from 'react'
import {
  Tab,
  Tabs,
  TabList,
  TabPanel,
} from 'react-tabs';
Tabs.setUseDefaultStyles(false)
import platforms from '../../data/platforms'
import {
  colors,
  spacing,
  borderSizes,
  opacities,
} from '../../data/styleGuide'
import Heading from '../Heading'
import Icon from '../Icon'
import List from '../List'
import Link from '../Link'

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
          marginBottom: spacing.medium,
        }}>
          {platforms.map((platform, index) => (
            <Tab
              key={index}
              onClick={this.handleTabClick.bind(this, index)}
              style={{
                color: colors.normal.blue,
                borderBottom: `${borderSizes.medium}px solid ${index === this.state.activeTab ? colors.bright.white : colors.decoration.medium}`,
                paddingBottom: spacing.small,
                opacity: index === this.state.activeTab ? 1 : opacities.inactive,
                flex: 1,
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <div style={{
                width: '60%',
              }}>
                <Icon
                  type={platform.icon}
                  fill={colors.normal.blue}
                />
              </div>
            </Tab>
          ))}
        </TabList>
        {platforms.map((platform, index) => (
          <TabPanel key={index}>
            <div style={{
              marginBottom: spacing.small,
              marginLeft: spacing.medium,
              float: 'right',
              width: '20%',
            }}>
              <Icon
                type={platform.icon}
                fill={colors.decoration.medium}
                size='100%'
              />
            </div>
            <Heading level={4}>
              {platform.title}
            </Heading>
            {platform.steps
              ? <div style={{
                  marginBottom: (platform.notes || platform.links) ? spacing.medium : 0,
                }}>
                  <Heading level={5}>
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
                  marginBottom: (platform.links) ? spacing.medium : 0,
                }}>
                  <Heading level={5}>
                    Notes
                  </Heading>
                  <List items={platform.notes} />
                </div>
              : null
            }
            {platform.links
              ? <div>
                  <Heading level={5}>
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
          </TabPanel>
        ))}
      </Tabs>
    )
  }
}

export default Platforms
