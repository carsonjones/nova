import React from 'react'
import platforms from '../../data/platforms'
import {colors, spacing} from '../../data/styleGuide'
import Heading from '../Heading'
import Icon from '../Icon'
import List from '../List'
import Well from '../Well'
import Link from '../Link'

const Platforms = () => (
  <div>
    {platforms.map((platform, index) => (
      <div
        key={index}
        style={{
          marginBottom: (index + 1 < platforms.length) ? spacing.medium : 0,
        }}
      >
        <Well>
          <Heading level={4}>
            {platform.title}
          </Heading>
          <div style={{
            marginBottom: spacing.small,
          }}>
            <Icon
              type={platform.icon}
              fill={colors.decoration.medium}
              size={120}
            />
          </div>
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
        </Well>
      </div>
    ))}
  </div>
)

export default Platforms
