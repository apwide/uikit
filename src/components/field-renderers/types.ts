export type IssuePriority = {
  name?: string
  iconUrl?: string
}

export type StatusCategory = {
  colorName?: string
}

export type IssueStatus = {
  statusCategory?: StatusCategory
}


export type IssueType = {
  name?: string
  iconUrl?: string
}

export type User = {
  key?: string
  name?: string
  displayName?: string
  avatar?: string
  avatarUrls?: {
    '48x48'?: string
  }
}

export type Issue = {
  id?: string
  key?: string
  fields?: {
    issuetype?: IssueType
    priority?: IssuePriority
    resolution?: unknown
    status?: IssueStatus
    assignee?: User
  }
}