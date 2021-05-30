import{g as e,u as t,a as n,b as r,i as a,B as l,c as s,A as o,d as i,m as c,e as m,z as d,f as u,p,r as g,s as v,h,R as f,L as b,j as E,N as x,k as y,H as w,l as N,n as k,o as C,t as $,q as U,v as I,w as S,x as P,y as F,C as M,T as R,D as A,E as D,F as T,G as L,I as O,J as z,K as _,M as q,O as H,P as B,Q as j,S as G,U as V,Y,V as W,W as Z,X as Q,Z as J,_ as K,$ as X,a0 as ee,a1 as te,a2 as ne,a3 as re,a4 as ae,a5 as le,a6 as se,a7 as oe,a8 as ie,a9 as ce,aa as me,ab as de,ac as ue,ad as pe,ae as ge,af as ve,ag as he,ah as fe,ai as be,aj as Ee,ak as xe,al as ye,am as we,an as Ne,ao as ke,ap as Ce,aq as $e,ar as Ue,as as Ie,at as Se,au as Pe,av as Fe,aw as Me,ax as Re,ay as Ae,az as De,aA as Te,aB as Le,aC as Oe,aD as ze,aE as _e,aF as qe,aG as He,aH as Be,aI as je,aJ as Ge,aK as Ve,aL as Ye,aM as We,aN as Ze,aO as Qe,aP as Je,aQ as Ke,aR as Xe,aS as et,aT as tt,aU as nt,aV as rt,aW as at,aX as lt,aY as st,aZ as ot,a_ as it,a$ as ct,b0 as mt,b1 as dt,b2 as ut,b3 as pt,b4 as gt,b5 as vt,b6 as ht,b7 as ft,b8 as bt,b9 as Et,ba as xt,bb as yt,bc as wt,bd as Nt,be as kt,bf as Ct,bg as $t,bh as Ut,bi as It,bj as St,bk as Pt,bl as Ft,bm as Mt,bn as Rt,bo as At,bp as Dt,bq as Tt,br as Lt,bs as Ot,bt as zt,bu as _t,bv as qt,bw as Ht,bx as Bt,by as jt,bz as Gt,bA as Vt,bB as Yt,bC as Wt,bD as Zt,bE as Qt,bF as Jt,bG as Kt,bH as Xt,bI as en,bJ as tn,bK as nn,bL as rn,bM as an,bN as ln,bO as sn,bP as on,bQ as cn,bR as mn,bS as dn,bT as un,bU as pn,bV as gn,bW as vn,bX as hn,bY as fn,bZ as bn,b_ as En,b$ as xn,c0 as yn,c1 as wn,c2 as Nn,c3 as kn,c4 as Cn,c5 as $n,c6 as Un,c7 as In,c8 as Sn,c9 as Pn,ca as Fn,cb as Mn,cc as Rn,cd as An,ce as Dn}from"./vendor.ca727324.js";const Tn={entityNotFound:"{{replace}} not found!",invalidUserAuth:"'USER' authorization can only be used on User entity",notLoggedIn:"Not logged in",fileSize:"File size must be less than {{replace}}MB",channelPermissions:"(useChannelPermissions) channelPermissions and serverPermissions must have same length",folder:{deleted:"Folder has been deleted",notOwner:"You do not own this folder",nameTooLong:"Name cannot be longer than 300 characters",alreadyExists:"You already have a folder with that name",noPermission:"You do not have permission to modify this folder.",alreadyAdded:"This post is already in this folder.",cannotEdit:"Cannot edit Read Later or Favorites folders.",cannotDelete:"Cannot delete Read Later or Favorites folders.",cannotCreate:"Cannot create Read Later or Favorites folders.",notCollaborative:"This folder is not collaborative.",notInFolder:"That post is not in this folder.",owner:"You are the owner of this folder",private:"That folder is private.",friends:"Must be friends with this folder's owner"},message:{notAuthor:"You are not the author of this message",missingArgs:"Must provide channelId, groupId, or userId",notSentInChannel:"Message was not sent in a channel",empty:"Message cannot be empty",textOrFile:"Must provide text or a file"},comment:{notAuthor:"You are not the author of this comment",empty:"Comment cannot be empty",alreadyDeleted:"Comment already deleted",alreadyVoted:"You have already voted this comment"},post:{notAuthor:"You are not the author of this post",alreadyVoted:"You have already voted this post",alreadyPinned:"Post is already pinned",notPinned:"Post is not pinned"},group:{maxSize:"Max group size is 10 users",notJoined:"You are not in this group"},server:{notJoined:"You have not joined this planet",banned:"You are banned from this planet",alreadyJoined:"You have already joined this planet",missingPermission:"Missing planet permission {{replace}}",notOwner:"Must be planet owner",inviteRequired:"Invite required to join this planet",inviteExpired:"This invite has expired."},channel:{missingPermission:"Missing channel permission {{replace}}"},user:{blocking:"You are blocking this user",blocked:"This user has blocked you",friendRequestNotSent:"You have not sent a friend request to this user",friendRequestNotReceived:"You have not received a friend request from this user",notFriends:"You are not friends with this user",alreadyBlocking:"You are already blocking this user",notBlocking:"You are not blocking this user"},upload:{invalidMime:"Image must be PNG or JPEG"},login:{invalid:"Invalid login",invalidEmail:"Invalid email address",emailInUse:"Email already in use",illegalName:"Name cannot contain {{replace}}",nameLength:"Name must be 2-32 characters",banned:"Banned{{replace}}",wrongPassword:"Incorrect password",usernameTaken:"Username taken"},notif:{notYours:"This is not your notification"}},Ln={hide:"Hide Folders",show:"Show Folders",favorites:"Favorites",readLater:"Read Later",added:"Added to {{name}}!",name:"Name",postCount:"{{count}} Post",postCount_plural:"{{count}} Posts",createdBy:"Created by",userFolder:"User Folder",serverFolder:"Planet Folder",collaborative:"Collaborative",user:{title:"Your Folders",create:"Create Folder"},server:{title:"{{name}}'s Folders",create:"Create Planet Folder"},context:{follow:"Follow Folder",unfollow:"Unfollow Folder",delete:"Delete Folder",copyLink:"Copy Folder Link",edit:"Edit Folder",collaborative:"Collaborative",changeVisibility:"Change Visibility",visibility:{public:"Public",friends:"Friends Only",private:"Private",unlisted:"Unlisted"}}},On={};var zn,_n,qn,Hn,Bn,jn,Gn,Vn,Yn,Wn,Zn,Qn,Jn,Kn,Xn,er,tr,nr,rr,ar,lr,sr,or,ir,cr,mr;(_n=zn||(zn={})).Private="Private",_n.Public="Public",_n.Restricted="Restricted",(Hn=qn||(qn={})).Blue="Blue",Hn.Green="Green",Hn.Indigo="Indigo",Hn.Pink="Pink",Hn.Purple="Purple",Hn.Red="Red",Hn.Yellow="Yellow",(jn=Bn||(Bn={})).New="New",jn.Top="Top",(Vn=Gn||(Gn={})).Friends="Friends",Vn.Private="Private",Vn.Public="Public",Vn.Unlisted="Unlisted",(Wn=Yn||(Yn={})).FriendRequestReceived="FriendRequestReceived",Wn.Initial="Initial",Wn.Join="Join",Wn.Left="Left",Wn.Normal="Normal",(Qn=Zn||(Zn={})).Away="Away",Qn.DoNotDisturb="DoNotDisturb",Qn.Offline="Offline",Qn.Online="Online",(Kn=Jn||(Jn={})).Added="Added",Kn.Hot="Hot",Kn.New="New",Kn.Top="Top",(er=Xn||(Xn={})).All="All",er.Day="Day",er.Hour="Hour",er.Month="Month",er.Week="Week",er.Year="Year",(nr=tr||(tr={})).New="New",nr.Top="Top",(ar=rr||(rr={})).Blocked="Blocked",ar.Blocking="Blocking",ar.FriendRequestIncoming="FriendRequestIncoming",ar.FriendRequestOutgoing="FriendRequestOutgoing",ar.Friends="Friends",ar.None="None",(sr=lr||(lr={})).Arts="Arts",sr.Business="Business",sr.Culture="Culture",sr.Discussion="Discussion",sr.Entertainment="Entertainment",sr.Gaming="Gaming",sr.Health="Health",sr.Hobbies="Hobbies",sr.Lifestyle="Lifestyle",sr.Memes="Memes",sr.Meta="Meta",sr.News="News",sr.Other="Other",sr.Politics="Politics",sr.Programming="Programming",sr.Science="Science",sr.Sports="Sports",sr.Technology="Technology",(ir=or||(or={})).AddPostToFolder="AddPostToFolder",ir.Admin="Admin",ir.DisplayRoleSeparately="DisplayRoleSeparately",ir.ManageChannels="ManageChannels",ir.ManageComments="ManageComments",ir.ManageFolders="ManageFolders",ir.ManageMessages="ManageMessages",ir.ManagePosts="ManagePosts",ir.ManageServer="ManageServer",ir.ManageUsers="ManageUsers",ir.PrivateChannels="PrivateChannels",ir.RestrictedChannels="RestrictedChannels",ir.SendMessages="SendMessages",(mr=cr||(cr={})).Down="Down",mr.None="None",mr.Up="Up";const dr=e`
    fragment Channel on Channel {
  id
  name
  description
  isUnread
  mentionCount
  type
}
    `,ur=e`
    fragment Image on Image {
  originalUrl
  popupUrl
  popupWidth
  popupHeight
  smallUrl
  smallWidth
  smallHeight
}
    `,pr=e`
    fragment Metadata on LinkMetadata {
  author
  date
  description
  image {
    ...Image
  }
  publisher
  title
  twitterCard
  url
  domain
  themeColor
}
    ${ur}`,gr=e`
    fragment Comment on Comment {
  id
  parentComment {
    id
  }
  text
  voteCount
  voteType
  isDeleted
  createdAt
  updatedAt
  linkMetadatas {
    ...Metadata
  }
}
    ${pr}`,vr=e`
    fragment User on User {
  id
  username
  avatarUrl
  isOnline
  onlineStatus
  isCurrentUser
  color
  isOg
}
    `,hr=e`
    fragment Group on Group {
  id
  name
  displayName
  avatarUrl
  unreadCount
  lastMessageAt
}
    `,fr=e`
    fragment CurrentUser on User {
  ...User
  isAdmin
  email
  servers {
    id
    name
    displayName
    avatarUrl
    owner {
      id
    }
    permissions
    channels {
      isUnread
      mentionCount
    }
  }
  relatedUsers {
    ...User
    showChat
    unreadCount
  }
  groups {
    ...Group
    owner {
      id
    }
    users {
      ...User
    }
  }
}
    ${vr}
${hr}`,br=e`
    fragment Folder on Folder {
  id
  name
  avatarUrl
  description
  postCount
  followerCount
  isCollaborative
  visibility
}
    `,Er=e`
    fragment Message on Message {
  id
  text
  createdAt
  updatedAt
  type
  images {
    ...Image
  }
  file {
    url
    mime
    filename
    size
  }
  linkMetadatas {
    ...Metadata
  }
  mentionedUsers {
    id
  }
  isEveryoneMentioned
  isPinned
}
    ${ur}
${pr}`,xr=e`
    fragment Post on Post {
  id
  title
  isPinned
  text
  linkUrl
  relativeUrl
  commentCount
  voteCount
  voteType
  thumbnailUrl
  domain
  isDeleted
  createdAt
  updatedAt
  linkMetadata {
    ...Metadata
  }
  images {
    image {
      ...Image
    }
    linkUrl
    caption
  }
}
    ${pr}
${ur}`,yr=e`
    fragment RelatedUser on User {
  ...User
  showChat
  unreadCount
  lastMessageAt
}
    ${vr}`,wr=e`
    fragment Role on Role {
  id
  name
  color
  permissions
  isDefault
}
    `,Nr=e`
    fragment ServerUser on ServerUser {
  id
  role {
    ...Role
  }
  user {
    ...User
  }
}
    ${wr}
${vr}`,kr=e`
    fragment Reply on Reply {
  id
  isRead
  comment {
    id
    text
    voteCount
    createdAt
    author {
      ...User
    }
    serverUser {
      ...ServerUser
    }
    post {
      id
      title
      relativeUrl
      server {
        id
        displayName
        name
        avatarUrl
      }
    }
    parentComment {
      id
      text
      voteCount
      createdAt
      author {
        ...User
      }
      serverUser {
        ...ServerUser
      }
    }
  }
}
    ${vr}
${Nr}`,Cr=e`
    fragment Server on Server {
  id
  name
  displayName
  description
  avatarUrl
  bannerUrl
  category
  userCount
  isJoined
  isFeatured
  isDownvotesEnabled
  owner {
    id
  }
  permissions
}
    `,$r=e`
    mutation createChannel($input: CreateChannelInput!) {
  createChannel(input: $input) {
    ...Channel
  }
}
    ${dr}`;const Ur=e`
    mutation updateChannel($input: UpdateChannelInput!) {
  updateChannel(input: $input) {
    ...Channel
  }
}
    ${dr}`;const Ir=e`
    mutation deleteChannel($input: DeleteChannelInput!) {
  deleteChannel(input: $input)
}
    `;e`
    mutation moveChannel($input: MoveChannelInput!) {
  moveChannel(input: $input) {
    ...Channel
  }
}
    ${dr}`;const Sr=e`
    mutation readChannel($input: ReadChannelInput!) {
  readChannel(input: $input) {
    ...Channel
  }
}
    ${dr}`;const Pr=e`
    mutation createComment($input: CreateCommentInput!) {
  createComment(input: $input) {
    ...Comment
    author {
      ...User
    }
    serverUser {
      ...ServerUser
    }
  }
}
    ${gr}
${vr}
${Nr}`;e`
    mutation updateComment($input: UpdateCommentInput!) {
  updateComment(input: $input) {
    ...Comment
    author {
      ...User
    }
    serverUser {
      ...ServerUser
    }
  }
}
    ${gr}
${vr}
${Nr}`;const Fr=e`
    mutation deleteComment($input: DeleteCommentInput!) {
  deleteComment(input: $input) {
    ...Comment
    author {
      ...User
    }
    serverUser {
      ...ServerUser
    }
  }
}
    ${gr}
${vr}
${Nr}`;const Mr=e`
    mutation updateCommentVote($input: UpdateCommentVoteInput!) {
  updateCommentVote(input: $input) {
    ...Comment
    author {
      ...User
    }
    serverUser {
      ...ServerUser
    }
  }
}
    ${gr}
${vr}
${Nr}`;const Rr=e`
    mutation pinComment($input: PinCommentInput!) {
  pinComment(input: $input) {
    ...Comment
    author {
      ...User
    }
    serverUser {
      ...ServerUser
    }
  }
}
    ${gr}
${vr}
${Nr}`;const Ar=e`
    mutation unpinComment($input: UnpinCommentInput!) {
  unpinComment(input: $input) {
    ...Comment
    author {
      ...User
    }
    serverUser {
      ...ServerUser
    }
  }
}
    ${gr}
${vr}
${Nr}`;e`
    mutation createFolder($input: CreateFolderInput!) {
  createFolder(input: $input) {
    ...Folder
  }
}
    ${br}`;const Dr=e`
    mutation updateFolder($input: UpdateFolderInput!) {
  updateFolder(input: $input) {
    ...Folder
  }
}
    ${br}`;const Tr=e`
    mutation deleteFolder($input: DeleteFolderInput!) {
  deleteFolder(input: $input)
}
    `;e`
    mutation moveServerFolder($input: MoveServerFolderInput!) {
  moveServerFolder(input: $input) {
    ...Folder
  }
}
    ${br}`,e`
    mutation moveUserFolder($input: MoveUserFolderInput!) {
  moveUserFolder(input: $input) {
    ...Folder
  }
}
    ${br}`;const Lr=e`
    mutation followFolder($input: FollowFolderInput!) {
  followFolder(input: $input) {
    ...Folder
  }
}
    ${br}`;const Or=e`
    mutation unfollowFolder($input: UnfollowFolderInput!) {
  unfollowFolder(input: $input) {
    ...Folder
  }
}
    ${br}`;e`
    mutation addPostToFolder($input: AddPostToFolderInput!) {
  addPostToFolder(input: $input) {
    ...Folder
  }
}
    ${br}`,e`
    mutation removePostFromFolder($input: RemovePostFromFolderInput!) {
  removePostFromFolder(input: $input) {
    ...Folder
  }
}
    ${br}`,e`
    mutation createGroup($input: CreateGroupInput!) {
  createGroup(input: $input) {
    ...Group
  }
}
    ${hr}`,e`
    mutation updateGroup($input: UpdateGroupInput!) {
  updateGroup(input: $input) {
    ...Group
  }
}
    ${hr}`,e`
    mutation leaveGroup($input: LeaveGroupInput!) {
  leaveGroup(input: $input)
}
    `;const zr=e`
    mutation readGroup($input: ReadGroupInput!) {
  readGroup(input: $input) {
    ...Group
  }
}
    ${hr}`;e`
    mutation addUserToGroup($input: AddUserToGroupInput!) {
  addUserToGroup(input: $input) {
    ...Group
  }
}
    ${hr}`,e`
    mutation removeUserFromGroup($input: RemoveUserFromGroupInput!) {
  removeUserFromGroup(input: $input) {
    ...Group
  }
}
    ${hr}`;const _r=e`
    mutation createMessage($input: CreateMessageInput!) {
  createMessage(input: $input) {
    ...Message
    author {
      ...User
    }
    serverUser {
      ...ServerUser
    }
  }
}
    ${Er}
${vr}
${Nr}`;function qr(e){const n={...On,...e};return t(_r,n)}e`
    mutation updateMessage($input: UpdateMessageInput!) {
  updateMessage(input: $input) {
    ...Message
    author {
      ...User
    }
    serverUser {
      ...ServerUser
    }
  }
}
    ${Er}
${vr}
${Nr}`;const Hr=e`
    mutation deleteMessage($input: DeleteMessageInput!) {
  deleteMessage(input: $input)
}
    `;const Br=e`
    mutation pinMessage($input: PinMessageInput!) {
  pinMessage(input: $input) {
    ...Message
    author {
      ...User
    }
    serverUser {
      ...ServerUser
    }
  }
}
    ${Er}
${vr}
${Nr}`;function jr(e){const n={...On,...e};return t(Br,n)}const Gr=e`
    mutation unpinMessage($input: UnpinMessageInput!) {
  unpinMessage(input: $input) {
    ...Message
    author {
      ...User
    }
    serverUser {
      ...ServerUser
    }
  }
}
    ${Er}
${vr}
${Nr}`;function Vr(e){const n={...On,...e};return t(Gr,n)}const Yr=e`
    mutation updateTyping($input: TypingInput!) {
  updateTyping(input: $input)
}
    `;const Wr=e`
    mutation createPost($input: CreatePostInput!) {
  createPost(input: $input) {
    ...Post
    author {
      ...User
    }
    serverUser {
      ...ServerUser
    }
  }
}
    ${xr}
${vr}
${Nr}`;e`
    mutation updatePost($input: UpdatePostInput!) {
  updatePost(input: $input) {
    ...Post
    author {
      ...User
    }
    serverUser {
      ...ServerUser
    }
  }
}
    ${xr}
${vr}
${Nr}`;const Zr=e`
    mutation deletePost($input: DeletePostInput!) {
  deletePost(input: $input) {
    ...Post
    author {
      ...User
    }
    serverUser {
      ...ServerUser
    }
  }
}
    ${xr}
${vr}
${Nr}`;const Qr=e`
    mutation updatePostVote($input: UpdatePostVoteInput!) {
  updatePostVote(input: $input) {
    ...Post
    author {
      ...User
    }
    serverUser {
      ...ServerUser
    }
  }
}
    ${xr}
${vr}
${Nr}`;e`
    mutation pinPost($input: PinPostInput!) {
  pinPost(input: $input) {
    ...Post
    author {
      ...User
    }
    serverUser {
      ...ServerUser
    }
  }
}
    ${xr}
${vr}
${Nr}`,e`
    mutation unpinPost($input: UnpinPostInput!) {
  unpinPost(input: $input) {
    ...Post
    author {
      ...User
    }
    serverUser {
      ...ServerUser
    }
  }
}
    ${xr}
${vr}
${Nr}`;const Jr=e`
    mutation createFriendRequest($input: CreateFriendRequestInput!) {
  createFriendRequest(input: $input) {
    ...User
    relatedUsers {
      ...RelatedUser
    }
    servers {
      id
      avatarUrl
      name
    }
  }
}
    ${vr}
${yr}`;e`
    mutation deleteFriendRequest($input: DeleteFriendRequestInput!) {
  deleteFriendRequest(input: $input) {
    ...User
    relatedUsers {
      ...RelatedUser
    }
    servers {
      id
      avatarUrl
      name
    }
  }
}
    ${vr}
${yr}`,e`
    mutation answerFriendRequest($input: AnswerFriendRequestInput!) {
  answerFriendRequest(input: $input) {
    ...RelatedUser
  }
}
    ${yr}`,e`
    mutation blockUser($input: BlockUserInput!) {
  blockUser(input: $input) {
    ...RelatedUser
  }
}
    ${yr}`,e`
    mutation unblockUser($input: UnblockUserInput!) {
  unblockUser(input: $input) {
    ...RelatedUser
  }
}
    ${yr}`;const Kr=e`
    mutation removeFriend($input: RemoveFriendInput!) {
  removeFriend(input: $input) {
    ...RelatedUser
  }
}
    ${yr}`;const Xr=e`
    mutation readDm($input: ReadDmInput!) {
  readDm(input: $input) {
    ...RelatedUser
  }
}
    ${yr}`;function ea(e){const n={...On,...e};return t(Xr,n)}const ta=e`
    mutation openDm($input: OpenDmInput!) {
  openDm(input: $input) {
    ...RelatedUser
  }
}
    ${yr}`;const na=e`
    mutation closeDm($input: CloseDmInput!) {
  closeDm(input: $input) {
    ...RelatedUser
  }
}
    ${yr}`;function ra(e){const n={...On,...e};return t(na,n)}const aa=e`
    mutation markReplyRead($input: MarkReplyReadInput!) {
  markReplyRead(input: $input) {
    ...Reply
  }
}
    ${kr}`;const la=e`
    mutation markReplyUnread($input: MarkReplyUnreadInput!) {
  markReplyUnread(input: $input) {
    ...Reply
  }
}
    ${kr}`;const sa=e`
    mutation createRole($input: CreateRoleInput!) {
  createRole(input: $input) {
    ...Role
  }
}
    ${wr}`;const oa=e`
    mutation updateRole($input: UpdateRoleInput!) {
  updateRole(input: $input) {
    ...Role
  }
}
    ${wr}`;const ia=e`
    mutation deleteRole($input: DeleteRoleInput!) {
  deleteRole(input: $input)
}
    `;const ca=e`
    mutation setUserRole($input: SetUserRoleInput!) {
  setUserRole(input: $input) {
    ...ServerUser
  }
}
    ${Nr}`;const ma=e`
    mutation createServer($input: CreateServerInput!) {
  createServer(input: $input) {
    ...Server
    roles {
      ...Role
    }
  }
}
    ${Cr}
${wr}`;const da=e`
    mutation updateServer($input: UpdateServerInput!) {
  updateServer(input: $input) {
    ...Server
  }
}
    ${Cr}`;const ua=e`
    mutation deleteServer($input: DeleteServerInput!) {
  deleteServer(input: $input)
}
    `;e`
    mutation moveServer($input: MoveServerInput!) {
  moveServer(input: $input)
}
    `;const pa=e`
    mutation joinServer($input: JoinServerInput!) {
  joinServer(input: $input) {
    ...Server
  }
}
    ${Cr}`;const ga=e`
    mutation leaveServer($input: LeaveServerInput!) {
  leaveServer(input: $input) {
    ...Server
  }
}
    ${Cr}`;function va(e){const n={...On,...e};return t(ga,n)}e`
    mutation readServer($input: ReadServerInput!) {
  readServer(input: $input) {
    ...Server
  }
}
    ${Cr}`;const ha=e`
    mutation banUserFromServer($input: BanUserFromServerInput!) {
  banUserFromServer(input: $input)
}
    `;e`
    mutation unbanUserFromServer($input: UnbanUserFromServerInput!) {
  unbanUserFromServer(input: $input)
}
    `;const fa=e`
    mutation kickUserFromServer($input: KickUserFromServerInput!) {
  kickUserFromServer(input: $input)
}
    `;const ba=e`
    mutation featureServer($input: FeatureServerInput!) {
  featureServer(input: $input) {
    ...Server
  }
}
    ${Cr}`;const Ea=e`
    mutation unfeatureServer($input: UnfeatureServerInput!) {
  unfeatureServer(input: $input) {
    ...Server
  }
}
    ${Cr}`;const xa=e`
    mutation createAccount($input: CreateAccountInput!) {
  createAccount(input: $input) {
    accessToken
    user {
      ...CurrentUser
    }
  }
}
    ${fr}`;const ya=e`
    mutation changePassword($input: ChangePasswordInput!) {
  changePassword(input: $input) {
    ...CurrentUser
  }
}
    ${fr}`;const wa=e`
    mutation changeUserAvatar($input: ChangeUserAvatarInput!) {
  changeUserAvatar(input: $input) {
    ...CurrentUser
  }
}
    ${fr}`;const Na=e`
    mutation deleteAccount($input: DeleteAccountInput!) {
  deleteAccount(input: $input)
}
    `;const ka=e`
    mutation login($input: LoginInput!) {
  login(input: $input) {
    accessToken
    user {
      ...CurrentUser
    }
  }
}
    ${fr}`;const Ca=e`
    mutation changeOnlineStatus($input: ChangeOnlineStatusInput!) {
  changeOnlineStatus(input: $input) {
    ...CurrentUser
  }
}
    ${fr}`;e`
    mutation globalBan($input: GlobalBanInput!) {
  globalBan(input: $input)
}
    `;const $a=e`
    query comments($postId: ID!, $sort: CommentsSort) {
  comments(postId: $postId, sort: $sort) {
    ...Comment
    author {
      ...User
    }
    serverUser {
      ...ServerUser
    }
  }
}
    ${gr}
${vr}
${Nr}`;const Ua=e`
    query currentUser @live {
  user {
    ...CurrentUser
  }
}
    ${fr}`;e`
    query folder($id: ID!) @live {
  folder(id: $id) {
    ...Folder
    postCount
    owner {
      ...User
    }
    server {
      id
      displayName
      name
      avatarUrl
      permissions
    }
  }
}
    ${br}
${vr}`;const Ia=e`
    query getLinkMeta($linkUrl: String!) {
  getLinkMeta(linkUrl: $linkUrl) {
    ...Metadata
  }
}
    ${pr}`;const Sa=e`
    query messages($channelId: ID, $userId: ID, $groupId: ID, $limit: PositiveInt, $cursor: ID) {
  messages(
    channelId: $channelId
    userId: $userId
    groupId: $groupId
    limit: $limit
    cursor: $cursor
  ) {
    hasMore
    messages {
      ...Message
      author {
        ...User
      }
      serverUser {
        ...ServerUser
      }
    }
  }
}
    ${Er}
${vr}
${Nr}`;const Pa=e`
    query post($id: ID!) {
  post(id: $id) {
    ...Post
    author {
      ...User
    }
    serverUser {
      ...ServerUser
    }
    server {
      id
      name
      avatarUrl
      isDownvotesEnabled
      displayName
      permissions
    }
  }
}
    ${xr}
${vr}
${Nr}`;const Fa=e`
    query posts($sort: PostsSort, $offset: NonNegativeInt, $limit: PositiveInt, $time: PostsTime, $folderId: ID, $serverId: ID, $search: String) {
  posts(
    sort: $sort
    time: $time
    folderId: $folderId
    serverId: $serverId
    search: $search
    offset: $offset
    limit: $limit
  ) {
    hasMore
    posts {
      ...Post
      author {
        ...User
      }
      serverUser {
        ...ServerUser
      }
      server {
        id
        name
        avatarUrl
        isDownvotesEnabled
        displayName
        permissions
      }
    }
  }
}
    ${xr}
${vr}
${Nr}`;const Ma=e`
    query publicServers($sort: PublicServersSort, $category: ServerCategory, $featured: Boolean) {
  publicServers(sort: $sort, category: $category, featured: $featured) {
    id
    name
    displayName
    avatarUrl
    bannerUrl
    description
    userCount
    category
    isFeatured
  }
}
    `;function Ra(e){const t={...On,...e};return n(Ma,t)}const Aa=e`
    query replies {
  replies {
    ...Reply
  }
}
    ${kr}`;function Da(e){const t={...On,...e};return n(Aa,t)}const Ta=e`
    query server($id: ID, $name: String) @live {
  server(id: $id, name: $name) {
    ...Server
    permissions
    channels {
      ...Channel
    }
    roles {
      ...Role
    }
  }
}
    ${Cr}
${dr}
${wr}`;const La=e`
    query serverUsers($serverId: ID!) @live {
  serverUsers(serverId: $serverId) {
    ...ServerUser
  }
}
    ${Nr}`;const Oa=e`
    query user($id: ID, $username: String) @live {
  user(id: $id, username: $username) {
    ...User
    relatedUsers {
      ...User
    }
    servers {
      id
      avatarUrl
      name
    }
  }
}
    ${vr}`;function za(e){const t={...On,...e};return n(Oa,t)}e`
    subscription CommentChanged {
  commentChanged {
    added {
      ...Comment
      post {
        id
      }
    }
    updated {
      ...Comment
    }
    deleted {
      ...Comment
      post {
        id
      }
    }
  }
}
    ${gr}`;const _a=e`
    subscription MessageChanged {
  messageChanged {
    added {
      ...Message
      author {
        ...User
      }
      serverUser {
        ...ServerUser
      }
      channel {
        name
        id
        server {
          id
          name
        }
      }
      group {
        displayName
        id
      }
      toUser {
        username
        id
      }
    }
    updated {
      ...Message
      author {
        ...User
      }
      serverUser {
        ...ServerUser
      }
    }
    deleted {
      id
      channel {
        id
      }
      group {
        id
      }
      toUser {
        id
      }
    }
  }
}
    ${Er}
${vr}
${Nr}`;e`
    subscription PostChanged {
  postChanged {
    added {
      ...Post
    }
    updated {
      ...Post
    }
    deleted {
      ...Post
    }
  }
}
    ${xr}`,e`
    subscription ReplyChanged {
  replyChanged {
    added {
      ...Reply
    }
    updated {
      ...Reply
    }
    deleted {
      ...Reply
    }
  }
}
    ${kr}`;const qa=e`
    subscription typingUpdated($userId: ID, $groupId: ID, $channelId: ID) {
  typingUpdated(userId: $userId, groupId: $groupId, channelId: $channelId) {
    typingUserId
    isTyping
  }
}
    `;const Ha={en:{translation:{home:"Home",copyId:"Copy ID",markRead:"Mark As Read",continue:"Continue",more:"More",updateAvailable:"Update Available!",auth:{login:"Login",createAccount:"Create an Account",welcomeBack:"Welcome Back!",name:"Name",password:"Password",email:"Email",alreadyHaveAccount:"Already have an account?",register:"Register",needAccount:"Need an account?"},category:{Featured:"Featured",Arts:"Arts",Business:"Business",Culture:"Culture",Discussion:"Discussion",Entertainment:"Entertainment",Gaming:"Gaming",Health:"Health",Hobbies:"Hobbies",Lifestyle:"Lifestyle",Memes:"Memes",Meta:"Meta",News:"News",Politics:"Politics",Programming:"Programming",Science:"Science",Sports:"Sports",Technology:"Technology",Other:"Other"},channel:{title:"Channels",togglePrivate:"Private Channel",hideUsers:"Hide Users",showUsers:"Show Users",create:"Create Channel",edit:"Edit Channel",context:{markRead:"Mark As Read",delete:"Delete Channel",edit:"Edit Channel",mute:"Mute Channel"}},comment:{noPermission:"You do not have permission to view comments.",reply:"Reply",cancelReply:"Cancel Reply",hideReplies:"Hide Replies",showReplies:"Show Replies",create:{submit:"Comment",cancel:"Cancel"},context:{copyLink:"Copy Comment Link",delete:"Delete Comment",reply:"Reply",vote:"Add Rocket",unvote:"Remove Rocket",votePermission:"This planet does not allow you to rocket comments.",pin:"Pin Comment",unpin:"Unpin Comment",edit:"Edit Comment"}},dm:{title:"Direct Messages",create:"Create DM",markRead:"Mark Read",shared:"Shared with {{user.username}}!"},error:Tn,explore:{title:"Explore",categories:"Categories",all:"All"},folder:Ln,inbox:{title:"Inbox",tab:{all:"All",unread:"Unread"}},infinity:{comingSoon:"Comet Infinity is coming soon!",title:"Infinity"},message:{message:"Message",pinned:"Pinned Messages",upload:"Upload a File",typing:{one:"{{name}} is typing...",two:"{{name1}} and {{name2}} are typing...",three:"{{name1}}, {{name2}}, and {{name3}} are typing...",several:"Several people are typing..."},context:{copyLink:"Copy Message Link",pin:"Pin Message",unpin:"Unpin Message",edit:"Edit Message",delete:"Delete Message"}},permissions:{server:{[or.ManageChannels]:{title:"Manage Channels",description:"Allows members to create, edit, or delete channels."},[or.ManageServer]:{title:"Manage Roles",description:"Allows members to create new roles and edit or delete roles lower than their highest role. Also allows members to change permissions of individual channels that they have access to."},[or.ManageServer]:{title:"Manage Planet",description:"Allows members to change this planet's name, description, icon, and banner image."},[or.SendMessages]:{title:"Send Messages",description:"Allows members to send messages in text channels."},[or.RestrictedChannels]:{title:"Send Messages in Restricted Channels",description:"Allows members to send messages in restricted text channels."},[or.PrivateChannels]:{title:"Use Private Channels",description:"Allows members to view and send messages in private text channels."},[or.ManageMessages]:{title:"Manage Messages",description:"Allows members to remove messages by other members or pin any message."},[or.ManagePosts]:{title:"Manage Posts",description:"Allows members to pin and remove posts."},[or.ManageComments]:{title:"Manage Comments",description:"Allows members to pin and remove comments."},[or.ManageFolders]:{title:"Manage Folders",description:"Allows members to create, delete, and edit folders."},[or.AddPostToFolder]:{title:"Add Posts to Folders",description:"Allows members to add and remove posts from folders."},[or.DisplayRoleSeparately]:{title:"Display Role Separately",description:"Members with this role will appear separately in the users list"},[or.Admin]:{title:"Administrator",description:"Members with this role have every permission"},[or.ManageUsers]:{title:"Manage Users",description:"Ban and kick users"}}},post:{createPost:"Create a post",create:{submit:"Post",cancel:"Cancel"},type:{text:"Text Post",link:"Link Post",image:"Image Post",album:"Image Album"},createComment:"Write a comment",commentCount:"{{count}} Comment",commentCount_plural:"{{count}} Comments",participantCount:"{{count}} Participant",participantCount_plural:"{{count}} Participants",creator:"Creator",context:{pin:"Pin Post",pinned:"Post pinned!",unpin:"Unpin Post",unpinned:"Post unpinned!",removeFromFolder:"Remove from Folder",addToUserFolder:"Add to Folder",addToServerFolder:"Add to Planet Folder",edit:"Edit Post",delete:"Delete Post",deleted:"Post deleted!",copyLink:"Copy Post Link",sendToFriend:"Send to Friend",vote:"Add Rocket",unvote:"Remove Rocket",votePermission:"This planet does not allow you to rocket posts."},hideParticipants:"Hide Participants",showParticipants:"Show Participants",pinnedTo:"Pinned to {{server.name}}",expand:"Show Details",collapse:"Hide Details",feed:{title:"Your Feed",refresh:"Refresh Posts",sort:{hot:"Hot",top:"Top",new:"New"},time:{hour:"Hour",day:"Day",week:"Week",month:"Month",year:"Year",all:"All"},liveMode:{title:"Live Mode",description:"Automatically add new posts to feed",comingSoon:"Live Mode is coming soon!"},subscriptions:{show:"Show Subscriptions",hide:"Hide Subscriptions",comingSoon:"Planet subscriptions are coming soon!"}}},search:{comingSoon:"Search is coming soon!"},server:{loading:"Loading planet...",feed:"Feed",invitePeople:"Invite People",onlineCount:"{{count}} online",memberCount:"{{count}} Member",memberCount_plural:"{{count}} Members",context:{markRead:"Mark As Read",mute:"Mute Planet",invite:"Invite People",leave:"Leave Planet"},create:{title:"Create Planet",name:"Planet Name",upload:"Upload",requireInvite:"Require Invite to Join"}},settings:{title:"Settings"},user:{hideUsers:"Hide Users",showUsers:"Show Users",context:{viewProfile:"Profile",closeDm:"Close DM",block:"Block",unblock:"Unblock",addFriend:"Add Friend",removeFriend:"Remove Friend",sendMessage:"Send Message",message:"Message",kickUser:"Kick {{user.username}}",banUser:"Ban {{user.username}}",banPrompt:"Reason (Optional)",ignore:"Ignore",accept:"Accept",revoke:"Revoke Friend Request",sendFriendRequest:"Send Friend Request",blockingYou:"Blocking You",markRead:"Mark as Read"},profile:{sentFriendRequest:"Request Sent",receivedFriendRequest:"Accept Request",mutualServers:"Mutual Planets",mutualFriends:"Mutual Friends",sendMessage:"Send Message"},offline:"Offline",online:"Online",friends:{title:"Friends",sendMessage:"Message",revokeRequest:"Cancel",acceptRequest:"Accept",rejectRequest:"Ignore",tab:{online:"Online",all:"All",pending:"Pending",blocked:"Blocked",add:"Add Friend"}}}}}};a.use(l).use(s).init({resources:Ha,fallbackLng:"en",debug:!1,load:"languageOnly",interpolation:{escapeValue:!1}});const Ba={status:"connecting"};const ja=g.exports.createContext({user:null,loading:!0});function Ga({children:e}){const{data:t,loading:r}=function(e){const t={...On,...e};return n(Ua,t)}({fetchPolicy:"cache-and-network",nextFetchPolicy:"cache-first"}),a=null==t?void 0:t.user;return g.exports.useEffect((()=>{a?v({id:a.id,email:a.email,username:a.username}):h((e=>e.setUser(null)))}),[a]),f.createElement(ja.Provider,{value:{user:a,loading:(r||"connected"!==Ba.status)&&!a}},e)}const Va=()=>{const{user:e,loading:t}=g.exports.useContext(ja);return[e,t]};var Ya=g.exports.memo((function({children:e="No more posts loaded!",className:t="h-48"}){return f.createElement("div",{className:"flex flex-col items-center justify-center text-primary pt-6"},f.createElement("img",{alt:"astronaut",src:"/astronaut.png",className:`object-contain opacity-50 animate-float select-none pointer-events-none ${t}`}),f.createElement("div",{className:"text-tertiary pt-3 text-lg font-semibold"},e))}));function Wa(){return Va(),f.createElement("div",{className:"relative h-full w-full dark:bg-gray-750 flex flex-col items-center justify-center p-6 text-center"},f.createElement("div",{className:"text-center space-y-3"},f.createElement(Ya,null,"This page does not exist.",f.createElement(b,{to:"/",className:"block text-lg pt-3 text-accent font-medium cursor-pointer hover:underline"},"Return home"))))}function Za({children:e,right:t=!1,show:n=!0}){return f.createElement("div",{className:`${n?"block":"hidden"} w-60 min-w-[15rem] bg-gray-200 dark:bg-gray-800 ${t?"":"rounded-tl-lg"}`},f.createElement("div",{className:"relative h-full w-full scrollbar-dark overflow-y-auto"},e))}const Qa=E(((e,t)=>({friendsPage:"Online",setFriendsPage:t=>e({friendsPage:t}),inboxPage:"Unread",setInboxPage:t=>e({inboxPage:t}),postsSort:"Hot",setPostsSort:t=>e({postsSort:t}),postsTime:"Day",setPostsTime:t=>e({postsTime:t}),commentsSort:"Top",setCommentsSort:t=>e({commentsSort:t}),liveMode:!1,setLiveMode:t=>e({liveMode:t}),showFolders:!0,setShowFolders:t=>e({showFolders:t}),showUsers:!0,setShowUsers:t=>e({showUsers:t}),serverPages:{},setServerPage:(n,r)=>e({serverPages:{...t().serverPages,[n]:r}}),homePage:null,setHomePage:t=>e({homePage:t}),replyingCommentId:null,setReplyingCommentId:t=>e({replyingCommentId:t}),canGoBack:!1,setCanGoBack:t=>e({canGoBack:t}),exploreSort:"Top",setExploreSort:t=>e({exploreSort:t}),exploreCategory:null,setExploreCategory:t=>e({exploreCategory:t}),dialogUserId:null,setDialogUserId:t=>e({dialogUserId:t,userDialogOpen:!!t}),userDialogOpen:!1,setUserDialogOpen:t=>e({userDialogOpen:t}),folderSort:"Added",setFolderSort:t=>e({folderSort:t}),updateAvailable:!1,setUpdateAvailable:t=>e({updateAvailable:t}),loginDialog:!1,setLoginDialog:t=>e({loginDialog:t}),createAccount:!1,setCreateAccount:t=>e({createAccount:t})}))),Ja="Post",Ka=(e,t,n)=>y(`\n  ${e&&"h-11"}\n  ${t&&"h-9"}\n  ${!e&&!t&&"h-9"}\n  group\n  rounded\n  cursor-pointer\n  flex\n  items-center\n  text-base\n  font-medium\n  px-4\n  w-full\n  ${n?"dark:hover:bg-gray-725 dark:active:bg-gray-725":"dark:hover:bg-gray-775 dark:active:bg-gray-775"}\n  text-gray-600\n  dark:text-gray-400\n  select-none\n  focus:outline-none\n  relative\n  hover:text-gray-700\n  dark:hover:text-gray-300\n`),Xa=e=>y(`\n  text-gray-800\n  hover:text-gray-800\n  dark:text-gray-200\n  dark:hover:text-gray-200\n  ${e?"dark:bg-gray-700 dark:hover:bg-gray-700":"dark:bg-gray-750 dark:hover:bg-gray-750"}\n`);var el=g.exports.forwardRef((({children:e,large:t=!1,small:n=!1,to:r,onClick:a,active:l,exact:s=!1,light:o=!1},i)=>r?f.createElement(x,{ref:i,to:r,className:`${Ka(t,n,o)} ${l?Xa(o):""}`,activeClassName:null!=l?"":Xa(o),exact:s},e):f.createElement("button",{ref:i,onClick:a,className:`${Ka(t,n,o)} ${l?Xa(o):""}`,type:"button"},e)));function tl({className:e}){return f.createElement("svg",{className:e,xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor"},f.createElement("path",{fillRule:"evenodd",d:"M7 2a1 1 0 00-.707 1.707L7 4.414v3.758a1 1 0 01-.293.707l-4 4C.817 14.769 2.156 18 4.828 18h10.343c2.673 0 4.012-3.231 2.122-5.121l-4-4A1 1 0 0113 8.172V4.414l.707-.707A1 1 0 0013 2H7zm2 6.172V4h2v4.172a3 3 0 00.879 2.12l1.027 1.028a4 4 0 00-2.171.102l-.47.156a4 4 0 01-2.53 0l-.563-.187a1.993 1.993 0 00-.114-.035l1.063-1.063A3 3 0 009 8.172z",clipRule:"evenodd"}))}function nl({className:e}){return f.createElement("svg",{className:e,xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor"},f.createElement("path",{d:"M13 7H7v6h6V7z"}),f.createElement("path",{fillRule:"evenodd",d:"M7 2a1 1 0 012 0v1h2V2a1 1 0 112 0v1h2a2 2 0 012 2v2h1a1 1 0 110 2h-1v2h1a1 1 0 110 2h-1v2a2 2 0 01-2 2h-2v1a1 1 0 11-2 0v-1H9v1a1 1 0 11-2 0v-1H5a2 2 0 01-2-2v-2H2a1 1 0 110-2h1V9H2a1 1 0 010-2h1V5a2 2 0 012-2h2V2zM5 5h10v10H5V5z",clipRule:"evenodd"}))}function rl({className:e}){return f.createElement("svg",{className:e,viewBox:"0 0 24 24"},f.createElement("path",{fill:"currentColor",d:"M17 14H19V17H22V19H19V22H17V19H14V17H17V14M20 12C20 8.64 17.93 5.77 15 4.59V5C15 6.1 14.1 7 13 7H11V9C11 9.55 10.55 10 10 10H8V12H14C14.5 12 14.9 12.35 15 12.81C13.2 13.85 12 15.79 12 18C12 19.5 12.54 20.85 13.44 21.9L12 22C6.5 22 2 17.5 2 12C2 6.5 6.5 2 12 2C17.5 2 22 6.5 22 12L21.9 13.44C21.34 12.96 20.7 12.59 20 12.34L20 12M11 19.93V18C9.9 18 9 17.1 9 16V15L4.21 10.21C4.08 10.78 4 11.38 4 12C4 16.08 7.06 19.44 11 19.93Z"}))}function al({className:e="h-5 w-5 text-primary"}){return f.createElement("svg",{className:`animate-spin ${e}`,xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24"},f.createElement("circle",{className:"opacity-25",cx:"12",cy:"12",r:"10",stroke:"currentColor",strokeWidth:"4"}),f.createElement("path",{className:"opacity-75",fill:"currentColor",d:"M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"}))}function ll({className:e}){return f.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",className:e,viewBox:"0 0 20 20",fill:"currentColor"},f.createElement("path",{d:"M2 5a2 2 0 012-2h7a2 2 0 012 2v4a2 2 0 01-2 2H9l-3 3v-3H4a2 2 0 01-2-2V5z"}),f.createElement("path",{d:"M15 7v2a4 4 0 01-4 4H9.828l-1.766 1.767c.28.149.599.233.938.233h2l3 3v-3h2a2 2 0 002-2V9a2 2 0 00-2-2h-1z"}))}const sl=({server:e,permissions:t})=>g.exports.useMemo((()=>e?t.map((t=>{var n;return[...null!=(n=null==e?void 0:e.permissions)?n:[]].includes(t)})):t.map((e=>!1))),[t,e]),ol=0,il=2,cl={disable:!1,holdToDisplay:1e3,posX:0,posY:0,mouseButton:il,disableIfShiftIsPressed:!1,collect(){}};function ml(e,t){return t=>{const n=Object.assign({},cl,t);g.exports.useRef(!1),g.exports.useRef(),g.exports.useRef();const r=t=>{t.ctrlKey||(t.preventDefault(),t.stopPropagation(),e(((e,t)=>["X","Y"].map((n=>(e[`client${n}`]||e.touches&&e.touches[0][`page${n}`])-t[`pos${n}`])))(t,n),{...n.collect(),href:t.target.href}))};return[{onContextMenu:e=>{e.button===n.mouseButton&&r(e)},onClick:e=>{e.button===n.mouseButton&&r(e)}}]}}const dl=27,ul=13,pl=38,gl=40,vl={position:"fixed",opacity:0,pointerEvents:"none"},hl=e=>e.focus(),fl=({handleElementSelect:e=hl}={})=>{const t=g.exports.useRef(),n=g.exports.useRef([]),[r,a]=g.exports.useState(vl),[l,s]=g.exports.useState(-1),[o,i]=g.exports.useState(!1),[c,m]=g.exports.useState([0,0]),[d,u]=g.exports.useState(),p=g.exports.useCallback((()=>i(!1)),[i]);g.exports.useCallback((()=>{o&&i(!1)}),[o,i]);const v=g.exports.useCallback(((e,t)=>{i(!0),m(e),u(t)}),[i,u]);g.exports.useEffect((()=>{const r=e=>{t.current.contains(e.target)||(s(-1),p())},a=t=>{switch(t.keyCode){case dl:t.preventDefault(),p();break;case pl:t.preventDefault(),l>0&&(s((e=>e-1)),e(n.current[l-1]));break;case gl:t.preventDefault(),l+1<n.current.length&&(s((e=>e+1)),e(n.current[l+1]));break;case ul:-1!==l&&n.current[l].click(),p()}};return o&&(document.addEventListener("mousedown",r),document.addEventListener("touchstart",r),document.addEventListener("scroll",p),document.addEventListener("contextmenu",p),document.addEventListener("keydown",a)),()=>{document.removeEventListener("mousedown",r),document.removeEventListener("touchstart",r),document.removeEventListener("scroll",p),document.removeEventListener("contextmenu",p),document.removeEventListener("keydown",a)}}),[t,p,l,s,n,e,o]);const[h,f]=g.exports.useState(!1);g.exports.useLayoutEffect((()=>{if(o){const e=t.current.getBoundingClientRect(),{top:n,left:r,isRight:l}=((e,[t,n])=>{const r={top:n,left:t,isRight:!1},{innerWidth:a,innerHeight:l}=window;return n+e.height>l&&(r.top-=e.height),t+e.width>a&&(r.left-=e.width),t+2*e.width>a&&(r.isRight=!0),r.top<0&&(r.top=e.height<l?(l-e.height)/2:0),r.left<0&&(r.left=e.width<a?(a-e.width)/2:0),r})(e,c);f(l),a((e=>({...e,top:`${n}px`,left:`${r}px`,opacity:1,pointerEvents:"auto"})))}else a(vl)}),[t,o,c]);return[{style:r,ref:t,role:"menu",tabIndex:-1},{ref:e=>n.current=null===e?[]:[...n.current,e],role:"menuitem",tabIndex:-1},ml(v),{data:d,isVisible:o,setVisible:i,coords:c,setCoords:m,isRight:h}]},bl=e=>y(`\n  active:text-white\n  dark:active:text-white\n  dark:hover:text-white\n  dark:focus:text-white\n  hover:text-white\n  select-none\n  cursor-pointer\n  w-full\n  px-2\n  py-1.5\n  leading-5\n  flex\n  items-center\n  text-13\n  rounded-sm\n  font-medium\n  focus:outline-none\n  group\n  relative\n  ${e?"text-red-500 active:bg-red-600 hover:bg-red-500 focus:bg-red-500":"text-gray-600 dark:text-gray-400 active:bg-green-700 focus:bg-green-600 hover:bg-green-600"} \n`);function El({item:{bindMenuItem:e,hideMenu:t,isRight:n},onClick:r,red:a,checked:l=null,label:s,children:o}){return f.createElement("div",{...e,className:bl(a),onClick:e=>{t(),r&&r(e)}},s,null!==l&&f.createElement("input",{type:"checkbox",className:"ml-auto h-4 w-4 border-none rounded dark:checked:bg-green-600 dark:bg-gray-750 focus:outline-none cursor-pointer",checked:l,readOnly:!0}),o&&f.createElement(f.Fragment,null,f.createElement("div",{className:"ml-auto"},f.createElement(w,{className:"w-5 h-5 -mr-0.5"})),f.createElement("div",{className:"absolute -top-2 hidden group-hover:block "+(n?"right-full -mr-2":"left-full -ml-2")},f.createElement("div",{className:""+(n?"pr-2":"pl-2")},f.createElement("div",{className:(n?"mr-3":"ml-3")+" p-2 dark:bg-gray-900 rounded w-48 shadow-lg"},o)))))}const xl="User",yl="Post",wl="Comment",Nl="Message",kl="Server",Cl="Folder",$l="Channel",Ul=y("\n  select-none\n  w-full\n  px-2\n  h-8\n  flex\n  items-center\n  text-13\n  text-mid\n  cursor-default\n  rounded-sm\n  font-medium\n  focus:outline-none\n");function Il({children:e}){return Sl(e)?f.createElement("div",{className:"space-y-0.5"},f.createElement("div",{className:Ul},"No actions available")):f.createElement("div",{className:"space-y-0.5"},e)}const Sl=e=>!N.renderToStaticMarkup(e);function Pl({post:e,ContextMenuItem:n}){var r;const{t:a}=k(),[l]=sl({server:null==e?void 0:e.server,permissions:[or.ManagePosts]}),s=C()[1],[o]=function(e){const n={...On,...e};return t(Zr,n)}(),[i]=Va(),c=!!i&&(null==(r=null==e?void 0:e.author)?void 0:r.id)===i.id,m=c||l;return e?f.createElement(f.Fragment,null,f.createElement(Il,null,c&&f.createElement(n,{label:a("post.context.edit")}),f.createElement(n,{onClick:()=>{s(`${location.origin}${e.relativeUrl}`)},label:a("post.context.copyLink")}),m&&f.createElement(n,{red:!0,onClick:()=>{o({variables:{input:{postId:e.id}}}),$.success(a("post.context.deleted"))},label:a("post.context.delete")}))):null}function Fl({user:e,server:n,role:r,isDm:a,ContextMenuItem:l}){const{t:s}=k(),[o]=Va(),[i]=sl({server:n,permissions:[or.ManageUsers]}),[c]=ra(),[m]=ea(),[d]=function(e){const n={...On,...e};return t(ha,n)}(),[u]=function(e){const n={...On,...e};return t(fa,n)}();!function(e){const n={...On,...e};t(Jr,n)}(),function(e){const n={...On,...e};t(Kr,n)}();const[p]=function(e){const n={...On,...e};return t(ca,n)}(),g=Qa((e=>e.setDialogUserId)),{push:v}=U();return e?f.createElement(f.Fragment,null,f.createElement(Il,null,f.createElement(l,{label:s("user.context.viewProfile"),onClick:()=>{g(e.id)}}),a&&f.createElement(f.Fragment,null,!!e.unreadCount&&f.createElement(l,{label:s("user.context.markRead"),onClick:()=>{m({variables:{input:{userId:e.id}}})}}),f.createElement(l,{label:s("user.context.closeDm"),onClick:()=>{c({variables:{input:{userId:e.id}}})}})),o&&e.id!==o.id?f.createElement(f.Fragment,null,!a&&f.createElement(l,{onClick:()=>v(`/dm/@${e.username}`),label:s("user.context.sendMessage")})):f.createElement(f.Fragment,null),!!n&&i&&f.createElement(f.Fragment,null,f.createElement(l,{label:"Set Role"},n.roles.map((t=>f.createElement(l,{key:t.id,checked:r&&r.id===t.id,label:f.createElement("div",{className:"flex items-center "},f.createElement("div",{className:"w-3 h-3 rounded-full mr-2.5 "+(t.color?"":"dark:bg-gray-700"),style:{backgroundColor:t.color}}),t.name),onClick:()=>{p({variables:{input:{userId:e.id,roleId:t.id}}})}})))),f.createElement(l,{label:s("user.context.kickUser",{user:e}),red:!0,onClick:()=>{u({variables:{input:{serverId:n.id,userId:e.id}}}),$.success(s("user.context.kickedUser",{user:e}))}}),f.createElement(l,{label:s("user.context.banUser",{user:e}),red:!0,onClick:()=>{const t=window.prompt(s("user.context.banPrompt"));null!==t&&(d({variables:{input:{serverId:n.id,userId:e.id,reason:t}}}),$.success(s("user.context.bannedUser",{user:e})))}})))):null}function Ml({message:e,server:n,ContextMenuItem:r}){var a,l;const{pathname:s}=I(),o=S(s,{path:"/group/:groupId"}),i=S(s,{path:"/dm/:username"});null==(a=null==o?void 0:o.params)||a.groupId,null==(l=null==i?void 0:i.params)||l.username;const[c]=sl({server:n,permissions:[or.ManageMessages]});C()[1];const[m]=function(e){const n={...On,...e};return t(Hr,n)}();jr(),Vr(),(e=>{const[t]=jr(),[n]=Vr();g.exports.useCallback((()=>{const r={messageId:e.id};e.isPinned?n({variables:{input:r}}):t({variables:{input:r}})}),[e,t,n])})(e);const{t:d}=k(),[u]=Va(),p=!!u&&e.author.id===u.id,v=(c||p)&&e.type===Yn.Normal;return p&&(e.type,Yn.Normal),f.createElement(f.Fragment,null,f.createElement(Il,null,v&&f.createElement(r,{label:d("message.context.delete"),red:!0,onClick:()=>{m({variables:{input:{messageId:e.id}}}),$.error(d("Message deleted!"))}})))}const Rl=e=>{const[n]=function(e){const n={...On,...e};return t(Rr,n)}(),[r]=function(e){const n={...On,...e};return t(Ar,n)}();return g.exports.useCallback((()=>{const t={commentId:e.id};e.isPinned?r({variables:{input:t}}):n({variables:{input:t}})}),[e,n,r])};function Al({comment:e,post:n,ContextMenuItem:r}){const{t:a}=k(),[l]=Va(),s=Qa((e=>e.setReplyingCommentId)),[o]=sl({server:n.server,permissions:[or.ManageComments]});C()[1],function(e){const n={...On,...e};t(Fr,n)}(),Rl(e);const i=!!l&&e.author.id===l.id,c=o||i;return f.createElement(f.Fragment,null,f.createElement(Il,null,i&&f.createElement(r,{label:a("comment.context.edit")}),!!l&&f.createElement(r,{onClick:()=>s(null==e?void 0:e.id),label:a("comment.context.reply")}),c&&f.createElement(r,{label:a("comment.context.delete"),red:!0,onClick:()=>$.error(a("comment.context.deleted"))})))}function Dl({server:e,enableFeatured:n,openDelete:r,ContextMenuItem:a}){const{t:l}=k(),[s]=Va(),o=P(),[i]=va(),{push:c}=U(),{pathname:m}=I(),d=Qa((e=>e.exploreSort)),u=[{query:Ma,variables:{featured:!0,sort:d}}],[p]=function(e){const n={...On,...e};return t(ba,n)}({refetchQueries:u}),[g]=function(e){const n={...On,...e};return t(Ea,n)}({refetchQueries:u});return f.createElement(f.Fragment,null,f.createElement(Il,null,(null==s?void 0:s.isAdmin)&&f.createElement(f.Fragment,null,!!n&&f.createElement(a,{label:e.isFeatured?"Remove from Featured":"Make Featured",onClick:()=>{e.isFeatured?g({variables:{input:{serverId:e.id}}}):p({variables:{input:{serverId:e.id}}})}})),!!s&&!!e.owner&&e.owner.id!==s.id&&f.createElement(a,{label:l("server.context.leave"),red:!0,onClick:()=>{m.startsWith(`/+${e.id}`)&&c("/"),i({variables:{input:{serverId:e.id}}});const t=o.cache.readQuery({query:Ua});o.cache.writeQuery({query:Ua,data:{user:{...t.user,servers:t.user.servers.filter((t=>t.id!==e.id))}}});const n=o.cache.readFragment({fragment:Cr,id:`Server:${e.id}`});o.cache.writeFragment({fragment:Cr,id:`Server:${e.id}`,data:{...n,isJoined:!1}})}}),!!s&&!!e.owner&&!!r&&(s.isAdmin||e.owner.id===s.id)&&f.createElement(a,{label:"Delete Planet",red:!0,onClick:()=>r()})))}function Tl({channel:e,server:t,openDelete:n,openEdit:r,ContextMenuItem:a}){const{t:l}=k(),[s]=sl({server:t,permissions:[or.ManageChannels]});return f.createElement(f.Fragment,null,f.createElement(Il,null,s&&f.createElement(f.Fragment,null,f.createElement(a,{label:l("channel.context.edit"),onClick:()=>{r()}}),f.createElement(a,{label:l("channel.context.delete"),red:!0,onClick:()=>{n()}}))))}function Ll({folder:e,ContextMenuItem:n}){var r,a,l,s;const{t:o}=k(),[i]=Va(),c=null!=(r=null==i?void 0:i.folders)?r:[],m=!!i&&c.filter((e=>{var t;return(null==(t=e.owner)?void 0:t.id)!==i.id})).map((e=>e.id)).includes(e.id),d="Read Later"!==e.name&&"Favorites"!==e.name,[u]=function(e){const n={...On,...e};return t(Dr,n)}(),[p]=function(e){const n={...On,...e};return t(Lr,n)}(),[g]=function(e){const n={...On,...e};return t(Or,n)}(),[v]=function(e){const n={...On,...e};return t(Tr,n)}(),{push:h}=U(),{pathname:b}=I(),E=S(b,{path:"/:server"}),x=null==(l=null==(a=null==E?void 0:E.params)?void 0:a.server)?void 0:l.substring(1);return f.createElement(f.Fragment,null,f.createElement(Il,null,f.createElement(n,{label:o("folder.context.copyLink")}),!!i&&(null==(s=e.owner)?void 0:s.id)!==i.id&&f.createElement(f.Fragment,null,m?f.createElement(n,{label:o("folder.context.unfollow"),onClick:()=>g({variables:{input:{folderId:e.id}}})}):f.createElement(n,{label:o("folder.context.follow"),onClick:()=>p({variables:{input:{folderId:e.id}}})})),d&&f.createElement(f.Fragment,null,f.createElement(n,{label:o("folder.context.edit")}),!x&&f.createElement(n,{label:o("folder.context.collaborative"),checked:e.isCollaborative,onClick:()=>u({variables:{input:{folderId:e.id,isCollaborative:!e.isCollaborative}}})}),f.createElement(n,{label:o("folder.context.changeVisibility")},f.createElement(n,{label:o("folder.context.visibility.public"),checked:e.visibility===Gn.Public,onClick:()=>u({variables:{input:{folderId:e.id,visibility:Gn.Public}}})}),f.createElement(n,{label:o("folder.context.visibility.friends"),checked:e.visibility===Gn.Friends,onClick:()=>u({variables:{input:{folderId:e.id,visibility:Gn.Friends}}})}),f.createElement(n,{label:o("folder.context.visibility.unlisted"),checked:e.visibility===Gn.Unlisted,onClick:()=>u({variables:{input:{folderId:e.id,visibility:Gn.Unlisted}}})}),f.createElement(n,{label:o("folder.context.visibility.private"),checked:e.visibility===Gn.Private,onClick:()=>u({variables:{input:{folderId:e.id,visibility:Gn.Private}}})})),f.createElement(n,{label:o("folder.context.delete"),red:!0,onClick:()=>{v({variables:{input:{folderId:e.id}}}),b.startsWith("/folder")?h("/"):b.startsWith(`/${x}/folder`)&&h(`/${x}`)}}))))}function Ol(){let e=window.navigator.userAgent,t=window.navigator.platform,n=null;return-1!==["Macintosh","MacIntel","MacPPC","Mac68K"].indexOf(t)?n="Mac OS":-1!==["iPhone","iPad","iPod"].indexOf(t)?n="iOS":-1!==["Win32","Win64","Windows","WinCE"].indexOf(t)?n="Windows":/Android/.test(e)?n="Android":/Linux/.test(t)&&(n="Linux"),n}function zl(){return f.createElement("div",{className:"border-t dark:border-gray-800 mt-2 pb-2"})}const _l=y("\n  p-2\n  w-48\n  dark:bg-gray-900\n  rounded\n  shadow-lg\n  outline-none\n");function ql({bindMenu:{style:e,ref:t,role:n,tabIndex:r},data:a,bindMenuItem:l,hideMenu:s,isRight:o}){const i=(c={bindMenuItem:l,hideMenu:s,isRight:o},g.exports.useCallback((({onClick:e,red:t,label:n,checked:r,children:a})=>f.createElement(El,{item:c,onClick:e,red:t,label:n,checked:r},a)),[c]));var c;const m=C()[1],d=(null==a?void 0:a.href)?new URL(a.href):null,u=d&&d.origin===window.location.origin,p="Mac OS"===Ol(),v={...null!=a?a:{},ContextMenuItem:i};return f.createElement("div",{style:{...e,zIndex:999999},ref:t,role:n,tabIndex:r,className:_l,onMouseDown:e=>{e.stopPropagation(),e.preventDefault()}},!!window.getSelection().toString()&&f.createElement(f.Fragment,null,f.createElement(i,{label:f.createElement("div",{className:"flex items-center w-full"},"Copy",f.createElement("div",{className:"ml-auto"},p?"⌘+C":"Ctrl+C")),onClick:()=>document.execCommand("copy")}),f.createElement(zl,null)),(null==a?void 0:a.type)===yl&&f.createElement(Pl,{...v}),(null==a?void 0:a.type)===xl&&f.createElement(Fl,{...v}),(null==a?void 0:a.type)===Nl&&f.createElement(Ml,{...v}),(null==a?void 0:a.type)===wl&&f.createElement(Al,{...v}),(null==a?void 0:a.type)===kl&&f.createElement(Dl,{...v}),(null==a?void 0:a.type)===$l&&f.createElement(Tl,{...v}),(null==a?void 0:a.type)===Cl&&f.createElement(Ll,{...v}),!!(null==a?void 0:a.href)&&!u&&f.createElement(f.Fragment,null,f.createElement(zl,null),f.createElement(Il,null,f.createElement(i,{label:"Copy Link",onClick:()=>m(a.href)}),f.createElement(i,{label:"Open Link",onClick:()=>window.open(a.href,"_blank")}))))}const Hl=g.exports.createContext({useContextTrigger:e=>[{}]});function Bl({children:e}){const[t,n,r,{data:a,coords:l,setVisible:s,isRight:o}]=fl();return f.createElement(f.Fragment,null,f.createElement(Hl.Provider,{value:{useContextTrigger:r}},e,f.createElement(ql,{bindMenu:t,data:a,bindMenuItem:n,hideMenu:()=>s(!1),isRight:o})))}function jl({data:e,leftClick:t=!1,children:n,className:r}){const[a]=((e,t=!1)=>{const{useContextTrigger:n}=g.exports.useContext(Hl);return n({collect:()=>e,mouseButton:t?ol:il})})(e,t);return f.createElement("div",{className:r,...a},n)}const Gl=e=>y(`\n  px-3\n  pt-4\n  pb-1\n  text-gray-500\n  dark:text-gray-500\n  uppercase\n  text-11\n  font-semibold\n  tracking-wide\n  flex\n  items-center\n  justify-between\n  select-none\n  ${e&&"hover:text-gray-600 dark:hover:text-gray-400"}\n`);function Vl({children:e,plusLabel:t,onClick:n}){const r=t&&n;return f.createElement("div",{className:Gl(r)},e,r&&f.createElement(F,{content:t},f.createElement("div",{onClick:n},f.createElement(M,{className:"w-5 h-5 text-gray-600 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300 cursor-pointer"}))))}function Yl({isOpen:e,close:t,children:n,closeOnOverlayClick:r=!1}){return f.createElement(R,{show:e,as:g.exports.Fragment},f.createElement(A,{open:e,onClose:t,static:!0},f.createElement("div",{className:"fixed z-10 inset-0"},f.createElement("div",{className:"flex items-end justify-center min-h-screen text-center sm:block p-0"},f.createElement(R.Child,{enter:"ease-out duration-150",enterFrom:"opacity-0",enterTo:"opacity-100",leave:"ease-in duration-150",leaveFrom:"opacity-100",leaveTo:"opacity-0"},f.createElement(A.Overlay,{className:"fixed inset-0 transition-opacity"},f.createElement("div",{className:"absolute inset-0 bg-gray-500 dark:bg-black opacity-75"}))),f.createElement(R.Child,{enter:"ease-out transform duration-150",enterFrom:"opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95",enterTo:"opacity-100 translate-y-0 sm:scale-100",leave:"ease-in transform duration-150",leaveFrom:"opacity-100 translate-y-0 sm:scale-100",leaveTo:"opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"},f.createElement("span",{className:"hidden sm:inline-block sm:align-middle sm:h-screen","aria-hidden":"true"},"​"),f.createElement("div",{onClick:()=>{r&&t()},className:"overflow-y-auto scrollbar dark:scrollbar-thumb-gray-800 dark:scrollbar-track-transparent inline-block h-screen transform transition-all align-middle w-full"},f.createElement("div",{className:"flex min-h-full w-full items-center justify-center"},n)))))))}var Wl=A.Title;const Zl=()=>Qa((e=>[e.loginDialog,e.setLoginDialog,e.createAccount,e.setCreateAccount])),Ql=()=>{const e=Zl()[1];return()=>e(!0)};function Jl(){return f.createElement("div",{className:"group relative w-full"},f.createElement("input",{onFocus:e=>{e.target.blur(),$.error("Search is coming soon!")},className:"w-full block h-7 min-w-0 rounded-md dark:bg-gray-850 placeholder-tertiary text-sm focus:outline-none focus:ring-1 ring-blue-600 transition"}),f.createElement(D,{className:"w-4 h-4 text-mid absolute top-1/2 transform -translate-y-1/2 left-3"}))}function Kl({children:e,className:t,icon:n,title:r,showDivider:a=!1}){return f.createElement("header",{id:"header",className:"h-12 min-h-[3rem] items-center bg-white dark:bg-gray-750 border-b dark:border-gray-800 shadow flex"},f.createElement("div",{className:"flex items-center font-semibold text-base leading-5 text-primary pl-4 pr-4 "+(a?"border-r dark:border-gray-700 mr-4":"")},f.createElement("div",{className:"text-tertiary mr-3"},n),r),f.createElement("div",{className:"flex-grow flex items-center min-w-0 pr-4"},e))}function Xl({currentPage:e,setCurrentPage:t,page:n,green:r=!1,children:a}){return f.createElement("button",{onClick:()=>t(n),className:"text-base font-medium rounded px-1.5 py-0.5 cursor-pointer select-none flex flex-shrink-0 items-center focus:outline-none "+(n===e?r?"text-green-600 bg-green-900":"text-secondary dark:bg-gray-700":r?"text-secondary bg-green-600":"text-tertiary")},a||n)}function es(){const[e,t]=Qa((e=>[e.showUsers,e.setShowUsers])),{t:n}=k();return f.createElement(F,{content:n(e?"user.hideUsers":"user.showUsers")},f.createElement("div",{className:"highlightable",onClick:()=>t(!e)},f.createElement(T,{className:"w-5 h-5"})))}function ts(){const[e,t]=Qa((e=>[e.postsSort,e.showFolders,e.liveMode]));let n;switch(k(),e){case"Hot":n=f.createElement(z,{className:"w-5 h-5"});break;case"New":n=f.createElement(O,{className:"w-5 h-5"});break;case"Top":n=f.createElement(L,{className:"w-5 h-5"})}return f.createElement(Kl,{isRightSidebar:t,title:e,icon:n,showDivider:"Top"===e},"Top"===e&&f.createElement("div",{className:"flex items-center space-x-4"},f.createElement(ns,{time:"Hour"}),f.createElement(ns,{time:"Day"}),f.createElement(ns,{time:"Week"}),f.createElement(ns,{time:"Month"}),f.createElement(ns,{time:"Year"}),f.createElement(ns,{time:"All"})),f.createElement("div",{className:"ml-auto space-x-5 flex items-center"},f.createElement(es,null)))}function ns({time:e}){const{t:t}=k(),[n,r]=Qa((e=>[e.postsTime,e.setPostsTime]));return f.createElement(Xl,{page:e,setCurrentPage:r,currentPage:n},t(`post.feed.time.${e.toLowerCase()}`))}const rs=({serverId:e,folderId:t})=>{var r;const[a,l,s]=Qa((e=>[e.postsSort,e.postsTime,e.folderSort])),[o,i]=g.exports.useState(0),c={sort:t?s:a,time:"Top"!==a||t?null:l,serverId:e,folderId:t},{data:m,loading:d,fetchMore:u}=function(e){const t={...On,...e};return n(Fa,t)}({variables:c,fetchPolicy:"cache-and-network",nextFetchPolicy:"cache-first"}),p=null==m?void 0:m.posts.hasMore,v=null!=(r=null==m?void 0:m.posts.posts)?r:[];return[v,d,()=>{p&&0!==v.length&&(u({variables:{...c,offset:20*(o+1)},updateQuery:(e,{fetchMoreResult:t})=>({posts:{hasMore:t.posts.hasMore,posts:[...e.posts.posts,...t.posts.posts]}})}),i(o+1))},p]};var as=g.exports.forwardRef((({avatarUrl:e,children:t,loading:n="eager",className:r="",size:a=12,style:l={}},s)=>f.createElement("div",{ref:s,className:`relative flex-shrink-0 flex items-center justify-center bg-cover bg-center ${r}`,style:{width:a/4+"rem",height:a/4+"rem",backgroundImage:e?`url(${e})`:void 0,...l}},t))),ls=g.exports.forwardRef((({server:e,loading:t="eager",size:n=12,className:r="",style:a={}},l)=>{var s;const o=(null!=(s=null==e?void 0:e.displayName)?s:"").split(" ").map((e=>e[0])).join("").toUpperCase(),i=g.exports.useMemo((()=>{const e=o;return e.length<=2?"18px":3===e.length?"16px":4===e.length?"14px":5===e.length?"12px":e.length>=6?"10px":void 0}),[o]);return e?f.createElement(as,{ref:l,avatarUrl:e.avatarUrl,loading:t,className:`${r} cursor-pointer`,size:n,style:a},!e.avatarUrl&&f.createElement("svg",{width:"100%",height:"100%",viewBox:"0 0 48 48",className:"absolute top-0 left-0",overflow:"visible"},f.createElement("defs",null,f.createElement("g",null,f.createElement("path",{d:"M48 24C48 37.2548 37.2548 48 24 48C10.7452 48 0 37.2548 0 24C0 10.7452 10.7452 0 24 0C37.2548 0 48 10.7452 48 24Z"})),f.createElement("g",null,f.createElement("rect",{x:"28",y:"-4",width:"24",height:"24",rx:"12",ry:"12",transform:"translate(20 -20)"})),f.createElement("g",null,f.createElement("rect",{x:"28",y:"28",width:"24",height:"24",rx:"12",ry:"12",transform:"translate(20 20)"}))),f.createElement("foreignObject",{x:"0",y:"0",width:"48",height:"48"},f.createElement("div",{className:"flex items-center justify-center h-full",tabIndex:"-1","aria-label":e.name,style:{fontSize:i}},f.createElement("div",{className:"flex items-center justify-center whitespace-nowrap font-medium text-tertiary","aria-hidden":"true"},o))))):null}));function ss({children:e,render:t,className:n,placement:r="right"}){const[a,l]=g.exports.useState(!1),s=_(8);const o={name:"hideOnPopperBlur",defaultValue:!0,fn:e=>({onCreate(){e.popper.addEventListener("focusout",(t=>{e.props.hideOnPopperBlur&&t.relatedTarget&&!e.popper.contains(t.relatedTarget)&&e.hide()}))}})};return f.createElement(f.Fragment,null,f.createElement(q,{render:e=>f.createElement(H.div,{style:{x:s},...e,className:`hidden lg:block ${n}`},t((()=>l(!1)))),placement:r,interactive:!0,onMount:function(){l(!0),s.set(8),B(s,0,{ease:[.4,0,.2,1],duration:.15})},visible:a,onHide:()=>l(!1),onClickOutside:()=>l(!1),plugins:[o],zIndex:9999,appendTo:document.body},f.createElement("span",{className:"leading-none",onClick:()=>l(!0)},e)))}const os={gray:j.gray,red:j.red,yellow:j.amber,green:j.emerald,blue:j.blue,indigo:j.indigo,purple:j.violet,pink:j.pink},is={transparent:"transparent",current:"currentColor",black:j.black,white:j.white,...os},cs={Red:is.red[500],Yellow:is.yellow[500],Green:is.green[500],Blue:is.blue[500],Indigo:is.indigo[500],Purple:is.purple[500],Pink:is.pink[500]};var ms=g.exports.forwardRef((({user:e,loading:t="eager",size:n=12,showOnline:r=!1,className:a="",dotClassName:l=""},s)=>f.createElement(as,{ref:s,avatarUrl:null==e?void 0:e.avatarUrl,loading:t,className:`${a} cursor-pointer rounded-full`,size:n,style:(null==e?void 0:e.avatarUrl)?{}:{backgroundColor:cs[null==e?void 0:e.color]}},r&&f.createElement("div",{className:`absolute bottom-0 right-0 rounded-full z-10 ${l} ${(null==e?void 0:e.isOnline)?"bg-green-500":"bg-gray-600"}`}),!(null==e?void 0:e.avatarUrl)&&f.createElement(G,{className:"text-primary w-2/3 h-2/3"}))));function ds({user:e,role:t,children:n,placement:r="right"}){const a=Qa((e=>e.setDialogUserId));return f.createElement(f.Fragment,null,f.createElement(ss,{className:"w-64",placement:r,render:n=>f.createElement("div",{className:"w-full relative rounded-md shadow-lg duration-200 transform transition z-50 w-64"},f.createElement("div",{className:"p-3 flex flex-col items-center dark:bg-gray-850 rounded-t-md"},f.createElement("div",{className:"group relative"},f.createElement(ms,{user:e,size:20,showOnline:!0,className:"dark:bg-gray-700 cursor-pointer select-none",dotClassName:"ring-5 w-4 h-4 dark:ring-gray-850"}),f.createElement("div",{onClick:()=>{n(),a(e.id)},className:"cursor-pointer bg-black bg-opacity-50 transition rounded-full absolute whitespace-nowrap inset-0 flex items-center justify-center text-9 uppercase tracking-widest font-semibold opacity-0 group-hover:opacity-100"},"View Profile")),f.createElement("div",{className:"mt-3 text-base"},f.createElement("span",{className:"font-semibold text-primary"},e.username))),f.createElement("div",{className:"p-4 dark:bg-gray-800 rounded-b-md"},t&&f.createElement("div",null,f.createElement("div",{className:"text-11 font-semibold uppercase tracking-widest text-secondary pb-2"},"Roles"),f.createElement("div",{style:{borderColor:t.color},className:"text-xs text-secondary font-medium pl-1 py-1 pr-2 leading-none rounded-full border inline-flex items-center "+(t.color?"":"dark:border-gray-700")},f.createElement("div",{className:"w-3 h-3 rounded-full mr-1 "+(t.color?"":"dark:bg-gray-700"),style:{backgroundColor:t.color}}),t.name))))},n))}const us=/^https?:\/\/twitter\.com\/(?:#!\/)?(?:\w+)\/status(?:es)?\/(\d+)/,ps=/^https?:\/\/banned\.video\/watch\?id=((?:\w){24})/,gs=/^https?:\/\/open\.(?:spotify\.com\/)(?:embed\/)?(track|playlist|album)\/((?:\w){22})/,vs=/^https?:\/\/gfycat\.com\/(\w+)/,hs=/^https?:\/\/www\.bitchute\.com\/video\/(\w+)/,fs=/^https?:\/\/www\.youtube\.com\/watch\?v=([a-zA-Z0-9_-]+)/,bs=/^https?:\/\/youtu\.be\/([a-zA-Z0-9_-]+)/,Es=/^https?:\/\/www\.twitch\.tv\/([a-zA-Z0-9_-]+)/,xs=/^https?:\/\/www\.twitch\.tv\/videos\/(\d+)/,ys=/^https?:\/\/clips\.twitch\.tv\/([a-zA-Z0-9_-]+)/,ws=e=>us.test(e),Ns=e=>ps.test(e),ks=e=>gs.test(e),Cs=e=>vs.test(e),$s=e=>hs.test(e),Us=e=>fs.test(e),Is=e=>Es.test(e),Ss=e=>xs.test(e),Ps=e=>ys.test(e),Fs=y("aspect-h-9 aspect-w-16 relative"),Ms=y("w-full h-full");function Rs({url:e}){if(ws(e)){const t=e.match(us)[1];return f.createElement(V,{tweetId:t,options:{theme:"dark",align:"center",dnt:!0}})}if(Ns(e)){const t=e.match(ps)[1];return f.createElement("div",{className:Fs},f.createElement("iframe",{src:`https://api.banned.video/embed/${t}?autoplay=false&amp;muted=false`,frameBorder:"0",allowFullScreen:!0,className:Ms}))}if(ks(e)){const t=e.match(gs),n=t[1],r=t[2];return f.createElement("div",{className:Fs},f.createElement("iframe",{src:`https://open.spotify.com/embed/${n}/${r}`,frameBorder:"0",allowTransparency:"true",allow:"encrypted-media",className:Ms}))}if(Cs(e)){const t=e.match(vs)[1];return f.createElement("div",{className:Fs},f.createElement("iframe",{src:`https://gfycat.com/ifr/${t}`,frameBorder:"0",scrolling:"no",allowFullScreen:!0,className:Ms}))}if($s(e)){const t=e.match(hs)[1];return f.createElement("div",{className:Fs},f.createElement("iframe",{src:`https://www.bitchute.com/embed/${t}/`,frameBorder:"0",allowFullScreen:!0,className:Ms}))}if(Us(e)||(e=>bs.test(e))(e)){const t=Us(e)?e.match(fs)[1]:e.match(bs)[1];return f.createElement(Y,{videoId:t,containerClassName:"relative w-full h-0 aspect-h-9 aspect-w-16 overflow-hidden youtube",opts:{playerVars:{autoplay:1,controls:1}}})}if(Is(e)){const t=e.match(Es)[1];return f.createElement(W,{channel:t,layout:"video",theme:"dark",targetClass:Fs})}if(Ss(e)){const t=e.match(xs)[1];return f.createElement(W,{video:t,layout:"video",theme:"dark",targetClass:Fs})}if(Ps(e)){const t=e.match(ys)[1];return f.createElement("div",{className:Fs},f.createElement("iframe",{src:`https://clips.twitch.tv/embed?clip=${t}&parent=localhost&parent=joincomet.app`,frameBorder:"0",allowFullScreen:!0,scrolling:"no",className:Ms}))}return null}function As({image:e,width:t,height:n,rounded:r=!0}){const[a,l]=g.exports.useState(!1);return f.createElement("div",null,f.createElement("img",{onClick:()=>l(!0),src:e.smallUrl,alt:"",className:(r?"rounded":"")+" cursor-pointer",width:t||e.smallWidth,height:n||e.smallHeight}),f.createElement(Yl,{closeOnOverlayClick:!0,close:()=>l(!1),isOpen:a},f.createElement("div",{className:"mx-auto"},f.createElement("div",{className:"text-left"},f.createElement("img",{onClick:e=>e.stopPropagation(),src:e.popupUrl,alt:"",width:e.popupWidth,height:e.popupHeight}),f.createElement("div",{className:"pt-1"},f.createElement("a",{href:e.originalUrl,className:"hover:underline cursor-pointer text-mid font-semibold text-13 focus:outline-none",target:"_blank",rel:"noreferrer noopener",onClick:e=>e.stopPropagation()},"Open original"))))))}function Ds({metadata:e,dark:t=!1}){var n,r,a;const[l,s]=g.exports.useState(!1),o=(i=e.url)&&(ws(i)||Ns(i)||ks(i)||Cs(i)||$s(i)||Us(i)||Is(i)||Ss(i)||Ps(i));var i;const c=null==(n=e.themeColor)?void 0:n.replaceAll(" ","").trim().toLowerCase(),m=!c||c.startsWith("rgb(255,255,255")||c.startsWith("rgba(255,255,255")||c.startsWith("#")&&![...c.substring(1)].find((e=>"f"!==e));return f.createElement("div",null,f.createElement("div",{className:`rounded inline-flex transition ${t?"dark:bg-gray-850 "+(m?"dark:border-gray-950":""):"dark:bg-gray-800 "+(m?"dark:border-gray-900":"")} pt-4 border-l-4`,style:m?{}:{borderColor:e.themeColor}},f.createElement("div",{className:"flex-grow rounded-r-md pl-4 pr-4 pb-4 flex flex-col"},f.createElement("div",{className:"max-w-[400px] space-y-3"},e.publisher&&f.createElement("div",{className:"text-xs text-secondary"},e.publisher),f.createElement("div",{className:"leading-none"},f.createElement("a",{href:e.url,rel:"noopener nofollow noreferrer",target:"_blank",className:"text-sm font-semibold text-blue-400 hover:underline"},null!=(r=e.title)?r:"No title")),e.description&&!o&&f.createElement("div",{className:"text-13 text-secondary line-clamp-9",dangerouslySetInnerHTML:{__html:null!=(a=e.description)?a:"No description"}}),(o||e.image&&"summary_large_image"===e.twitterCard)&&f.createElement("div",{className:"pt-1 "+(l?"min-w-[400px]":"")},l?f.createElement(Rs,{url:e.url}):f.createElement("div",{className:"max-w-[400px] w-full relative rounded cursor-pointer",onClick:()=>{o&&s(!0)}},o?f.createElement(f.Fragment,null,f.createElement("img",{alt:"Thumbnail",src:e.image.smallUrl,className:"rounded select-none",height:e.image.smallHeight,width:e.image.smallWidth}),f.createElement("div",{className:"absolute inset-0 flex items-center justify-center"},f.createElement("div",{className:"text-tertiary rounded-full bg-black bg-opacity-75 flex space-x-3 p-3"},f.createElement(Z,{className:"w-6 h-6 cursor-pointer text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 transition"}),f.createElement(Q,{onClick:t=>{t.stopPropagation(),t.preventDefault(),window.open(e.url,"_blank")},className:"w-6 h-6 cursor-pointer text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 transition"})))):f.createElement(As,{image:e.image}))))),!!e.image&&"summary_large_image"!==e.twitterCard&&!o&&f.createElement("div",{className:"pr-4"},f.createElement(As,{width:80,height:80,image:e.image}))))}var Ts=g.exports.memo((function({post:e,isPostPage:n=!1,showServerName:r=!1,className:a="",index:l}){var s,o,i,c,m;const{push:d}=U(),[u]=function(e){const n={...On,...e};return t(Qr,n)}(),[{opacity:p},v]=J({type:Ja,item:e,collect:e=>({opacity:e.isDragging()?.4:1})}),h=K().getMonitor().isDragging(),[E,x]=g.exports.useState(!1);g.exports.useEffect((()=>{if(!h){const e=setTimeout((()=>x(!1)),300);return()=>clearTimeout(e)}x(!0)}),[h]);const y=g.exports.useMemo((()=>{var t,n;return e.text||!(e.text||e.linkUrl||e.images&&0!==e.images.length)?"text post":e.linkUrl?e.domain:1===(null==(t=e.images)?void 0:t.length)?"image post":(null==(n=e.images)?void 0:n.length)>1?"image album":void 0}),[e.domain,e.images,e.linkUrl,e.text]),[N,k]=g.exports.useState(0),[C]=Va(),$=Ql();return f.createElement(jl,{data:{type:yl,post:e}},f.createElement("div",{style:{opacity:p},className:`${a} cursor-pointer relative group hover:shadow dark:bg-gray-800 dark:hover:bg-gray-825 px-2 py-3 rounded flex`,onClick:()=>{E||d(e.relativeUrl)}},f.createElement("div",{className:"flex flex-col items-center pr-2"},f.createElement("button",{type:"button",className:"focus:outline-none p-1 rounded-full dark:hover:bg-gray-750 transition cursor-pointer "+(e.voteType===cr.Up?"text-red-400":"text-mid"),onClick:t=>{if(t.stopPropagation(),t.preventDefault(),!C)return void $();let n=e.voteCount;e.voteType===cr.Up?n--:e.voteType===cr.None?n++:e.voteType===cr.Down&&(n+=2),u({variables:{input:{postId:e.id,type:e.voteType===cr.Up?cr.None:cr.Up}},optimisticResponse:{...e,voteType:e.voteType===cr.Up?cr.None:cr.Up,voteCount:n}})}},f.createElement(X,{className:"w-5 h-5"})),f.createElement("div",{className:`text-13 leading-none font-semibold ${e.voteType===cr.Up?"text-red-400":""} ${e.voteType===cr.Down?"text-blue-400":""} ${e.voteType===cr.None?"text-tertiary":""}`},e.voteCount<0?0:e.voteCount),e.server.isDownvotesEnabled&&f.createElement("button",{type:"button",className:"focus:outline-none p-1 rounded-full dark:hover:bg-gray-750 transition cursor-pointer "+(e.voteType===cr.Down?"text-blue-400":"text-mid"),onClick:t=>{if(t.stopPropagation(),t.preventDefault(),!C)return void $();let n=e.voteCount;e.voteType===cr.Down?n++:e.voteType===cr.None?n--:e.voteType===cr.Up&&(n-=2),u({variables:{input:{postId:e.id,type:e.voteType===cr.Down?cr.None:cr.Down}},optimisticResponse:{...e,voteType:e.voteType===cr.Down?cr.None:cr.Down,voteCount:n}})}},f.createElement(ee,{className:"w-5 h-5"}))),!n&&f.createElement("div",{className:"w-26 h-18 rounded dark:bg-gray-750 mr-4 flex items-center justify-center bg-center bg-cover bg-no-repeat",style:e.thumbnailUrl?{backgroundImage:`url(${e.thumbnailUrl})`}:{}},!e.thumbnailUrl&&f.createElement(f.Fragment,null,e.linkUrl?f.createElement(te,{className:"w-8 h-8 text-mid"}):f.createElement(ne,{className:"w-8 h-8 text-mid"}))),f.createElement("div",{className:"pr-4 flex-grow flex flex-col"},f.createElement("div",{className:"flex items-center pb-1.5",onClick:e=>{e.stopPropagation(),e.preventDefault()}},f.createElement(b,{to:`/+${e.server.name}`,className:"flex items-center"},f.createElement(ls,{server:e.server,size:5,className:"dark:bg-gray-750 rounded-full"}),f.createElement("span",{className:"ml-1.5 text-xs font-medium text-secondary"},e.server.displayName)),f.createElement("span",{className:"text-xs text-tertiary"}," · ",re(new Date(e.createdAt))," ago by"),f.createElement(jl,{data:{type:xl,user:e.author}},f.createElement(ds,{user:e.author,role:null==(s=e.serverUser)?void 0:s.role},f.createElement("div",{className:"ml-1 cursor-pointer text-tertiary text-xs font-medium leading-none",style:{color:null==(i=null==(o=e.serverUser)?void 0:o.role)?void 0:i.color}},null!=(m=null==(c=e.author)?void 0:c.username)?m:"[deleted]"))),f.createElement("div",{className:"text-xs text-mid font-medium"}," · ",f.createElement("span",{className:"text-xs text-mid"},"(",y,")"))),f.createElement(b,{to:e.relativeUrl,className:"text-secondary font-medium text-base"},e.title),n&&y&&(!!e.text||!!e.linkUrl||!!e.images.length)&&f.createElement("div",{className:"mt-0.5 pb-2"},!!e.text&&f.createElement("div",{dangerouslySetInnerHTML:{__html:e.text},className:"prose prose-sm dark:prose-dark max-w-none pt-0.5"}),!!e.linkUrl&&f.createElement(f.Fragment,null,e.linkMetadata?f.createElement("div",{className:"max-w-screen-sm w-full mt-2"},f.createElement(Ds,{dark:!0,metadata:e.linkMetadata})):f.createElement("a",{href:e.linkUrl,target:"_blank",rel:"noopener nofollow noreferrer",className:"text-sm text-blue-400 hover:underline cursor-pointer pt-0.5"},e.linkUrl)),!!e.images.length&&f.createElement("div",{className:"mt-2 w-[400px]"},f.createElement("div",{className:"flex relative"},f.createElement("div",{className:"w-full h-[300px] relative flex items-center justify-center dark:bg-gray-775"},e.images.map(((e,t)=>f.createElement("div",{key:t,className:""+(t===N?"block":"hidden")},f.createElement(As,{rounded:!1,image:e.image,key:t}))))),e.images.length>1&&f.createElement(f.Fragment,null,N>0&&f.createElement("div",{onClick:()=>k(N-1),className:"absolute left-3 top-1/2 transform -translate-y-1/2 rounded-full shadow flex items-center justify-center w-10 h-10 dark:bg-white"},f.createElement(ae,{className:"w-5 h-5 dark:text-black"})),N<e.images.length-1&&f.createElement("div",{onClick:()=>k(N+1),className:"absolute right-3 top-1/2 transform -translate-y-1/2 rounded-full shadow flex items-center justify-center w-10 h-10 dark:bg-white"},f.createElement(w,{className:"w-5 h-5 dark:text-black"})))),!!e.images.find((e=>e.caption||e.linkUrl))&&f.createElement("div",{className:"h-12 dark:bg-gray-750 flex items-center px-5 text-sm select-none"},e.images[N].caption&&f.createElement("div",{className:"text-primary truncate pr-3",title:e.images[N].caption},e.images[N].caption),e.images[N].linkUrl&&f.createElement("a",{href:e.images[N].linkUrl,target:"_blank",rel:"noopener nofollow noreferrer",className:"ml-auto text-blue-400 hover:underline cursor-pointer"},e.images[N].linkUrl)))),f.createElement("div",{className:"flex items-center pt-1.5"},f.createElement("div",{className:"text-gray-500 hover:text-gray-700 dark:hover:text-gray-300 flex items-center cursor-pointer"},f.createElement(le,{className:"w-5 h-5"}),f.createElement("div",{className:"ml-2 text-xs font-medium"},e.commentCount)),f.createElement(jl,{data:{type:yl,post:e},leftClick:!0},f.createElement("div",{className:"ml-2 text-gray-500 hover:text-gray-700 dark:hover:text-gray-300 flex items-center cursor-pointer"},f.createElement(se,{className:"text-disabled w-4 h-4"})))))))}));function Ls({folderId:e,serverId:t,showServerName:n,header:r}){const a=g.exports.useRef(null),[l,s,o,i]=rs({folderId:e,serverId:t}),c=g.exports.useCallback(((e,t)=>{const r=e[t];return r?f.createElement("div",{className:"px-4 pb-1.5"},f.createElement(Ts,{post:r,showServerName:n,index:t})):f.createElement("div",{style:{height:"1px"}})}),[n]);return f.createElement(f.Fragment,null,f.createElement(oe,{className:"scrollbar-custom dark:bg-gray-750",components:{Header:r?()=>r:null,Footer:()=>i?f.createElement("div",{className:"flex items-center justify-center h-20"},f.createElement(al,null)):f.createElement(Ya,null)},endReached:()=>{!s&&i&&o()},itemContent:e=>c(l,e),overscan:100,ref:a,style:{overflowX:"hidden"},totalCount:(null==l?void 0:l.length)||0}))}const Os=e=>{const t=Qa((e=>e.setHomePage));g.exports.useEffect((()=>t(e)))};function zs({children:e,header:t,rightSidebar:n,leftSidebar:r}){return f.createElement("div",{className:"flex flex-grow"},r,f.createElement("div",{className:"flex flex-col flex-grow"},t,f.createElement("div",{className:"flex flex-col flex-grow",style:{maxHeight:t?"calc(100% - 3rem)":"100%"}},e)),n)}const _s=/(https?:\/\/(?:www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z]{2,}\b(?:[-a-zA-Z0-9@:%._+~#=?!&/]*)(?:[-a-zA-Z0-9@:%._+~#=?!&/]*))[\s\n]$/gi,qs=/(?:\()https?:\/\/(?:www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z]{2,}\b(?:[-a-zA-Z0-9@:%._+~#=?!&/()]*)(?:\))[\s\n]$/gi;function Hs(e,t,n){const r=pe(e,t,n);return new ce(e,((e,t,n,a)=>{const l=r.handler(e,t,n,a);return l&&l.insertText(t[0].slice(-1),a),l}))}var Bs=ie.extend({addProseMirrorPlugins(){const e=[Hs(_s,this.type,(e=>({href:e[1]}))),Hs(qs,this.type,(e=>({href:e[1]})))],t=me({rules:e}),n=t.props.handleTextInput;return t.props.handleKeyDown=(e,t)=>{if("Enter"!==t.key)return!1;const{$cursor:r}=e.state.selection;return!!r&&n(e,r.pos,r.pos,"\n")},[t,new de({key:new ue("handlePaste"),props:{handlePaste:()=>!0}})]}});const js=ge.create({name:"spoiler",inclusive:!1,defaultOptions:{HTMLAttributes:{"data-spoiler":""}},addAttributes:()=>({"data-spoiler":{default:""}}),parseHTML:()=>[{tag:"span[data-spoiler]"}],renderHTML({HTMLAttributes:e}){return["span",ve(this.options.HTMLAttributes,e),0]},addCommands:()=>({setSpoiler:e=>({commands:t})=>t.setMark("spoiler",e),toggleSpoiler:e=>({commands:t})=>t.toggleMark("spoiler",e),unsetSpoiler:()=>({commands:e})=>e.unsetMark("spoiler")})});function Gs({text:e,setText:t}){var n;const r=he({extensions:[fe.configure({heading:{levels:[2,3]}}),Bs,be,js],content:e,editorProps:{attributes:{class:"prose prose-sm dark:prose-dark focus:outline-none max-w-none min-h-[7.5rem] p-4"}}}),a=null!=(n=null==r?void 0:r.getHTML())?n:"";g.exports.useEffect((()=>{t("<p></p>"===a?"":a)}),[r,a,t]);const l=/https?:\/\/(?:www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z]{2,}\b(?:[-a-zA-Z0-9@:%._+~#=?!&/]*)(?:[-a-zA-Z0-9@:%._+~#=?!&/]*)/i,s=g.exports.useCallback((e=>{var t;const n=null==(t=e.clipboardData)?void 0:t.getData("text/plain");n&&(l.test(n)?null==r||r.commands.insertContent(`<a href="${n}" target="_blank" rel="noopener noreferrer nofollow">${n}</a>`):null==r||r.commands.insertContent(n),null==r||r.commands.focus())}),[r]);return g.exports.useEffect((()=>(document.body.addEventListener("paste",s),()=>{document.body.removeEventListener("paste",s)})),[s]),f.createElement("div",{className:"dark:bg-gray-750 rounded"},f.createElement(Qs,{editor:r}),f.createElement(Ee,{editor:r}))}const Vs=e=>y(`\n  p-1\n  rounded\n  dark:hover:bg-gray-600\n  cursor-pointer\n  ${e?"dark:bg-gray-600 dark:text-gray-300":"text-gray-600 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300"}\n`);function Ys({label:e,icon:t,small:n,onClick:r,active:a}){const l=t;return f.createElement(F,{content:e},f.createElement("div",{className:"h-9 flex items-center",onClick:r},f.createElement("div",{className:Vs(a)},f.createElement(l,{className:""+(n?"w-4 h-4 mt-0.5":"w-5 h-5")}))))}const Ws=y("\n  flex\n  items-center\n  px-2\n  h-full\n  space-x-0.5\n");function Zs({children:e}){return f.createElement("div",{className:Ws},e)}function Qs({editor:e}){return e?f.createElement("div",{className:"min-h-[2.25rem] border-b dark:border-gray-700 flex flex-wrap items-center divide-x dark:divide-gray-700"},f.createElement(Zs,null,f.createElement(Ys,{label:"Bold (Ctrl+B)",icon:xe,onClick:()=>e.chain().focus().toggleBold().run(),active:e.isActive("bold")}),f.createElement(Ys,{label:"Italic (Ctrl+U)",icon:ye,onClick:()=>e.chain().focus().toggleItalic().run(),active:e.isActive("italic")}),f.createElement(Ys,{label:"Underline (Ctrl+I)",icon:we,onClick:()=>e.chain().focus().toggleUnderline().run(),active:e.isActive("underline")}),f.createElement(Ys,{label:"Strikethrough",icon:Ne,onClick:()=>e.chain().focus().toggleStrike().run(),active:e.isActive("strike")})),f.createElement(Zs,null,f.createElement(Ys,{label:"Spoiler",icon:ke,onClick:()=>e.chain().focus().toggleSpoiler().run(),active:e.isActive("spoiler")}),f.createElement(Ys,{label:"Inline Code",icon:Ce,onClick:()=>e.chain().focus().toggleCode().run(),active:e.isActive("code")})),f.createElement(Zs,null,f.createElement(Ys,{label:"Link",icon:$e,onClick:()=>{const t=window.prompt("URL");e.chain().focus().setLink({href:t}).run()},active:e.isActive("link")}),e.isActive("link")&&f.createElement(Ys,{label:"Remove Link",icon:Ue,onClick:()=>{e.chain().focus().unsetLink().run()}}),f.createElement(Ys,{label:"Divider",icon:Ie,onClick:()=>e.chain().focus().setHorizontalRule().run()})),f.createElement(Zs,null,f.createElement(Ys,{label:"Bulleted List",icon:Se,onClick:()=>e.chain().focus().toggleBulletList().run(),active:e.isActive("bulletList")}),f.createElement(Ys,{label:"Numbered List",icon:Pe,onClick:()=>e.chain().focus().toggleOrderedList().run(),active:e.isActive("orderedList")})),f.createElement(Zs,null,f.createElement(Ys,{label:"Large Heading (Ctrl+[)",icon:Fe,onClick:()=>e.chain().focus().toggleHeading({level:2}).run(),active:e.isActive("heading",{level:2})}),f.createElement(Ys,{label:"Small Heading (Ctrl+])",icon:Fe,small:!0,onClick:()=>e.chain().focus().toggleHeading({level:3}).run(),active:e.isActive("heading",{level:3})})),f.createElement(Zs,null,f.createElement(Ys,{label:"Block Quote",icon:Me,onClick:()=>e.chain().focus().toggleBlockquote().run(),active:e.isActive("blockquote")}),f.createElement(Ys,{label:"Code Block",icon:Re,onClick:()=>e.chain().focus().toggleCodeBlock().run(),active:e.isActive("codeBlock")})),f.createElement(Zs,null,f.createElement(Ys,{label:"Emoji",icon:Ae}))):null}const Js=y("\n  relative\n  w-full\n  h-12\n  flex\n  items-center\n  pl-5\n  pr-10\n  text-left\n  bg-white\n  dark:bg-gray-800\n  dark:hover:bg-gray-775\n  cursor-pointer\n  focus:outline-none\n  text-sm\n  rounded-none\n  rounded-tl-xl\n"),Ks=y("\n  scrollbar-dark\n  absolute\n  w-full\n  py-1\n  mt-1\n  overflow-auto\n  text-sm\n  text-primary\n  bg-white\n  dark:bg-gray-775\n  rounded-md\n  shadow-lg\n  max-h-60\n  focus:outline-none\n  space-y-0.5\n");function Xs({servers:e=[],server:t,setServer:n}){return f.createElement("div",{className:"col-span-1 z-10"},f.createElement(De,{value:t,onChange:n},(({open:n})=>f.createElement(f.Fragment,null,f.createElement("div",{className:"relative"},f.createElement(De.Button,{className:Js},t?f.createElement(f.Fragment,null,f.createElement(ls,{server:t,className:"dark:bg-gray-750 rounded-full",size:7}),f.createElement("span",{className:"block truncate pl-2"},t.name)):f.createElement("span",{className:"block truncate text-red-400"},"Select a planet"),f.createElement("span",{className:"absolute inset-y-0 right-0 flex items-center pr-4 pointer-events-none"},f.createElement(ee,{className:"w-5 h-5 text-gray-400","aria-hidden":"true"}))),f.createElement(R,{show:n,as:g.exports.Fragment,leave:"transition ease-in duration-100",leaveFrom:"opacity-100",leaveTo:"opacity-0"},f.createElement(De.Options,{static:!0,className:Ks},e.map((e=>f.createElement(De.Option,{key:e.id,className:({active:e})=>(e=>y(`\n  ${e?"dark:bg-gray-750":""}\n  cursor-pointer\n  select-none\n  relative\n  focus:outline-none\n`))(e),value:e},(({selected:t})=>f.createElement("div",{className:"flex items-center h-10 pl-5 pr-4 "+(t?"dark:bg-gray-750":"")},f.createElement(ls,{server:e,size:7,className:"dark:bg-gray-725 rounded-full"}),f.createElement("span",{className:(t?"font-semibold":"font-normal")+" block truncate pl-2"},e.name)))))))))))))}const eo=(e,t)=>{const n=g.exports.useRef(e);g.exports.useEffect((()=>{n.current=e}),null!=t?t:[e]);return g.exports.useCallback(((...e)=>{var t;null==(t=n.current)||t.call(n,...e)}),[])};var to=g.exports.forwardRef((({onChange:e,onInput:t,onBlur:n,onKeyPress:r,onKeyDown:a,onPaste:l,...s},o)=>{const i=eo(e),c=eo(t),m=eo(n),d=eo(r),u=eo(a),p=eo(l);return f.createElement(Te,{...s,ref:o,onChange:i,onInput:c,onBlur:m,onKeyPress:d,onKeyDown:u,onPaste:p})}));const no=y("\n  block\n  text-11\n  pb-1.5\n  font-semibold\n  tracking-widest\n  uppercase\n  text-tertiary\n"),ro=y("\n  text-base\n  text-primary\n  disabled:opacity-50\n  bg-green-600\n  rounded\n  px-5\n  h-9\n  flex\n  items-center\n  disabled:cursor-not-allowed\n  focus:outline-none\n  select-none\n"),ao=y("\n  text-base\n  text-tertiary\n  focus:outline-none\n  px-2\n  h-9\n  flex\n  items-center\n  select-none\n"),lo=e=>y(`\n  px-5\n  h-12\n  border-b-2\n  dark:hover:bg-gray-775\n  ${e?"dark:border-gray-100 text-primary dark:bg-gray-775":"border-transparent text-tertiary"}\n  flex\n  items-center\n  justify-center\n  select-none\n  cursor-pointer\n  text-sm\n  last:rounded-tr-xl\n`),so=y("\n  px-4\n  h-10\n  placeholder-tertiary\n  dark:bg-gray-750\n  rounded\n  text-sm\n  text-primary\n  w-full\n  focus:outline-none\n"),oo="Text",io="Link",co="Image";function mo({open:e,setOpen:r,serverId:a}){var l,s,o,i,c,m,d,u,p,v;const[h,b]=g.exports.useState(""),[E,{loading:x}]=function(e){const n={...On,...e};return t(Wr,n)}(),{t:y}=k(),{push:w}=U(),[N]=Va(),C=null!=(l=null==N?void 0:N.servers)?l:[],[$,I]=g.exports.useState(a?null==C?void 0:C.find((e=>e.id===a)):null),[S,P]=g.exports.useState(oo),{register:F,handleSubmit:R,reset:A,formState:D,watch:T,setValue:L,trigger:O}=Le({mode:"onChange"}),z=T("linkUrl"),[_,q]=g.exports.useState("");Oe((()=>{q(z)}),500,[z]);const H=T("title"),{data:B,loading:j}=function(e){const t={...On,...e};return n(Ia,t)}({variables:{linkUrl:_},skip:!_||!ze(_)}),G=null==B?void 0:B.getLinkMeta,[V,Y]=g.exports.useState([]);function W(e){return new Promise((function(t,n){let r=new FileReader;r.onload=function(){t(r.result)},r.onerror=function(){n(r)},r.readAsDataURL(e)}))}const[Z,Q]=g.exports.useState(0),J=()=>{r(!1),setTimeout((()=>{Q(0),Y([]),P(oo),A()}),300)};return f.createElement(Yl,{isOpen:e,close:J},f.createElement("form",{onSubmit:R((({title:e,linkUrl:t})=>{E({variables:{input:{title:e,text:h&&S===oo?h:null,linkUrl:t&&S===io?t:null,serverId:$.id,images:V&&V.length>0&&S===co?V.map((({file:e,caption:t,linkUrl:n})=>({file:e,caption:t,linkUrl:n}))):null}}}).then((({data:e})=>{const t=null==e?void 0:e.createPost;t&&(r(!1),A(),w(t.relativeUrl))}))})),className:"max-w-screen-md w-full dark:bg-gray-800 text-left rounded-xl"},f.createElement("div",{className:"grid grid-cols-4"},f.createElement(Xs,{servers:C,server:$,setServer:I}),f.createElement("div",{className:lo(S===oo),onClick:()=>{P(oo),L("linkUrl",""),Y([])}},f.createElement(ne,{className:"mr-2 w-5 h-5"}),"Text"),f.createElement("div",{className:lo(S===io),onClick:()=>{P(io),b(""),Y([])}},f.createElement(_e,{className:"mr-2 w-5 h-5"}),"Link"),f.createElement("div",{className:lo(S===co),onClick:()=>{P(co),L("linkUrl",""),O("linkUrl"),b("")}},f.createElement(qe,{className:"mr-2 w-5 h-5"}),"Images")),f.createElement("div",{className:"p-5"},f.createElement("div",{className:"relative"},f.createElement("label",{htmlFor:"title",className:no},"Title",(null==H?void 0:H.length)>0&&` (${null==H?void 0:H.length}/300)`),f.createElement("input",{maxLength:300,className:so,...F("title",{required:!0}),id:"title"})),S===oo&&f.createElement("div",{className:"pt-5"},f.createElement(Gs,{text:h,setText:b})),S===io&&f.createElement(f.Fragment,null,f.createElement("div",{className:"pb-5 pt-1.5"},(null==G?void 0:G.title)&&H!==(null==G?void 0:G.title)&&f.createElement("span",{className:"text-xs text-blue-500 hover:underline cursor-pointer line-clamp-1",onClick:()=>{L("title",null==G?void 0:G.title),O("title")}},null==G?void 0:G.title)),f.createElement("label",{htmlFor:"linkUrl",className:"block text-11 pb-1.5 font-semibold tracking-widest uppercase text-tertiary"},"Link URL"),f.createElement("div",{className:"relative h-10"},f.createElement(_e,{className:"top-1/2 left-2.5 transform -translate-y-1/2 absolute w-5 h-5 text-mid"}),f.createElement("input",{maxLength:2e3,className:"px-10 h-10 dark:bg-gray-750 rounded text-sm text-primary w-full focus:outline-none",...F("linkUrl",{validate:e=>!e||ze(e)}),id:"linkUrl"}),j&&f.createElement("div",{className:"top-1/2 right-2.5 transform -translate-y-1/2 absolute"},f.createElement(al,null))),z&&!ze(z)&&f.createElement("div",{className:"text-13 text-red-400 pt-1"},"Must be a valid URL"),_&&ze(_)&&!!G&&f.createElement("div",{className:"mt-5"},f.createElement(Ds,{dark:!0,metadata:G}))),S===co&&f.createElement("div",{className:"mt-5"},V&&V.length>0?f.createElement("div",null,f.createElement("div",{className:"flex"},f.createElement("div",{className:"flex scrollbar-custom items-center space-x-3 overflow-x-auto border dark:border-gray-700 rounded-md h-31 px-3 max-w-full w-full"},V.map(((e,t)=>f.createElement("div",{key:t,onClick:()=>Q(t),className:"cursor-pointer group relative rounded border "+(Z===t?"dark:border-gray-500":"dark:border-transparent")},f.createElement("div",{className:"max-w-25 max-h-25 min-w-[6.25rem] min-h-[6.25rem] transform "+(Z===t?"scale-85":"")},f.createElement("div",{className:"absolute top-1 right-1 rounded-full bg-black p-0.5 hidden group-hover:block z-10",onClick:()=>{Z>=t&&Z>0&&setImmediate((()=>Q(Z-1)));const e=V.slice();e.splice(t,1),Y(e)}},f.createElement(He,{className:"w-4.5 h-4.5 text-white"})),f.createElement("div",{className:"absolute inset-0 bg-black rounded bg-opacity-0 group-hover:bg-opacity-50"}),f.createElement("div",{style:{backgroundImage:`url(${e.data})`},className:"max-w-25 max-h-25 min-w-[6.25rem] min-h-[6.25rem] bg-cover bg-center select-none rounded"}))))),f.createElement("div",{className:"w-25 h-25 rounded relative flex items-center justify-center border dark:border-gray-700 border-dashed cursor-pointer transition dark:hover:bg-gray-775"},f.createElement("input",{type:"file",id:"file",accept:"image/png,image/jpeg,image/webp,image/gif",hidden:!0,multiple:!0,onChange:e=>{const t=e.target.files;if(t&&t.length>0){Y([...V,...Array.from(t).map((e=>({file:e,caption:"",linkUrl:""})))]);let e=[];for(let n=0;n<t.length;n++)e.push(W(t[n]));Promise.all(e).then((e=>{Y([...V,...e.map(((e,n)=>({file:t[n],caption:"",linkUrl:"",data:e})))])}))}}}),f.createElement("label",{htmlFor:"file",className:"absolute inset-0 block cursor-pointer"}),f.createElement(M,{className:"w-1/2 h-1/2 text-tertiary"})))),V&&(null==V?void 0:V.length)>0&&f.createElement("div",{className:"mt-5 flex space-x-5"},f.createElement("div",{className:"w-81 h-81 bg-contain bg-center bg-no-repeat dark:bg-gray-775 flex-shrink-0",style:{backgroundImage:`url(${null==(s=V[Z])?void 0:s.data})`}}),f.createElement("div",{className:"space-y-5 max-w-full flex-grow"},f.createElement("div",null,f.createElement("label",{htmlFor:"caption",className:no},"Caption",(null==(i=null==(o=V[Z])?void 0:o.caption)?void 0:i.length)>0&&` (${null==(m=null==(c=V[Z])?void 0:c.caption)?void 0:m.length}/180)`),f.createElement(to,{id:"caption",className:"px-4 py-2.5 min-h-[2.5rem] dark:bg-gray-750 rounded text-sm text-primary focus:outline-none break-word",html:(null==(d=V[Z])?void 0:d.caption)||"",onChange:e=>{var t,n;if((null==(n=null==(t=V[Z])?void 0:t.caption)?void 0:n.length)>=180)return;const r=V.slice();let a=e.target.value;a.length>180&&(a=a.substring(0,181)),r[Z].caption=a,Y(r)}})),f.createElement("div",null,f.createElement("label",{htmlFor:"link",className:no},"Link"),f.createElement("input",{id:"link",className:so,value:(null==(u=V[Z])?void 0:u.linkUrl)||"",onChange:e=>{const t=V.slice();t[Z].linkUrl=e.target.value,Y(t)}}),(null==(p=V[Z])?void 0:p.linkUrl)&&!ze(null==(v=V[Z])?void 0:v.linkUrl)&&f.createElement("div",{className:"text-13 text-red-400 pt-1"},"Must be a valid URL"))))):f.createElement("div",{className:"relative"},f.createElement("input",{type:"file",id:"files",accept:"image/png,image/jpeg,image/webp,image/gif",hidden:!0,multiple:!0,onChange:e=>{const t=e.target.files;if(t&&t.length>0){Y(Array.from(t).map((e=>({file:e,caption:"",linkUrl:""}))));let e=[];for(let n=0;n<t.length;n++)e.push(W(t[n]));Promise.all(e).then((e=>Y(e.map(((e,n)=>({file:t[n],caption:"",linkUrl:"",data:e}))))))}}}),f.createElement("label",{htmlFor:"files",className:"select-none cursor-pointer flex items-center justify-center text-base text-tertiary h-30 border border-dashed dark:border-gray-700 rounded-md transition dark:hover:bg-gray-775"},"Drag 'n' drop some images here, or click to select images"))),f.createElement("div",{className:"flex items-center pt-5"},f.createElement("div",{className:"ml-auto flex items-center space-x-3"},f.createElement("button",{type:"button",className:ao,onClick:()=>J()},y("post.create.cancel")),f.createElement("button",{type:"submit",className:ro,disabled:!D.isValid||!$||x},y("post.create.submit"),x&&f.createElement(al,{className:"w-5 h-5 text-primary ml-3"})))))))}function uo({server:e}){const{t:t}=k(),[n,r]=g.exports.useState(!1),[a]=Va();return f.createElement(f.Fragment,null,f.createElement(mo,{open:n,setOpen:r,serverId:null==e?void 0:e.id}),f.createElement("div",{className:"p-4"},f.createElement("div",{onClick:()=>r(!0),className:"dark:bg-gray-700 h-13 flex items-center rounded transition dark:hover:bg-gray-650 cursor-pointer"},f.createElement("div",{className:"px-3 border-r dark:border-gray-650 h-7"},f.createElement(ms,{user:a,size:7})),f.createElement("div",{className:"text-sm text-secondary px-3"},t("post.createPost")))))}const po=({onClick:e,title:t,body:n,icon:r,timestamp:a})=>{if("granted"!==Notification.permission)return;new Notification(t,{body:n,icon:r,timestamp:a,silent:!0}).onclick=e;const l=new Audio((window.electron?".":"")+"/notification.mp3");l.volume=.5,l.play()},go=y("\n  cursor-pointer\n  hover:underline\n"),vo="bc1q85hzedw8wr29ylyh329z9e5dhz4yuqnc2830wc",ho="0x119b5129D730156017a69BD21e2ce774143C845b";function fo(){const e=C()[1],t=Qa((e=>e.showUsers));return f.createElement(Za,{right:!0,show:t},f.createElement("div",{className:"px-2.5 py-2.5"},f.createElement("div",{className:"dark:border-gray-750 border rounded p-2.5 text-xs text-tertiary leading-5"},f.createElement("div",{className:"space-x-3"},f.createElement(b,{to:"/help/terms",target:"_blank",className:go},"Terms"),f.createElement(b,{to:"/help/privacy",target:"_blank",className:go},"Privacy Policy"),f.createElement(b,{to:"/help/content",target:"_blank",className:go},"Content Policy"),f.createElement("a",{href:"https://github.com/joincomet/comet",target:"_blank",rel:"noopener noreferrer",className:go},"GitHub"),f.createElement("a",{href:"https://discord.gg/NPCMGSm",target:"_blank",rel:"noopener noreferrer",className:go},"Discord")),f.createElement("div",{className:"pt-1.5"},"© ",(new Date).getFullYear()," CometX, LLC")),f.createElement("div",{className:"space-y-0.5 text-xs text-tertiary leading-5 pt-1.5 break-all"},f.createElement("div",null,"Donations appreciated!"),f.createElement(F,{content:"Click to copy"},f.createElement("div",{className:"cursor-pointer",onClick:()=>{e(vo),$.success("BTC donation address copied!")}},f.createElement("span",{className:"select-none"},"BTC: "),f.createElement("span",{className:"highlightable"},vo))),f.createElement(F,{content:"Click to copy"},f.createElement("div",{className:"cursor-pointer",onClick:()=>{e(ho),$.success("ETH/BSC/MATIC donation address copied!")}},f.createElement("span",{className:"select-none"},"ETH/BSC/MATIC: "),f.createElement("span",{className:"highlightable"},ho))))))}function bo(){k(),Qa((e=>e.showFolders));const[e]=Va(),t=g.exports.useRef(null);return Os(null),g.exports.useEffect((()=>{"default"===Notification.permission&&Notification.requestPermission().then((function(e){"granted"===e&&po({title:"Notifications enabled!",icon:"/icons/icon.png"})}))})),f.createElement(f.Fragment,null,f.createElement(Be,null,f.createElement("title",null,"Home – Comet")),f.createElement(zs,{header:f.createElement(ts,{refreshPosts:()=>{t&&t.current&&t.current.refresh()}}),rightSidebar:f.createElement(fo,null)},f.createElement(Ls,{showServerName:!0,header:e?f.createElement(uo,null):null})))}const Eo=e=>{if(!e)return je;switch(e){case"Featured":return at;case"Arts":return rt;case"Business":return nt;case"Culture":return tt;case"Discussion":return le;case"Entertainment":return et;case"Gaming":return Xe;case"Health":return Ke;case"Hobbies":return Je;case"Lifestyle":return Qe;case"Memes":return Ae;case"Meta":return Ze;case"News":return We;case"Politics":return Ye;case"Programming":return Ce;case"Science":return tl;case"Sports":return Ve;case"Technology":return nl;case"Other":return Ge}};function xo({className:e}){return f.createElement("svg",{className:e,version:"1.1",viewBox:"0 0 6.3938 6.3938",xmlns:"http://www.w3.org/2000/svg"},f.createElement("defs",null,f.createElement("linearGradient",{id:"linearGradient971",x1:"7.7677",x2:"14.802",y1:"5.3857",y2:"5.3857",gradientTransform:"rotate(32 322.69 255.38)",gradientUnits:"userSpaceOnUse"},f.createElement("stop",{stopColor:"#6875f5",offset:"0"}),f.createElement("stop",{stopColor:"#f98080",offset:"1"}))),f.createElement("g",{transform:"translate(-188.06 124.29)"},f.createElement("path",{d:"m192.01-123.61a2.4814 2.526 32 0 0-0.37414 0.0274 1.9313 1.966 32 0 1 0.33022 2.4892 1.9313 1.966 32 0 1-2.3823 0.7953 2.4814 2.526 32 0 0 1.0387 1.3436 2.4814 2.526 32 0 0 3.4427-0.82683 2.4814 2.526 32 0 0-0.76584-3.4572 2.4814 2.526 32 0 0-1.2893-0.37155zm-3.9109 0.15503c-0.20116-0.0233 0.37961 0.32545 2.1063 2.4024 0.31374 0.37744 0.9773 0.0996 1.2604-0.35346 0.28309-0.45304 0.24162-1.1707-0.23513-1.2873l-2.9983-0.73329c-0.0596-0.0146-0.10458-0.0251-0.13332-0.0284z",fill:"url(#linearGradient971)"})))}function yo({className:e}){const[t]=g.exports.useState((new Date).getTime().toString());return f.createElement("svg",{className:e,fill:"currentColor",viewBox:"0 0 30.327 5.0518"},f.createElement("defs",null,f.createElement("linearGradient",{id:t,x1:"7.7677",x2:"14.802",y1:"5.3857",y2:"5.3857",gradientTransform:"translate(1.0113e-4,1.6184e-4)",gradientUnits:"userSpaceOnUse"},f.createElement("stop",{stopColor:"#6875f5",offset:"0"}),f.createElement("stop",{stopColor:"#f98080",offset:"1"}))),f.createElement("g",{transform:"translate(-56.423 -63.81)",strokeWidth:".26458"},f.createElement("path",{d:"m61.235 68.093q-0.18344 0.16933-0.50094 0.34572t-0.72672 0.30339q-0.40922 0.11994-0.87489 0.11994-0.5715 0-1.0654-0.17639-0.49389-0.18344-0.86783-0.51506-0.36689-0.33161-0.5715-0.79728-0.20461-0.47272-0.20461-1.0513 0-0.54328 0.21167-1.0019 0.21872-0.45861 0.59972-0.79728t0.87489-0.52211q0.49389-0.1905 1.0442-0.1905 0.45156 0 0.86783 0.127 0.41628 0.11994 0.74083 0.31044 0.33161 0.1905 0.52917 0.39511l-0.47272 0.61383q-0.34572-0.30339-0.76906-0.49389-0.42333-0.19756-0.9525-0.19756-0.35983 0-0.6985 0.11994t-0.61383 0.35278q-0.26811 0.22578-0.43039 0.55033-0.15522 0.32456-0.15522 0.73378 0 0.59267 0.28222 0.99483 0.28222 0.39511 0.74083 0.59972 0.46567 0.19756 0.98778 0.19756 0.381 0 0.68439-0.09878 0.30339-0.10583 0.54328-0.254t0.43039-0.29633z"}),f.createElement("path",{d:"m70.164 63.853 1.9826 2.6317 1.9826-2.6317h0.73378v4.9389h-0.762v-2.0743q0-0.45861 0.01411-0.86783 0.02117-0.40922 0.0635-0.81844l-1.8062 2.3424h-0.46567l-1.8062-2.3354q0.04939 0.40217 0.0635 0.81139t0.01411 0.86783v2.0743h-0.762v-4.9389z"}),f.createElement("path",{d:"m77.106 63.853h3.8241v0.73378h-3.0621v1.3053h2.6741v0.73378h-2.6741v1.4323h3.0621v0.73378h-3.8241z"}),f.createElement("path",{d:"m84.203 68.792v-4.2051h-1.7357v-0.73378h4.2827v0.73378h-1.7851v4.2051z"})),f.createElement("path",{transform:"rotate(32 15.881 -1.0183)",fillRule:"evenodd",d:"m11.03 3.2283a2.4814 2.526 7.3662e-7 0 0-0.30277 0.22149 1.9313 1.966 7.3662e-7 0 1 1.5991 1.936 1.9313 1.966 7.3662e-7 0 1-1.5988 1.9369 2.4814 2.526 7.3662e-7 0 0 1.5929 0.589 2.4814 2.526 7.3662e-7 0 0 2.4814-2.5255 2.4814 2.526 7.3662e-7 0 0-2.4815-2.526 2.4814 2.526 7.3662e-7 0 0-1.2903 0.36814zm-3.2345 2.2039c-0.18296 0.086815 0.49439 0.074836 3.0594 0.9212 0.46608 0.15383 0.88156-0.43345 0.88156-0.96766s-0.41546-1.1208-0.88154-0.96706l-2.9313 0.96698c-0.058262 0.019224-0.10199 0.034146-0.12813 0.046548z",fill:`url(#${t})`}))}function wo({category:e}){const{t:t}=k(),[n,r]=Qa((e=>[e.exploreCategory,e.setExploreCategory])),a=Eo(e);return f.createElement(el,{onClick:()=>r(e),active:n===e},f.createElement(a,{className:"w-5 h-5 mr-3"}),t(e?`category.${e}`:"explore.all"))}function No({sort:e,label:t,icon:n}){const[r,a]=Qa((e=>[e.exploreSort,e.setExploreSort])),l=n;return f.createElement(el,{onClick:()=>a(e),active:r===e},f.createElement(l,{className:"w-5 h-5 mr-3"}),t)}function ko(){const{t:e}=k(),t=g.exports.useMemo((()=>{let e=Object.keys(lr);const t=e.splice(e.indexOf(lr.Other),1);return e.push(...t),e}),[]);return f.createElement(Za,null,f.createElement("div",{className:"h-12 border-b dark:border-gray-850 shadow flex items-center px-5 text-base font-medium"},f.createElement(yo,{className:"h-4"})),f.createElement("div",{className:"px-1.5"},f.createElement(Vl,null,"Sort"),f.createElement("div",{className:"space-y-0.5"},f.createElement(No,{label:"Most Popular",sort:"Top",icon:L}),f.createElement(No,{label:"Recently Created",sort:"New",icon:O})),f.createElement(Vl,null,e("explore.categories")),f.createElement("div",{className:"space-y-0.5"},f.createElement(wo,{category:"Featured"}),f.createElement(wo,{category:null}),t.map((e=>f.createElement(wo,{key:e,category:e}))))))}function Co({server:e,shadow:t=!1,className:n=""}){var r;const{t:a}=k(),l=Eo(e.category);return Qa((e=>e.exploreCategory)),f.createElement(jl,{data:{type:kl,server:e,enableFeatured:!0}},f.createElement(b,{to:`/+${e.name}`,className:`${n} relative relative flex flex-col w-full rounded-lg group dark:bg-gray-800 dark:hover:bg-gray-850 duration-200 transform transition hover:shadow-xl ${t?"shadow-lg":""}`},f.createElement("div",{className:"h-32 rounded-t-lg w-full bg-cover bg-center bg-no-repeat relative bg-gradient-to-br from-red-400 to-indigo-600",style:(null==e?void 0:e.bannerUrl)?{backgroundImage:`url(${null==e?void 0:e.bannerUrl})`}:void 0},f.createElement("div",{className:"absolute left-4 -bottom-3"},f.createElement(ls,{size:10,server:e,className:"dark:bg-gray-750 rounded-xl ring-4 dark:ring-gray-800 transition dark:group-hover:ring-gray-850 group-hover:shadow-md"}))),f.createElement("div",{className:"flex flex-col flex-grow px-4 pt-5 pb-4 h-40"},f.createElement("div",{className:"text-lg font-semibold text-secondary"},null==e?void 0:e.displayName),f.createElement("div",{className:"text-13 text-tertiary line-clamp-3 pt-1"},(null==e?void 0:e.description)||"No description"),f.createElement("div",{className:"flex mt-auto text-xs"},f.createElement("div",{className:"inline-flex items-center"},f.createElement(T,{className:"w-4 h-4 text-tertiary"}),f.createElement("div",{className:"ml-2 text-tertiary"},a("server.memberCount",{count:null!=(r=null==e?void 0:e.userCount)?r:0}))),f.createElement("div",{className:"ml-auto inline-flex items-center"},f.createElement(l,{className:"w-4 h-4 text-tertiary"}),f.createElement("div",{className:"ml-2 text-tertiary"},e.category))))))}function $o({children:e}){return f.createElement("div",{className:"max-h-full h-full dark:bg-gray-750 px-6 py-4 scrollbar-custom overflow-y-auto"},e)}function Uo(){var e;const[t,n]=Qa((e=>[e.exploreCategory,e.exploreSort])),{data:r}=Ra({variables:{sort:n,category:t&&"Featured"!==t?t:null,featured:"Featured"===t},fetchPolicy:"cache-and-network"}),a=null!=(e=null==r?void 0:r.publicServers)?e:[];return f.createElement(zs,{leftSidebar:f.createElement(ko,null)},f.createElement(Be,null,f.createElement("title",null,"Explore Planets – Comet")),f.createElement($o,null,f.createElement("div",{className:"px-8 py-8"},f.createElement("div",{className:"grid grid-cols-1 gap-4 lg:grid-cols-3 2xl:grid-cols-5"},a.map((e=>f.createElement(Co,{server:e,key:e.id})))),!a.length&&f.createElement(Ya,null,"Nothing here yet!"))))}function Io(){return f.createElement(Kl,{icon:f.createElement(lt,{className:"h-5 w-5"}),title:"Inbox",showDivider:!0},f.createElement("div",{className:"flex items-center space-x-4"},f.createElement(So,{page:"Unread"}),f.createElement(So,{page:"All"})))}function So({page:e}){const[t,n]=Qa((e=>[e.inboxPage,e.setInboxPage]));return f.createElement(Xl,{page:e,currentPage:t,setCurrentPage:n})}function Po(e){return st(e).calendar()}function Fo(e){return st(e).format("h:mm A")}function Mo({reply:e}){const{comment:n}=e,{parentComment:r,post:a}=n,[l]=function(e){const n={...On,...e};return t(aa,n)}({optimisticResponse:{markReplyRead:{...e,isRead:!0}}}),[s]=function(e){const n={...On,...e};return t(la,n)}({optimisticResponse:{markReplyUnread:{...e,isRead:!1}}});return f.createElement(b,{to:`${a.relativeUrl}#${n.id}`,className:"block dark:bg-gray-800 dark:hover:bg-gray-825 rounded p-3 cursor-pointer relative"},f.createElement("div",{className:"flex"},f.createElement("div",{className:"text-13 hover:underline font-medium text-tertiary pr-5 leading-5"},a.title),f.createElement("div",{className:"flex items-center ml-auto h-5"},f.createElement("div",{className:"text-mid text-13 font-medium mr-2 leading-5"},a.server.name),f.createElement(ls,{server:a.server,size:5,className:"rounded-full"}))),r?f.createElement("div",null,f.createElement(Ro,{comment:r}),f.createElement("div",{className:"ml-7 mt-2 border-t dark:border-gray-750"},f.createElement(Ro,{comment:n}))):f.createElement(Ro,{comment:n}),f.createElement("div",{className:"flex items-center pt-3 border-t dark:border-gray-750 mt-2"},f.createElement("div",{className:"flex items-center highlightable",onClick:t=>{t.stopPropagation(),t.preventDefault(),e.isRead?s({variables:{input:{replyId:e.id}}}):l({variables:{input:{replyId:e.id}}})}},f.createElement(ct,{className:"h-5 w-5"}),f.createElement("div",{className:"ml-2 text-xs font-medium"},e.isRead?"Mark Unread":"Mark Read"))))}function Ro({comment:e}){var t,n,r,a,l,s,o,i;return f.createElement("div",{className:"flex space-x-3 pt-3"},f.createElement("div",{onClick:e=>{e.stopPropagation(),e.preventDefault()}},f.createElement(jl,{data:{type:xl,user:e.author}},f.createElement(ds,{user:e.author,role:null==(t=e.serverUser)?void 0:t.role},f.createElement(ms,{user:e.author,size:7})))),f.createElement("div",null,f.createElement("div",{className:"flex items-end pb-1.5"},f.createElement("div",{onClick:e=>{e.stopPropagation(),e.preventDefault()}},f.createElement(jl,{data:{type:xl,user:e.author}},f.createElement(ds,{user:e.author,role:null==(n=e.serverUser)?void 0:n.role},f.createElement("div",{className:"text-sm font-medium cursor-pointer hover:underline leading-none "+((null==(a=null==(r=e.serverUser)?void 0:r.role)?void 0:a.color)?"":"text-primary"),style:{color:null==(s=null==(l=e.serverUser)?void 0:l.role)?void 0:s.color}},null!=(i=null==(o=e.author)?void 0:o.username)?i:"[deleted]")))),f.createElement("div",{className:"text-11 text-mid font-medium pl-2 leading-none"},Po(e.createdAt))),f.createElement("div",{className:"prose prose-sm dark:prose-dark",dangerouslySetInnerHTML:{__html:e.text}})))}st.extend(ot),st.extend(it);const Ao="px-2 pb-2 text-11 text-tertiary uppercase tracking-widest font-semibold";function Do(){var e;const t=Qa((e=>e.inboxPage));Os("inbox");const[n]=Va(),{data:r}=Da({skip:!n,fetchPolicy:"cache-and-network"}),a=(null!=(e=null==r?void 0:r.replies)?e:[]).filter((e=>"Unread"!==t||!e.isRead));return f.createElement(zs,{header:f.createElement(Io,null)},f.createElement(Be,null,f.createElement("title",null,`(${a.length}) Inbox – Comet`)),f.createElement($o,null,"Unread"===t&&f.createElement(f.Fragment,null,f.createElement("div",{className:Ao},"Unread - ",a.length)),"All"===t&&f.createElement(f.Fragment,null,f.createElement("div",{className:Ao},"All - ",a.length)),0===a.length&&f.createElement(Ya,null,"You are all caught up!"),f.createElement("div",{className:"space-y-1.5"},a.map((e=>f.createElement(Mo,{reply:e,key:e.id}))))))}function To({user:e}){var t;return f.createElement(Kl,{icon:f.createElement(mt,{className:"w-5 h-5"}),title:f.createElement(f.Fragment,null,null!=(t=null==e?void 0:e.username)?t:"",f.createElement("div",{className:"w-2.5 h-2.5 ml-3 rounded-full "+((null==e?void 0:e.isOnline)?"bg-green-500":"bg-gray-600")}))})}const Lo=["application/vnd.rar","application/x-tar","application/zip","application/x-7z-compressed","application/java-archive","application/x-bzip","application/x-bzip2","application/gzip","application/x-freearc"],Oo=["application/msword","application/vnd.openxmlformats-officedocument.wordprocessingml.document","application/x-abiword","application/rtf","application/vnd.oasis.opendocument.text"],zo=["application/xhtml+xml","application/xml","text/xml","application/json","application/ld+json","text/css","application/x-csh","text/html","text/javascript","application/x-httpd-php","application/x-sh","application/vnd.mozilla.xul+xml"],_o=["application/vnd.ms-excel","application/vnd.openxmlformats-officedocument.spreadsheetml.sheet","application/vnd.oasis.opendocument.spreadsheet"],qo=["application/vnd.ms-powerpoint","application/vnd.openxmlformats-officedocument.presentationml.presentation","application/vnd.oasis.opendocument.presentation"],Ho=e=>g.exports.useMemo((()=>e?e.startsWith("audio")?dt:e.startsWith("image")?ut:e.startsWith("video")?pt:"text/csv"===e?gt:"application/pdf"===e?vt:Oo.includes(e)?ht:_o.includes(e)?ft:qo.includes(e)?bt:Lo.includes(e)?Et:zo.includes(e)?xt:yt:null),[e]);function Bo({user:e,channel:t,group:n}){return f.createElement("div",{className:"px-4 py-5.5 flex items-end"},f.createElement("div",null,!!e&&f.createElement(f.Fragment,null,f.createElement(ms,{user:e,size:20}),f.createElement("div",{className:"text-3xl font-semibold pt-4 text-primary"},e.username),f.createElement("div",{className:"pt-2 text-tertiary select-none text-base"},"This is the beginning of your direct message history with"," ",f.createElement("span",{className:"font-semibold"},"@",e.username))),!!t&&f.createElement(f.Fragment,null,f.createElement("div",{className:"rounded-full flex items-center justify-center w-20 h-20 dark:bg-gray-700"},f.createElement(ll,{className:"w-2/3 h-2/3 text-primary"})),f.createElement("div",{className:"text-3xl font-semibold pt-4 text-primary"},"Welcome to #",t.name,"!"),f.createElement("div",{className:"pt-2 text-tertiary select-none text-base"},"This is the start of the #",t.name," channel.")),!!n&&f.createElement(f.Fragment,null,f.createElement("div",{className:"rounded-full flex items-center justify-center w-20 h-20 dark:bg-gray-700"},f.createElement(T,{className:"w-2/3 h-2/3 text-primary"})),f.createElement("div",{className:"text-3xl font-semibold pt-4 text-primary"},n.name),f.createElement("div",{className:"pt-2 text-tertiary select-none text-base"},"Welcome to the beginning of the"," ",f.createElement("span",{className:"font-semibold"},n.displayName)," group."))))}var jo=g.exports.memo((function({index:e,message:t,prevMessage:n,server:r,channel:a,group:l,user:s}){var o,i,c,m,d,u,p,v,h;const[b]=Va(),E=t.isEveryoneMentioned||t.mentionedUsers.map((e=>e.id)).includes(null==b?void 0:b.id),x=Ho(null==(o=null==t?void 0:t.file)?void 0:o.mime),y=g.exports.useCallback((e=>{var t,n;const r=null==(n=null==(t=e.target)?void 0:t.dataset)?void 0:n.mention;r&&r.substring(2,r.length-1)}),[t]),w=0===e||n&&(!n.text||n.author.id!==t.author.id);return t.type===Yn.Initial?f.createElement(Bo,{channel:a,group:l,user:s}):t.type===Yn.Join?f.createElement(jl,{className:(null==n?void 0:n.text)?"pt-4":"",data:{type:Nl,message:t}},f.createElement("div",{className:"flex dark:hover:bg-gray-775 py-1 px-4"},f.createElement("div",{className:"w-10 flex justify-center"},f.createElement(wt,{className:"w-5 h-5 text-green-500"})),f.createElement("div",{className:"pl-4 text-base text-tertiary flex items-center"},f.createElement(jl,{className:"inline-block",data:{type:xl,user:t.author}},f.createElement(ds,{user:t.author,role:null==(i=t.serverUser)?void 0:i.role},f.createElement(ms,{user:t.author,size:5}))),f.createElement(jl,{className:"inline-block",data:{type:xl,user:t.author}},f.createElement(ds,{user:t.author,role:null==(c=t.serverUser)?void 0:c.role},f.createElement("span",{className:"ml-2 text-white cursor-pointer hover:underline"},t.author.username)))," has joined the ",t.serverUser?"planet":"group",f.createElement("span",{className:"pl-2 text-11 whitespace-nowrap text-mid cursor-default leading-5 select-none"},Fo(t.createdAt))))):t.type===Yn.Normal?f.createElement("div",{className:""+(w?"pt-4":"")},f.createElement(jl,{data:{type:Nl,message:t,server:r}},f.createElement("div",{className:"flex py-1 pl-4 pr-18 dark:hover:bg-gray-775 group relative"},E&&f.createElement("div",{className:"bg-gray-500 group-hover:bg-opacity-30 bg-opacity-10 absolute inset-0 pointer-events-none border-l-2 border-gray-500"}),w?f.createElement(jl,{data:{type:xl,user:t.author}},f.createElement(ds,{user:t.author,role:null==(m=t.serverUser)?void 0:m.role},f.createElement(ms,{user:t.author,size:10,className:"dark:bg-gray-700 cursor-pointer"}))):f.createElement("div",{className:"w-10 text-11 whitespace-nowrap text-mid group-hover:opacity-100 opacity-0 cursor-default select-none leading-6.5"},Fo(t.createdAt)),f.createElement("div",{className:"pl-4 w-full"},w&&f.createElement("div",{className:"flex items-end pb-0.5"},f.createElement(jl,{data:{type:xl,user:t.author,server:r,role:null==(d=t.serverUser)?void 0:d.role}},f.createElement(ds,{user:t.author,role:null==(u=t.serverUser)?void 0:u.role},f.createElement("div",{className:"text-base font-medium cursor-pointer hover:underline leading-none",style:{color:null==(v=null==(p=t.serverUser)?void 0:p.role)?void 0:v.color}},t.author.username))),f.createElement("div",{className:"text-11 text-mid pl-2 leading-none cursor-default select-none"},Po(t.createdAt))),!!t.text&&f.createElement("div",{onClick:y,className:"prose prose-sm dark:prose-dark focus:outline-none max-w-none",dangerouslySetInnerHTML:{__html:t.text}}),!!(null==(h=t.linkMetadatas)?void 0:h.length)&&f.createElement("div",{className:"space-y-1 pt-1"},t.linkMetadatas.map(((e,t)=>f.createElement(Ds,{key:t,metadata:e,linkUrl:e.url})))),t.images.map(((e,t)=>f.createElement("div",{key:t,className:"pt-1"},f.createElement(As,{image:e})))),!!t.file&&f.createElement("div",{className:"pt-1 max-w-screen-sm w-full"},f.createElement("div",{className:"flex border dark:border-gray-850 dark:bg-gray-800 p-3 rounded w-full items-center"},f.createElement(x,{className:"w-8 h-8 dark:text-white"}),f.createElement("div",{className:"pl-3"},f.createElement("a",{href:t.file.url,target:"_blank",rel:"noreferrer noopener",className:"block text-base text-accent hover:underline cursor-pointer truncate"},t.file.filename),f.createElement("div",{className:"text-mid text-xs"},function(e,t=2){if(0===e)return"0 Bytes";const n=t<0?0:t,r=Math.floor(Math.log(e)/Math.log(1024));return parseFloat((e/Math.pow(1024,r)).toFixed(n))+" "+["Bytes","KB","MB","GB","TB","PB","EB","ZB","YB"][r]}(t.file.size))),f.createElement("a",{className:"block ml-auto",href:t.file.url,target:"_blank",rel:"noreferrer noopener"},f.createElement(Nt,{className:"h-6 w-6 highlightable"})))))))):null}));const Go=({channelId:e,groupId:t,userId:r})=>{const a={channelId:e,groupId:t,userId:r},{data:l,fetchMore:s,loading:o}=function(e){const t={...On,...e};return n(Sa,t)}({variables:{...a,cursor:null},fetchPolicy:"cache-and-network",nextFetchPolicy:"cache-first"}),i=null==l?void 0:l.messages.hasMore,c=null==l?void 0:l.messages.messages;return[c,o,()=>{c&&i&&0!==c.length&&s({variables:{...a,cursor:c[0].id},updateQuery:(e,{fetchMoreResult:t})=>({messages:{hasMore:t.messages.hasMore,messages:[...t.messages.messages,...e.messages.messages]}})})},i]},Vo=e=>y(`\n  ${e?"scale-100":"scale-0"}\n  transform\n  transition\n  bg-gradient-to-br\n  from-red-400\n  to-indigo-600\n  rounded-xl\n  p-3\n  max-w-sm\n  w-full\n  relative\n`);function Yo({channel:e,user:t,group:n,setFiles:r}){const[a,l]=(()=>{const[e,t]=g.exports.useState(null),[n,r]=g.exports.useState(!1),a=g.exports.useRef(0),l=g.exports.useCallback((e=>{e.preventDefault(),e.stopPropagation()}),[]),s=g.exports.useCallback((e=>{e.preventDefault(),e.stopPropagation(),a.current++,e.dataTransfer.items&&e.dataTransfer.items.length>0&&r(!0)}),[]),o=g.exports.useCallback((e=>{e.preventDefault(),e.stopPropagation(),a.current--,a.current>0||r(!1)}),[]),i=g.exports.useCallback((e=>{e.preventDefault(),e.stopPropagation(),r(!1),e.dataTransfer.files&&e.dataTransfer.files.length>0&&(a.current=0,t(e.dataTransfer.files),e.dataTransfer.clearData())}),[]);return g.exports.useEffect((()=>(window.addEventListener("dragenter",s),window.addEventListener("dragleave",o),window.addEventListener("dragover",l),window.addEventListener("drop",i),function(){window.removeEventListener("dragenter",s),window.removeEventListener("dragleave",o),window.removeEventListener("dragover",l),window.removeEventListener("drop",i)}))),[e,n]})();g.exports.useEffect((()=>r(a)),[a,r]);const s=g.exports.useMemo((()=>e?`#${e.name}`:t?`@${t.username}`:n?`${n.displayName}`:void 0),[e,t,n]);return f.createElement(f.Fragment,null,f.createElement("div",{className:(o=l,y(`\n  fixed\n  inset-0\n  transition-all\n  bg-black\n  ${o?"visible bg-opacity-75":"invisible bg-opacity-0"}\n  flex\n  items-center\n  justify-center\n`)),style:{zIndex:999999}},f.createElement("div",{className:Vo(l)},f.createElement("div",{className:"flex absolute left-1/2 transform top-0 -translate-x-1/2 -translate-y-1/2 transition delay-75 "+(l?"scale-100":"scale-0")},f.createElement("div",{className:"relative transform translate-x-6 translate-y-3 -rotate-12"},f.createElement("div",{className:"absolute left-5 top-9 w-14 h-14 bg-red-400",style:{zIndex:-1}}),f.createElement(xt,{className:"w-24 h-24"})),f.createElement("div",{className:"relative"},f.createElement("div",{className:"absolute left-5 top-9 w-14 h-14 bg-red-400",style:{zIndex:-1}}),f.createElement(pt,{className:"w-24 h-24 "})),f.createElement("div",{className:"relative transform -translate-x-6 translate-y-3 rotate-12"},f.createElement("div",{className:"absolute left-5 top-8 w-14 h-14 bg-red-400",style:{zIndex:-1}}),f.createElement(ut,{className:"w-24 h-24"}))),f.createElement("div",{className:"rounded-xl border-dashed border-white border-2 px-4 pb-4 pt-16 text-center"},f.createElement("div",{className:"text-xl font-bold text-primary"},"Upload to ",f.createElement("span",{className:"text-white"},s))))));var o}const Wo=e=>new Promise(((t,n)=>{const r=new FileReader;r.onload=e=>t(e.target.result),r.onerror=e=>n(e),r.readAsDataURL(e)})),Zo=y("\n  text-sm\n  text-primary\n  h-10\n  px-7\n  hover:underline\n  focus:outline-none\n  select-none\n  disabled:opacity-50\n  disabled:no-underline\n  disabled:cursor-not-allowed\n"),Qo=y("\n  text-sm\n  text-primary\n  transition\n  bg-blue-500\n  hover:bg-blue-600\n  flex\n  items-center\n  justify-center\n  rounded\n  px-7\n  h-10\n  focus:outline-none\n  select-none\n  disabled:opacity-50\n  disabled:cursor-not-allowed\n");function Jo({createMessage:e,variables:t,file:n,setFileIndex:r,placeholder:a,multiple:l,cancelAll:s}){var o;const[i,c]=g.exports.useState(""),m=(e=>{const[t,n]=g.exports.useState(null);return g.exports.useEffect((()=>{e&&(e.type.startsWith("image")?Wo(e).then((e=>n(e))).catch((()=>n(null))):n(null))}),[e]),t})(n),[d,u]=g.exports.useState(!1),p=g.exports.useCallback((()=>{d||r((e=>e+1))}),[r,d]),v=g.exports.useCallback((()=>{u(!0),e({variables:{input:{text:i||null,file:n,...t}}}).then((()=>{u(!1),p()}))}),[p,i,n,t,e]);g.exports.useEffect((()=>c("")),[n]);const h=g.exports.useCallback((e=>{"Enter"===e.key&&n&&v()}),[v,n]);g.exports.useEffect((()=>(document.body.addEventListener("keydown",h),()=>{document.body.removeEventListener("keydown",h)})),[h]);const b=Ho(null==n?void 0:n.type);return f.createElement(Yl,{close:p,isOpen:!!n},f.createElement("div",{className:"text-left relative w-full rounded-xl dark:bg-gray-750 max-w-lg mx-auto"},f.createElement("div",{className:"absolute left-5 -top-20 flex w-46 h-40"},m&&f.createElement("img",{alt:"",src:m,className:"absolute max-w-full max-h-full bottom-0 left-0 rounded shadow-md object-cover"}),!m&&b&&f.createElement(b,{className:"h-full w-full text-white absolute bottom-0 left-0 transform -translate-x-8"})),f.createElement("div",{className:"px-5 pt-24 pb-5"},f.createElement(Wl,{className:"truncate text-left text-xl text-primary font-semibold select-none"},null!=(o=null==n?void 0:n.name)?o:""),f.createElement("div",{className:"text-tertiary text-13 pb-5 pt-0.5 select-none"},"Upload to"," ",f.createElement("span",{className:"font-medium text-secondary"},a)),f.createElement("label",{htmlFor:"comment",className:"block uppercase text-xs font-medium text-secondary pb-1.5"},"Add a Comment ",f.createElement("span",{className:"text-tertiary"},"(Optional)")),f.createElement("input",{className:"h-10 rounded-lg dark:bg-gray-700 w-full focus:outline-none px-4 text-secondary text-base",id:"comment",value:i,onChange:e=>{const t=e.target.value;c(t)}})),f.createElement("div",{className:"flex p-4 dark:bg-gray-775 rounded-b-xl"},f.createElement("div",{className:"ml-auto"}),l&&f.createElement("button",{className:Zo,onClick:()=>{s()},disabled:d},"Cancel All"),f.createElement("button",{className:Zo,onClick:p,disabled:d},"Cancel"),f.createElement("button",{className:Qo,disabled:!n||d,onClick:v},"Upload",d&&f.createElement("div",{className:"ml-3"},f.createElement(al,null))))))}const Ko=({channel:e,group:n,user:a,users:l})=>{k();const[s]=Va(),[o,i]=g.exports.useState([]),[c]=function(e){const n={...On,...e};return t(Yr,n)}(),m={userId:null==a?void 0:a.id,groupId:null==n?void 0:n.id,channelId:null==e?void 0:e.id};!function(e){const t={...On,...e};r(qa,t)}({variables:m,skip:!e&&!n&&!a,onSubscriptionData({subscriptionData:{data:{typingUpdated:{typingUserId:e,isTyping:t}}}}){if(t){const t=o.find((t=>t.id===e));if(t){const e=o.indexOf(t),n=[...o];n[e]={id:t.id,time:(new Date).getTime()},i(n)}else i([...o,{id:e,time:(new Date).getTime()}])}else i(o.filter((({id:t})=>t!==e)))}});const[d,u]=g.exports.useState(0);g.exports.useEffect((()=>{const e=setInterval((()=>{u(d+1)}),1e3);return()=>clearInterval(e)}),[d,u]);return[()=>c({variables:{input:m}}),o.filter((({id:e,time:t})=>(!s||e!==s.id)&&(new Date).getTime()-t<=1500)).map((({id:e})=>{var t;return null==(t=l.find((t=>t.id===e)))?void 0:t.username})).filter((e=>!!e))]},Xo=kt.create({name:"mention",defaultOptions:{HTMLAttributes:{},suggestion:{char:"@",command:({editor:e,range:t,props:n})=>{e.chain().focus().insertContentAt(t,[{type:"mention",attrs:n},{type:"text",text:" "}]).run()},allow:({editor:e,range:t})=>e.can().insertContentAt(t,{type:"mention"})}},group:"inline",inline:!0,selectable:!1,atom:!0,addAttributes:()=>({id:{default:null,parseHTML:e=>({id:e.getAttribute("data-mention")}),renderHTML:e=>e.id?{"data-mention":e.id}:{}},name:{default:null,parseHTML:e=>({name:e.getAttribute("data-mention")}),renderHTML:()=>({})}}),parseHTML:()=>[{tag:"span[data-mention]"}],renderHTML({node:e,HTMLAttributes:t}){return["span",ve(this.options.HTMLAttributes,t),`${this.options.suggestion.char}${e.attrs.name}`]},renderText({node:e}){return`${this.options.suggestion.char}${e.attrs.name}`},addKeyboardShortcuts(){return{Backspace:()=>this.editor.commands.command((({tr:e,state:t})=>{let n=!1;const{selection:r}=t,{empty:a,anchor:l}=r;return!!a&&(t.doc.nodesBetween(l-1,l,((t,r)=>{if("mention"===t.type.name)return n=!0,e.insertText(this.options.suggestion.char||"",r,r+t.nodeSize),!1})),n)}))}},addProseMirrorPlugins(){return[Ct({editor:this.editor,...this.options.suggestion})]}});class ei extends g.exports.Component{constructor(e){super(e),this.state={selectedIndex:0}}componentDidUpdate(e){this.props.users!==e.users&&this.setState({selectedIndex:0})}onKeyDown({event:e}){return"ArrowUp"===e.key?(this.upHandler(),!0):"ArrowDown"===e.key?(this.downHandler(),!0):"Enter"===e.key&&(e.stopPropagation(),this.enterHandler(),!0)}upHandler(){this.setState({selectedIndex:(this.state.selectedIndex+this.props.users.length-1)%this.props.users.length})}downHandler(){this.setState({selectedIndex:(this.state.selectedIndex+1)%this.props.users.length})}enterHandler(){this.selectItem(this.state.selectedIndex)}selectItem(e){const t=this.props.users[e];t&&this.props.command("string"==typeof t?{id:`<${t}>`,name:t.substring(1)}:{id:`<@${t.id}>`,name:t.username})}render(){return f.createElement("div",{className:"relative w-full w-72 rounded dark:bg-gray-800 text-primary overflow-hidden text-sm shadow-md"},this.props.users.filter((e=>("string"==typeof e?e.substring(1):e.username).toLowerCase().startsWith(this.props.query.toLowerCase()))).slice(0,5).map(((e,t)=>f.createElement("button",{className:"block w-full text-left bg-transparent border-none px-2 py-2 dark:hover:bg-gray-775 focus:outline-none "+(t===this.state.selectedIndex?"dark:bg-gray-775":""),key:"string"==typeof e?e:e.id,onClick:()=>this.selectItem(t)},"string"==typeof e?e:e.username))))}}const ti="_typing__dot_1o677_5";function ni(){return f.createElement("div",{className:"_typing_1o677_1"},f.createElement("div",{className:ti}),f.createElement("div",{className:ti}),f.createElement("div",{className:ti}))}function ri({channel:e,server:t,group:n,user:r,users:a}){const{t:l}=k(),[s]=Va(),o=!!r&&r.relationshipStatus===rr.Blocked,i=!!r&&r.relationshipStatus===rr.Blocking,[c,m,d]=sl({server:t,permissions:[or.SendMessages,or.RestrictedChannels,or.PrivateChannels]}),u=!!e&&c&&(e.type===zn.Public||e.type===zn.Restricted&&m||e.type===zn.Private&&d),p=!!s&&(!!r&&(!!r&&!o&&!i)||!!e&&u||!!n),v=g.exports.useMemo((()=>s?e?u?`Message #${e.name}`:"You do not have permission to send messages in this channel":n?`Message ${n.name}`:r?o?"This user has blocked you":i?"You are blocking this user":`Message @${r.username}`:"":"Must log in to send messages"),[s,e,n,r,u,o,i]),h={autofocus:!0,extensions:[fe.configure({horizontalRule:!1,bulletList:!1,orderedList:!1,listItem:!1,heading:!1}),Bs,$t.configure({placeholder:`${v}`,showOnlyWhenEditable:!1}),Ut.create({addKeyboardShortcuts:()=>({Enter:({editor:e})=>{let t=e.getHTML();if(!(0===e.state.doc.textContent.length)){const n=/^<p>|<\/p>$/gi,r=/^\s*(?:<br\s*\/?\s*>)+|(?:<br\s*\/?\s*>)+\s*$/gi;t=t.replace(n,""),t=t.replace(r,""),P({variables:{input:{text:t,...M}}}),e.commands.clearContent()}return!0}})}),Xo.configure({suggestion:{allowSpaces:!1,render:()=>{let e,t;return{onStart:n=>{e=new It(ei,{props:{...n,users:["@everyone"].concat(a)},editor:n.editor}),t=St("body",{getReferenceClientRect:n.clientRect,appendTo:()=>document.body,content:e.element,showOnCreate:!0,interactive:!0,trigger:"manual",placement:"bottom-start",render(e){const t=document.createElement("div"),n=document.createElement("div");return t.appendChild(n),n.innerHTML="",n.appendChild(e.props.content),{popper:t,onUpdate:function(e,t){e.content!==t.content&&(n.innerHTML="",n.appendChild(t.content))}}}})},onUpdate(n){e.updateProps(n),t[0].setProps({getReferenceClientRect:n.clientRect})},onKeyDown(t){var n;return null==(n=e.ref)?void 0:n.onKeyDown(t)},onExit(){t[0].destroy(),e.destroy()}}}}})],content:"",editorProps:{attributes:{class:"prose prose-sm dark:prose-dark focus:outline-none max-w-none"}},editable:p},[b,E]=g.exports.useState(null),x=function(){const[,e]=g.exports.useState(0);return()=>e((e=>e+1))}();g.exports.useEffect((()=>{b&&b.destroy();const e=new Pt(h);return E(e),e.on("transaction",x),()=>{e.destroy()}}),[p,v]);const[y,w]=Ko({channel:e,group:n,user:r,users:a}),[N,C]=g.exports.useState(null),[$,U]=g.exports.useState(null),[I,S]=g.exports.useState(0),[P]=qr({update(t,{data:{createMessage:a}}){const l=null==e?void 0:e.id,s=null==n?void 0:n.id,o=null==r?void 0:r.id,i={query:Sa,variables:{userId:o,groupId:s,channelId:l,cursor:null}},c=t.readQuery(i);c&&!c.messages.messages.map((e=>e.id)).includes(a.id)&&t.writeQuery({...i,data:{messages:{...c.messages,messages:[...c.messages.messages,a]}}})}}),M={channelId:null==e?void 0:e.id,groupId:null==n?void 0:n.id,userId:null==r?void 0:r.id},R=Ql(),A=/https?:\/\/(?:www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z]{2,}\b(?:[-a-zA-Z0-9@:%._+~#=?!&/]*)(?:[-a-zA-Z0-9@:%._+~#=?!&/]*)/i,D=g.exports.useCallback((e=>{var t;if(!p)return;const n=e.clipboardData.files;if(e.preventDefault(),n&&n.length>0)C(n);else{const n=null==(t=e.clipboardData)?void 0:t.getData("text/plain");n&&(A.test(n)?null==b||b.commands.insertContent(`<a href="${n}" target="_blank" rel="noopener noreferrer nofollow">${n}</a>`):null==b||b.commands.insertContent(n),null==b||b.commands.focus())}}),[b]);g.exports.useEffect((()=>(document.body.addEventListener("paste",D),()=>{document.body.removeEventListener("paste",D)})),[D]);const[T,L]=g.exports.useState(null),O=g.exports.useCallback((e=>{if(!p)return;const t=(new Date).getTime();T?t-T>500&&(y(),L(t)):L(t),null==b||b.commands.focus()}),[b]);g.exports.useEffect((()=>(document.body.addEventListener("keypress",O),()=>{document.body.removeEventListener("keypress",O)})),[D]),g.exports.useEffect((()=>{N&&(U(N[0]),S(0))}),[N]),g.exports.useEffect((()=>{if(!N)return;let e;return I>=N.length?(C(null),U(null),S(0)):(U(null),e=setTimeout((()=>U(N[I])),300)),()=>{e&&clearTimeout(e)}}),[I]);const z=g.exports.useCallback((()=>{C(null),U(null),S(0)}),[C,U,S]);return f.createElement(f.Fragment,null,!!s&&f.createElement(f.Fragment,null,f.createElement(Yo,{placeholder:v,setFiles:C}),f.createElement(Jo,{createMessage:P,variables:M,file:$,setFileIndex:S,placeholder:v,multiple:N&&N.length>1,cancelAll:z})),f.createElement("div",{className:"px-4 dark:bg-gray-750 relative"},f.createElement("div",{className:"relative"},p&&f.createElement(F,{content:l("message.upload")},f.createElement("div",{className:"block absolute left-4.5 top-1/2 transform -translate-y-1/2"},f.createElement("input",{className:"hidden",id:"file",name:"file",type:"file",onChange:e=>C(e.target.files),multiple:!0}),f.createElement("label",{htmlFor:"file",className:"text-tertiary highlightable"},f.createElement(Ft,{className:"w-5 h-5"})))),f.createElement("div",{onClick:()=>{s||R()},className:`${p?"px-14":"px-4 opacity-50"} ${s?"":"cursor-pointer"} min-h-[3rem] max-h-[20rem] overflow-y-auto scrollbar-light dark:bg-gray-700 py-3 w-full  rounded-lg text-base focus:outline-none text-secondary border-none`},!(null==b?void 0:b.isDestroyed)&&f.createElement(Ee,{editor:b}))),f.createElement("div",{className:"h-6 flex items-center text-secondary text-13 font-medium"},w.length>0&&f.createElement(ni,null),1===w.length&&f.createElement(f.Fragment,null,f.createElement("span",{className:"font-bold text-primary"},w[0])," is typing..."),2===w.length&&f.createElement(f.Fragment,null,f.createElement("span",{className:"font-bold text-primary"},w[0])," and ",f.createElement("span",{className:"font-bold text-primary"},w[1])," are typing..."),3===w.length&&f.createElement(f.Fragment,null,f.createElement("span",{className:"font-bold text-primary"},w[0]),", ",f.createElement("span",{className:"font-bold text-primary"},w[1]),", and ",f.createElement("span",{className:"font-bold text-primary"},w[2])," are typing..."),w.length>3&&f.createElement(f.Fragment,null,"Several people are typing..."))))}function ai({channel:e,server:n,user:r,group:a,users:l}){const s=g.exports.useRef(null),[o,i,c,m]=Go({channelId:null==e?void 0:e.id,userId:null==r?void 0:r.id,group:null==a?void 0:a.id}),[d,u]=g.exports.useState((null==o?void 0:o.length)||0);g.exports.useEffect((()=>{var e;u((null==o?void 0:o.length)||0),null==(e=null==s?void 0:s.current)||e.scrollToIndex(d+1e7)}),[e,r,a,s]);const{atBottom:p,newMessagesNotification:v,setNewMessagesNotification:h}=function(e){const[t]=Va(),[n,r]=g.exports.useState(!1),a=g.exports.useRef(""),l=g.exports.useRef(!1);return g.exports.useEffect((()=>{var n;if(!(null==e?void 0:e.length))return;const s=e[e.length-1],o=a.current;a.current=s.id||"",s.id!==o&&(l.current||t&&(null==(n=s.author)?void 0:n.id)!==t.id&&r(!0))}),[t,e]),{atBottom:l,newMessagesNotification:n,setNewMessagesNotification:r}}(o),b=function(e){var t;const n=null==(t=null==e?void 0:e[0])?void 0:t.id,r=g.exports.useRef(n),a=g.exports.useRef(n),l=g.exports.useRef(0);return g.exports.useMemo((()=>{if(!e||!e.length)return 0;if(n===a.current)return l.current;r.current||(r.current=n),a.current=n;for(let t=l.current;t<e.length;t+=1)if(e[t].id===r.current)return l.current=t,t;return 0}),[e,null==e?void 0:e.length])}(o),E=function(e){const[t]=Va(),n=g.exports.useRef(""),r=g.exports.useRef(!1);function a(){var r;if(e&&e.length>0){const a=e[e.length-1];if((null==(r=a.author)?void 0:r.id)===(null==t?void 0:t.id)&&n.current!==a.id)return n.current=a.id,!0}return!1}return g.exports.useEffect((()=>{e&&e.length&&!r.current&&(r.current=!0,a())}),[e,null==e?void 0:e.length]),a}(o),x=g.exports.useCallback(((t,l)=>{const s=l+b-1e7,o=t[s],i=s>0?t[s-1]:null;return o?f.createElement(jo,{server:n,channel:e,group:a,user:r,message:o,index:s,prevMessage:i}):f.createElement("div",{style:{height:"1px"}})}),[b,n,e,a,r]),[y]=function(e){const n={...On,...e};return t(Sr,n)}(),[w]=function(e){const n={...On,...e};return t(zr,n)}(),[N]=ea();return g.exports.useEffect((()=>{(null==o?void 0:o.length)&&(e?y({variables:{input:{channelId:e.id}},optimisticResponse:{readChannel:{...e,isUnread:!1}}}):a?w({variables:{input:{groupId:a.id}},optimisticResponse:{readGroup:{...a,unreadCount:0}}}):r&&N({variables:{input:{userId:r.id}},optimisticResponse:{readDm:{...r,unreadCount:0}}}))}),[null==e?void 0:e.id,null==a?void 0:a.id,null==r?void 0:r.id,null==o?void 0:o.length]),f.createElement(f.Fragment,null,f.createElement("div",{className:"relative flex-1 overflow-x-hidden overflow-y-auto dark:bg-gray-750 w-full h-full"},!!o&&f.createElement(oe,{className:"scrollbar-custom",alignToBottom:!0,atBottomStateChange:e=>{p.current=e,e&&v&&h(!1)},components:{Footer:()=>f.createElement("div",{className:"h-5.5"})},firstItemIndex:1e7-b,followOutput:e=>(E()||!!e)&&"auto",initialTopMostItemIndex:o.length>0?o.length-1:0,itemContent:e=>x(o,e),overscan:0,ref:s,startReached:()=>{!i&&m&&c()},style:{overflowX:"hidden"},totalCount:o.length||0})),!!l&&(!!e||!!r||!!a)&&f.createElement(ri,{server:n,channel:e,user:r,group:a,users:l}))}function li({username:e}){const{data:n}=za({variables:{username:e},fetchPolicy:"cache-and-network",nextFetchPolicy:"cache-first"}),[r]=function(e){const n={...On,...e};return t(ta,n)}(),a=null==n?void 0:n.user;g.exports.useEffect((()=>{a&&(a.showChat||r({variables:{input:{userId:a.id}}}))}),[a]),Os(`dm/@${e}`);const[l]=Va();return f.createElement(zs,{header:f.createElement(To,{user:a})},!!a&&f.createElement(ai,{user:a,users:[a,l]}))}const si=e=>{const{server:t}=Mt(),n=Qa((e=>e.setServerPage));g.exports.useEffect((()=>n(t,e)))};function oi({user:e,role:t,server:n}){return f.createElement(jl,{data:{type:xl,user:e,server:n,role:t}},f.createElement(ds,{user:e,role:t,placement:"left"},f.createElement(el,{small:!0},f.createElement(ms,{user:e,size:6,showOnline:!0,dotClassName:"w-2 h-2 ring-2 dark:ring-gray-800"}),f.createElement("div",{className:"ml-3 font-medium text-tertiary",style:{color:null==t?void 0:t.color}},e.username))))}function ii({server:e,serverUsers:t}){const n=g.exports.useMemo((()=>{var n;const r=[];for(const s of(null!=(n=null==e?void 0:e.roles)?n:[]).filter((e=>e.permissions.includes(or.DisplayRoleSeparately)))){const e=t.filter((e=>e.isOnline&&e.roles.map((e=>e.id)).includes(s.id)&&!r.includes(e)));e.length&&(r.push(`${s.name} — ${e.length}`),r.push(...e))}const a=t.filter((e=>e.user.isOnline));a.length&&(r.push(`Online — ${a.length}`),r.push(...a));const l=t.filter((e=>!e.user.isOnline));return l.length&&(r.push(`Offline — ${l.length}`),r.push(...l)),r}),[t,e]),r=g.exports.useRef(),a=Qa((e=>e.showUsers));return f.createElement(Za,{right:!0,show:a},f.createElement(oe,{className:"scrollbar-dark",ref:r,style:{height:"100%",width:"100%"},data:n,itemContent:(t,n)=>f.createElement("div",{className:"px-1.5 pb-0.5"},"string"==typeof n?f.createElement(Vl,null,n):f.createElement("div",{className:""+(n.user.isOnline?"":"opacity-35")},f.createElement(oi,{user:n.user,role:n.role,server:e})))}))}const ci=g.exports.createContext({server:null,loading:!0,users:[]});function mi({children:e,name:t}){var r;const{data:a,loading:l}=function(e){const t={...On,...e};return n(Ta,t)}({variables:{name:t},skip:!t,fetchPolicy:"network-only"}),s=null==a?void 0:a.server,{data:o}=function(e){const t={...On,...e};return n(La,t)}({variables:{serverId:null==s?void 0:s.id},skip:!s,fetchPolicy:"network-only"}),i=null!=(r=null==o?void 0:o.serverUsers)?r:[];return f.createElement(ci.Provider,{value:{server:s,loading:l&&!s,users:i}},e)}const di=()=>{const{server:e,loading:t,users:n}=g.exports.useContext(ci);return{server:e,loading:t,users:n}};function ui(){const{server:e,users:t}=di(),[n]=Va();return si(""),f.createElement(zs,{header:f.createElement(ts,{refreshPosts:()=>{}}),rightSidebar:f.createElement(ii,{server:e,serverUsers:t})},f.createElement(Be,null,f.createElement("title",null,null==e?void 0:e.displayName)),f.createElement(Ls,{serverId:null==e?void 0:e.id,header:n?f.createElement(uo,{server:e}):null}))}function pi({post:e,users:t=[]}){var n,r,a;const{t:l}=k(),s=Qa((e=>e.showUsers));return f.createElement(Za,{right:!0,show:s},f.createElement("div",{className:"px-1"},(null==e?void 0:e.author)&&f.createElement(f.Fragment,null,f.createElement(Vl,null,l("post.creator")),f.createElement(oi,{user:e.author,color:null==(r=null==(n=e.serverUser)?void 0:n.role)?void 0:r.color,role:null==(a=e.serverUser)?void 0:a.role})),t&&t.length>0&&f.createElement(f.Fragment,null,f.createElement(Vl,null,l("post.participantCount",{count:t.length})),t.map((e=>{var t,n,r;return f.createElement(oi,{key:e.user.id,user:e.user,color:null==(n=null==(t=e.serverUser)?void 0:t.role)?void 0:n.color,role:null==(r=e.serverUser)?void 0:r.role})})))))}const gi=e=>{if(!e.childComments||0===e.childComments.length)return 0;let t=0;return e.childComments.forEach((e=>{t++,e.childCount=gi(e),t+=e.childCount})),t},vi=e=>((e=(e=>{const t=Object.create(null);e.forEach((e=>t[e.id]={...e,childComments:[]}));const n=[];return e.forEach((e=>{e.parentComment?t[e.parentComment.id].childComments.push(t[e.id]):n.push(t[e.id])})),n})(e)).forEach((e=>e.childCount=gi(e))),e),hi=y("\n  text-base\n  text-primary\n  disabled:opacity-50\n  dark:disabled:bg-gray-600\n  bg-green-600\n  rounded\n  px-3\n  h-8\n  flex\n  items-center\n  disabled:cursor-not-allowed\n  focus:outline-none\n"),fi=y("\n  text-base\n  text-tertiary\n  focus:outline-none\n  px-2\n  h-8\n  flex\n  items-center\n");function bi({postId:e,parentCommentId:n,setOpen:r}){const[a,l]=g.exports.useState(""),[s,{loading:o}]=function(e){const n={...On,...e};return t(Pr,n)}({update(t,{data:{createComment:n}}){const r=t.readQuery({query:$a,variables:{postId:e}});t.writeQuery({query:$a,variables:{postId:e},data:{comments:[n,...r.comments]}})}}),{t:i}=k();return f.createElement("div",{className:"max-w-screen-md w-full"},f.createElement(Gs,{text:a,setText:l}),f.createElement("div",{className:"flex justify-end space-x-3 items-center pt-3"},f.createElement("button",{className:fi,onClick:()=>{r(!1),l("")}},i("comment.create.cancel")),f.createElement("button",{className:hi,disabled:!a||o,onClick:()=>{s({variables:{input:{postId:e,text:a,parentCommentId:n}}}).then((()=>{r(!1),l("")}))}},i("comment.create.submit"),o&&f.createElement(al,{className:"w-5 h-5 text-primary ml-3"}))))}const Ei=y("\n  ml-2\n  text-13\n  text-gray-500\n  hover:text-gray-700\n  dark:hover:text-gray-300\n  font-medium\n  leading-none\n  select-none\n  cursor-pointer\n");function xi({comment:e,post:n,level:r=0,setParentComment:a,isLast:l}){var s,o,i,c,m,d,u,p;const{t:v}=k(),[h]=Va(),b=Ql(),[E]=function(e){const n={...On,...e};return t(Mr,n)}(),[x,y]=g.exports.useState(!1),[w,N]=Qa((e=>[e.replyingCommentId,e.setReplyingCommentId])),C=w===e.id;return f.createElement("div",{className:"relative rounded dark:bg-gray-800 "+(0===r?"":"pl-4")},f.createElement("div",{id:e.id}),f.createElement(jl,{data:{type:wl,comment:e,post:n}},f.createElement("div",{className:"flex px-3 pt-3"},f.createElement(jl,{data:{type:xl,user:e.author}},f.createElement(ds,{user:e.author,role:null==(s=e.serverUser)?void 0:s.role},f.createElement(ms,{size:7,className:"cursor-pointer transition hover:opacity-90",user:e.author}))),f.createElement("div",{className:"pl-3 pb-3 w-full "+(!e.childComments.length&&!l||x?"":"border-b dark:border-gray-750")},f.createElement("div",{className:"flex items-end pb-1.5"},f.createElement(jl,{data:{type:xl,user:e.author}},f.createElement(ds,{user:e.author,role:null==(o=e.serverUser)?void 0:o.role},f.createElement("div",{className:"text-sm font-medium cursor-pointer hover:underline leading-none "+((null==(c=null==(i=e.serverUser)?void 0:i.role)?void 0:c.color)?"":"text-primary"),style:{color:null==(d=null==(m=e.serverUser)?void 0:m.role)?void 0:d.color}},null!=(p=null==(u=e.author)?void 0:u.username)?p:"[deleted]"))),f.createElement("div",{className:"text-11 text-mid font-medium pl-2 leading-none"},re(new Date(e.createdAt))," ago")),f.createElement("div",{className:"prose prose-sm dark:prose-dark max-w-none",dangerouslySetInnerHTML:{__html:e.text}}),f.createElement("div",{className:"flex items-center pt-1 -ml-2"},f.createElement("div",{className:"flex items-center"},f.createElement("button",{type:"button",className:"focus:outline-none p-1 rounded-full dark:hover:bg-gray-750 transition cursor-pointer "+(e.voteType===cr.Up?"text-red-400":"text-mid"),onClick:()=>{if(!h)return void b();let t=e.voteCount;e.voteType===cr.Up?t--:e.voteType===cr.None?t++:e.voteType===cr.Down&&(t+=2),E({variables:{input:{commentId:e.id,type:e.voteType===cr.Up?cr.None:cr.Up}},optimisticResponse:{...e,voteType:e.voteType===cr.Up?cr.None:cr.Up,voteCount:t}})}},f.createElement(X,{className:"w-5 h-5"})),f.createElement("div",{className:`text-13 leading-none font-semibold ${e.voteType===cr.Up?"text-red-400":""} ${e.voteType===cr.Down?"text-blue-400":""} ${e.voteType===cr.None?"text-tertiary":""}`},e.voteCount),n.server.isDownvotesEnabled&&f.createElement("button",{type:"button",className:"focus:outline-none p-1 rounded-full dark:hover:bg-gray-750 transition cursor-pointer "+(e.voteType===cr.Down?"text-blue-400":"text-mid"),onClick:()=>{if(!h)return void b();let t=e.voteCount;e.voteType===cr.Down?t++:e.voteType===cr.None?t--:e.voteType===cr.Up&&(t-=2),E({variables:{input:{commentId:e.id,type:e.voteType===cr.Down?cr.None:cr.Down}},optimisticResponse:{...e,voteType:e.voteType===cr.Down?cr.None:cr.Down,voteCount:t}})}},f.createElement(ee,{className:"w-5 h-5"}))),f.createElement("div",{className:Ei,onClick:()=>{N(C?null:e.id)}},v(C?"comment.cancelReply":"comment.reply")),!!e.childCount&&f.createElement("div",{className:Ei,onClick:()=>y(!x)},x?`${v("comment.showReplies")} (${e.childCount})`:v("comment.hideReplies")),f.createElement(jl,{leftClick:!0,data:{type:wl,comment:e,post:n}},f.createElement("div",{className:"ml-2 text-disabled flex items-center cursor-pointer"},f.createElement(se,{className:"w-4 h-4"})))),C&&f.createElement("div",{className:"pt-3 max-w-screen-md w-full"},f.createElement(bi,{postId:n.id,parentCommentId:e.id,setOpen:()=>N(null)}))))),f.createElement("div",{className:"pl-3"},!x&&e.childComments.map(((t,l)=>f.createElement(xi,{key:t.id,comment:t,level:r+1,setParentComment:a,post:n,isLast:l<e.childComments.length-1})))))}function yi({postId:e}){const[t,n]=g.exports.useState(!1),[r]=Va(),{t:a}=k();return f.createElement(f.Fragment,null,t?f.createElement("div",{className:"dark:bg-gray-800 pt-3 pb-3 px-3 rounded flex"},f.createElement("div",{className:"pr-3 mr-3 border-r dark:border-gray-750 inline-block h-7"},f.createElement(ms,{user:r,size:7})),f.createElement(bi,{postId:e,setOpen:n})):f.createElement("div",{onClick:()=>n(!0),className:"dark:bg-gray-700 h-13 flex items-center rounded transition dark:hover:bg-gray-650 cursor-pointer"},f.createElement("div",{className:"px-3 border-r dark:border-gray-650 h-7"},f.createElement(ms,{user:r,size:7})),f.createElement("div",{className:"text-sm text-secondary px-3"},a("post.createComment"))))}function wi({post:e}){const t=Qa((e=>e.canGoBack)),{push:n,goBack:r}=U();return f.createElement("header",{id:"header",className:"h-12 min-h-[3rem] items-center bg-white dark:bg-gray-750 border-b dark:border-gray-800 shadow flex items-center"},f.createElement("div",{className:"flex items-center font-semibold text-base text-primary pl-4"},f.createElement("div",{className:"highlightable mr-3 cursor-pointer",onClick:()=>{t?r():n(`/+${null==e?void 0:e.server.name}`)}},f.createElement(Rt,{className:"w-5 h-5"})),f.createElement("span",{className:"line-clamp-1"},null==e?void 0:e.title)),f.createElement("div",{className:"ml-auto pl-6 pr-4"},f.createElement(es,null)),f.createElement("div",{className:"flex w-60 min-w-[15rem] pr-4"},f.createElement(Jl,null)))}function Ni({postId:e}){const[t]=Va(),{data:r}=function(e){const t={...On,...e};return n(Pa,t)}({variables:{id:e}}),a=null==r?void 0:r.post,{data:l}=function(e){const t={...On,...e};return n($a,t)}({variables:{postId:e}}),s=g.exports.useMemo((()=>{var e;return vi(null!=(e=null==l?void 0:l.comments)?e:[])}),[null==l?void 0:l.comments]),o=g.exports.useMemo((()=>((e,t)=>e.filter((e=>!!e.author&&e.author.id!==t.author.id)).map((e=>({user:e.author,serverUser:e.serverUser}))).filter(((e,t,n)=>n.findIndex((t=>t.user.id===e.user.id))===t)))(s,a)),[s]);return f.createElement(zs,{header:a?f.createElement(wi,{post:a}):null,rightSidebar:a?f.createElement(pi,{post:a,users:o}):null},f.createElement(Be,null,f.createElement("title",null,a?`${a.title} – ${a.server.displayName}`:null)),a?f.createElement("div",{className:"max-h-full h-full scrollbar-custom dark:bg-gray-750 overflow-y-auto"},f.createElement("div",{className:"pt-4 px-4"},!!a&&f.createElement(Ts,{post:a,isPostPage:!0})),!!t&&f.createElement("div",{className:"pt-4 px-4"},f.createElement(yi,{postId:e})),f.createElement("div",{className:"space-y-2 px-4 pt-4 pb-96"},s.map(((e,t)=>f.createElement(xi,{key:e.id,comment:e,post:a,isLast:t<s.length-1}))))):f.createElement(Wa,null))}function ki({name:e,icon:t}){const[n,r]=Qa((e=>[e.postsSort,e.setPostsSort])),{server:a}=Mt(),{pathname:l}=I(),{push:s}=U(),o=n===e&&("/"===l||l===`/${a}`),i=t;return f.createElement(el,{onClick:()=>{r(e),s(a?`/${a}`:"/")},active:o},f.createElement(i,{className:"w-5 h-5 mr-3 text-tertiary"}),e)}function Ci(){const{t:e}=k();return f.createElement("div",{className:"space-y-0.5"},f.createElement(ki,{name:e("post.feed.sort.hot"),icon:z}),f.createElement(ki,{name:e("post.feed.sort.new"),icon:O}),f.createElement(ki,{name:e("post.feed.sort.top"),icon:L}))}function $i({count:e}){return f.createElement("div",{className:"rounded-full bg-red-500 w-4 h-4 flex items-center justify-center"},f.createElement("div",{className:"leading-none text-11 font-medium text-primary",style:{marginLeft:"-1px"}},e))}function Ui(){var e,t,n,r;const{t:a}=k(),[l]=Va(),s=null!=(e=null==l?void 0:l.groups)?e:[],o=null!=(n=null==(t=null==l?void 0:l.relatedUsers)?void 0:t.filter((e=>e.showChat)))?n:[],i=s.concat(o).sort(((e,t)=>(e.lastMessageAt?new Date(e.lastMessageAt).getTime():0)-(t.lastMessageAt?new Date(t.lastMessageAt).getTime():0))),{data:c}=Da({skip:!l,fetchPolicy:"cache-and-network"}),m=(null!=(r=null==c?void 0:c.replies)?r:[]).filter((e=>!e.isRead)).length;return f.createElement(f.Fragment,null,f.createElement(Za,null,f.createElement("div",{className:"h-12 border-b dark:border-gray-850 shadow flex items-center px-5 text-base font-medium"},f.createElement(yo,{className:"h-4"})),f.createElement("div",{className:"px-1.5"},!!l&&f.createElement("div",{className:"space-y-0.5 pt-3"},f.createElement(el,{to:"/inbox"},f.createElement(lt,{className:"mr-3 h-5 w-5"}),a("inbox.title"),!!m&&f.createElement("div",{className:"ml-auto"},f.createElement($i,{count:m})))),f.createElement(Vl,null,"Posts"),f.createElement(Ci,null),!!l&&f.createElement(f.Fragment,null,f.createElement(Vl,{plusLabel:"Create DM"},a("dm.title")),f.createElement("div",{className:"space-y-0.5"},!!i&&i.map((e=>{if("Group"===e.__typename)return f.createElement("div",null,"Group");if("User"===e.__typename){const t=e;return f.createElement(Ii,{user:t,key:`user-${t.id}`})}})))))))}function Ii({user:e}){k();const[t]=ra(),{push:n}=U(),{pathname:r}=I(),[a]=qr(),[{isOver:l,canDrop:s},o]=At({accept:Ja,drop:(t,r)=>{n(`/dm/@${e.username}`),a({variables:{input:{userId:e.id,text:`${location.origin}${t.relativeUrl}`}}})},collect:e=>({isOver:e.isOver(),canDrop:e.canDrop()})});return f.createElement("div",null,f.createElement(jl,{data:{type:xl,user:e,isDm:!0}},f.createElement(el,{ref:o,large:!0,to:`/dm/@${e.username}`,key:`user-${e.id}`},f.createElement(ms,{size:9,showOnline:!0,user:e,dotClassName:"ring-3 w-2.5 h-2.5 dark:ring-gray-800"}),f.createElement("span",{className:"ml-3"},e.username),f.createElement("div",{className:"ml-auto"}),f.createElement("div",{className:"pr-2"},!!e.unreadCount&&f.createElement($i,{count:e.unreadCount})),f.createElement(He,{onClick:a=>{a.stopPropagation(),a.preventDefault(),t({variables:{input:{userId:e.id}}}),r===`/dm/@${e.username}`&&n("/")},className:"group-hover:visible invisible w-5 h-5 cursor-pointer text-gray-600 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300"}))))}const Si=e=>y(`\n  w-12\n  h-12\n  object-cover\n  inline-flex\n  items-center\n  justify-center\n  hover:rounded-2xl\n  ${e?"rounded-2xl":"rounded-3xl"}\n  transform\n  transition-all\n  relative\n  group\n  cursor-pointer\n`),Pi=(e,t)=>y(`\n  absolute\n  left-0\n  w-1\n  dark:bg-white\n  rounded-r-2xl\n  top-1/2\n  -translate-y-1/2\n  transform\n  transition\n  duration-250\n  group-hover:-translate-x-3\n  ${e?"-translate-x-3 h-10":t?"-translate-x-3 h-2.5 group-hover:h-5":"-translate-x-4 h-5"}\n`);var Fi=g.exports.forwardRef((({name:e,children:t,to:n,onClick:r,className:a="dark:bg-gray-800 bg-gray-200",active:l=!1,unread:s=!1},o)=>f.createElement(F,{content:e,placement:"right",ref:o,offset:[0,22]},n?f.createElement(x,{to:n,className:`${Si(l)} ${a}`},f.createElement("div",{className:Pi(l,s)}),t):f.createElement("div",{onClick:r,className:`${Si(l)} ${a}`},f.createElement("div",{className:Pi(l,s)}),t))));const Mi=y("\n  relative\n  flex\n  items-center\n  pl-3\n  pr-10\n  text-left\n  bg-white\n  cursor-pointer\n  focus:outline-none\n  text-13\n  rounded\n  border\n  h-10\n  dark:bg-gray-800\n  dark:border-gray-700\n  border-b\n  border-t-0\n  border-r-0\n  border-l-0\n  rounded-none\n  focus:outline-none\n  transition\n  px-4\n  text-secondary\n"),Ri=y("\n  scrollbar-thin\n  dark:scrollbar-thumb-gray-750\n  dark:scrollbar-track-gray-850\n  scrollbar-thumb-rounded-md\n  absolute\n  py-1\n  mt-1\n  overflow-auto\n  text-13\n  text-secondary\n  bg-white\n  dark:bg-gray-850\n  rounded-md\n  shadow-lg\n  max-h-60\n  focus:outline-none\n  space-y-0.5\n  font-medium\n");function Ai({category:e,setCategory:t}){const n=Object.values(lr),r=Eo(e);return f.createElement("div",{className:"min-w-full relative z-50"},f.createElement(De,{value:e,onChange:t},(({open:t})=>f.createElement(f.Fragment,null,f.createElement("div",{className:"relative"},f.createElement(De.Button,{className:Mi},e?f.createElement(f.Fragment,null,f.createElement(r,{className:"w-5 h-5 text-secondary"}),f.createElement("span",{className:"block truncate pl-3"},e)):f.createElement("span",{className:"block truncate text-tertiary"},"Category"),f.createElement("span",{className:"absolute inset-y-0 right-0 flex items-center pr-4 pointer-events-none"},f.createElement(ee,{className:"w-5 h-5 text-gray-400","aria-hidden":"true"}))),f.createElement(R,{show:t,as:g.exports.Fragment,leave:"transition ease-in duration-100",leaveFrom:"opacity-100",leaveTo:"opacity-0"},f.createElement(De.Options,{static:!0,className:Ri},n.map((e=>f.createElement(De.Option,{key:e,className:({active:e})=>(e=>y(`\n  ${e?"dark:bg-gray-775":""}\n  cursor-pointer\n  select-none\n  relative\n  focus:outline-none\n`))(e),value:e},(({selected:t})=>f.createElement("div",{className:"flex items-center h-10 pl-3 pr-3 "+(t?"dark:bg-gray-775":"")},(()=>{const t=Eo(e);return f.createElement(t,{className:"w-5 h-5 text-secondary"})})(),f.createElement("span",{className:"block truncate pl-2"},e)))))))))))))}function Di({children:e,buttons:t,open:n,close:r,closeOnOverlayClick:a,onSubmit:l,small:s=!1,large:o=!1}){return f.createElement(Yl,{isOpen:n,close:r,closeOnOverlayClick:a},f.createElement("form",{onSubmit:l,className:`rounded-lg dark:bg-gray-800 w-full relative text-left ${s||o?"":"max-w-lg"} ${s?"max-w-sm":""} ${o?"max-w-screen-lg":""}`,onClick:e=>e.stopPropagation()},e,!!t&&f.createElement(f.Fragment,null,f.createElement("div",{className:"rounded-b-lg dark:bg-gray-750 h-9"}),f.createElement("div",{className:"absolute right-5 bottom-9 transform translate-y-1/2 flex items-center space-x-3 justify-end h-9"},(t.type===g.exports.Fragment?t.props.children:[t]).map(((e,t)=>f.createElement("div",{key:t,className:"dark:bg-gray-800 rounded"},e)))))))}function Ti({checked:e,onChange:t,children:n,green:r=!1,className:a,disabled:l}){return f.createElement(Dt.Group,{as:"div",className:"flex items-center space-x-3"},n&&f.createElement(Dt.Label,{className:a},n),f.createElement(Dt,{disabled:l,as:"button",checked:e,onChange:t,className:(e?""+(r?"bg-green-600":"bg-blue-600"):"dark:bg-gray-500")+" relative inline-flex flex-shrink-0 h-6 transition-colors duration-200 ease-in-out border-2 border-transparent rounded-full cursor-pointer w-10 focus:outline-none focus:shadow-outline"},(({checked:e})=>f.createElement("span",{className:(e?"translate-x-4":"translate-x-0.5")+" bg-gray-100 inline-block relative translate-y-1px w-4.5 h-4.5 transition duration-200 ease-in-out transform rounded-full"},f.createElement(ct,{className:`absolute inset-1/2 transform -translate-y-1/2 -translate-x-1/2 w-4 h-4 transition-opacity duration-200 ${e?"opacity-100":"opacity-0"} ${r?"text-green-600":"text-blue-600"}`}),f.createElement(He,{className:`absolute inset-1/2 transform -translate-y-1/2 -translate-x-1/2 w-4 h-4 transition-opacity duration-200 ${e?"opacity-0":"opacity-100"} text-gray-500`})))))}const Li=/^[A-Za-z0-9_]+$/i;function Oi({open:e,setOpen:n,server:r}){var a,l,s,o;const[i,c]=g.exports.useState(null!=(a=null==r?void 0:r.isDownvotesEnabled)&&a),[m,{loading:d}]=function(e){const n={...On,...e};return t(ma,n)}({update(e,{data:{createServer:t}}){const n=e.readQuery({query:Ua});e.writeQuery({query:Ua,data:{user:{...n.user,servers:[t,...n.user.servers]}}})}}),[u,{loading:p}]=function(e){const n={...On,...e};return t(da,n)}(),[v,h]=g.exports.useState(null!=(l=null==r?void 0:r.category)?l:lr.Other),{handleSubmit:b,register:E,watch:x,reset:y,setValue:w,formState:{errors:N,isValid:k}}=Le({mode:"onChange"});x(((e,{type:t,value:n,name:r})=>{if("avatarFile"===r){const{avatarFile:t}=e;if(!t||!t[0])return;Wo(t[0]).then((e=>M(e)))}else if("bannerFile"===r){const{bannerFile:t}=e;if(!t||!t[0])return;Wo(t[0]).then((e=>A(e)))}}));const C=x("name"),$=x("displayName"),[I,S]=g.exports.useState(!1);g.exports.useEffect((()=>{I||null==$||w("name",$.replace(" ","_").replace(/[^A-Za-z0-9_]/i,""))}),[$]),g.exports.useEffect((()=>{C||S(!1)}),[C]);const[P,M]=g.exports.useState(null==r?void 0:r.avatarUrl),[R,A]=g.exports.useState(null==r?void 0:r.bannerUrl);g.exports.useEffect((()=>{r?(M(r.avatarUrl),A(r.bannerUrl),w("displayName",r.displayName),w("description",r.description||""),h(r.category),c(r.isDownvotesEnabled)):(y(),M(null),A(null),h(lr.Other),c(!1))}),[r]);const{push:D}=U(),T=($||"").split(" ").map((e=>e[0])).join("").toUpperCase();return f.createElement(Di,{open:e,close:()=>{n(!1)},closeOnOverlayClick:!0,onSubmit:b((({name:e,displayName:t,description:a,avatarFile:l,bannerFile:s})=>{r?u({variables:{input:{serverId:r.id,displayName:t,description:a,category:v,avatarFile:l?l[0]:null,bannerFile:s?s[0]:null,isDownvotesEnabled:i}}}).then((()=>{n(!1)})):m({variables:{input:{name:e,displayName:t,description:a,category:v,avatarFile:l?l[0]:null,bannerFile:s?s[0]:null,isDownvotesEnabled:i}}}).then((({data:{createServer:e}})=>{n(!1),D(`/+${e.name}`)}))})),buttons:r?f.createElement(F,{content:"Save Changes"},f.createElement("button",{type:"submit",className:"form-button-submit",disabled:!$||p||(null==$?void 0:$.length)<2},p?f.createElement(al,{className:"w-5 h-5 text-primary"}):f.createElement(ct,{className:"w-5 h-5 text-primary"}))):f.createElement("button",{type:"submit",className:"form-button-submit",disabled:!$||!C||(null==$?void 0:$.length)<2||(null==C?void 0:C.length)<3||d||!Li.test(C)},d?f.createElement(al,{className:"w-5 h-5 text-primary"}):f.createElement(Tt,{className:"w-5 h-5 text-primary"}))},f.createElement("input",{type:"file",...E("bannerFile"),className:"hidden",id:"bannerFile",accept:"image/png,image/jpeg,image/webp,image/gif"}),f.createElement("label",{htmlFor:"bannerFile",className:"h-24 block relative rounded-t-lg group cursor-pointer bg-center bg-cover "+(R?"":"bg-gradient-to-br from-red-400 to-indigo-600"),style:R?{backgroundImage:`url(${R})`}:{}},f.createElement("div",{className:"rounded-t-lg absolute inset-0 transition bg-black opacity-0 group-hover:opacity-50 flex items-center justify-center"},f.createElement(Lt,{className:"w-10 h-10"}))),f.createElement("input",{type:"file",...E("avatarFile"),className:"hidden",id:"avatarFile",accept:"image/png,image/jpeg,image/webp,image/gif"}),f.createElement("label",{htmlFor:"avatarFile",className:"flex items-center justify-center cursor-pointer rounded-3xl h-24 w-24 absolute left-3 top-24 transform -translate-y-1/2 dark:bg-gray-700 shadow group bg-center bg-cover",style:P?{backgroundImage:`url(${P})`}:{}},!P&&f.createElement("div",{className:"text-tertiary text-3xl font-medium overflow-hidden"},T),f.createElement("div",{className:"absolute rounded-3xl inset-0 transition bg-black opacity-0 group-hover:opacity-50 flex items-center justify-center"},f.createElement(Lt,{className:"w-10 h-10"}))),f.createElement("div",{className:"pl-30 pr-5 pt-2 text-left"},f.createElement("input",{...E("displayName",{maxLength:100,required:!0}),placeholder:"Display Name",className:"form-input-lg",maxLength:100})),f.createElement("div",{className:"pb-5 space-y-3 pt-3 px-5 text-left"},f.createElement("div",null,f.createElement("div",{className:"text-sm text-accent flex items-center pt-3"},f.createElement("span",{className:"h-7 flex items-center"},"joincomet.app/+",null!=(s=null==r?void 0:r.name)?s:""),!r&&f.createElement("input",{...E("name",{pattern:Li,required:!0,minLength:3,maxLength:21}),minLength:3,maxLength:21,placeholder:"Name",className:"bg-transparent h-7 w-full border-b dark:border-gray-700 focus:outline-none transition dark:focus:border-blue-500",onKeyPress:()=>S(!0)})),"pattern"===(null==(o=N.name)?void 0:o.type)&&f.createElement("div",{className:"form-error"},"Letters, numbers and underscores only")),f.createElement("textarea",{...E("description",{maxLength:500}),placeholder:"Description",className:"form-textarea",maxLength:500}),f.createElement("div",{className:"flex items-center"},f.createElement("div",{className:"text-13 font-medium text-tertiary pr-1.5"},"Category"),f.createElement(Ai,{category:v,setCategory:h})),f.createElement("div",{className:"pt-2"},f.createElement(Ti,{checked:i,onChange:()=>c(!i),green:!0},f.createElement("div",{className:"text-13 font-medium text-tertiary"},"Downvotes enabled")))))}function zi(){const[e,t]=g.exports.useState(!1),{t:n}=k();return f.createElement(f.Fragment,null,f.createElement(Fi,{name:n("server.create.title"),onClick:()=>t(!0),className:"dark:bg-gray-800 bg-gray-200 hover:bg-purple-600 dark:hover:bg-purple-600"},f.createElement(rl,{className:"w-5 h-5 text-purple-500 group-hover:text-white transition"})),f.createElement(Oi,{open:e,setOpen:t}))}function _i({showPassword:e,setShowPassword:t}){return f.createElement(F,{content:e?"Hide Password":"Show Password"},f.createElement("div",{className:"form-show-password-button"},e?f.createElement(Ot,{onClick:()=>t(!1),className:"w-5 h-5"}):f.createElement(zt,{onClick:()=>t(!0),className:"w-5 h-5"})))}function qi(){var e;const{pathname:t}=I(),{t:n}=k(),r=Qa((e=>e.homePage)),a="/explore"!==t&&!t.startsWith("/+"),l=t.startsWith("/explore"),s="Mac OS"===Ol()&&window.electron,[o]=Va(),{data:i}=Ra({variables:{featured:!0},fetchPolicy:"cache-and-network",nextFetchPolicy:"cache-first"}),c=o?o.servers:null!=(e=null==i?void 0:i.publicServers)?e:[];return f.createElement(f.Fragment,null,f.createElement("div",{className:"flex flex-col items-center min-w-[4.5rem] w-18 bg-white dark:bg-gray-900 overflow-y-auto scrollbar-none"},s&&f.createElement("div",{className:"h-5"}),f.createElement("div",{className:"h-full flex flex-col items-center w-full divide-y dark:divide-gray-800 divide-gray-200"},f.createElement("div",{className:"space-y-2 flex flex-col items-center py-2"},f.createElement(Fi,{name:n("home"),to:""+(r?`/${r}`:"/"),active:a,className:""+(a?"bg-blue-600":"dark:bg-gray-800 bg-gray-200 hover:bg-blue-600 dark:hover:bg-blue-600")},f.createElement(_t,{className:"w-5 h-5 group-hover:text-white transition "+(a?"text-white":"text-blue-500")})),f.createElement(Fi,{name:n("explore.title"),to:"/explore",active:l,className:l?"bg-green-600":"dark:bg-gray-800 bg-gray-200 hover:bg-green-600 dark:hover:bg-green-600"},f.createElement(qt,{className:"w-5 h-5 group-hover:text-white transition "+(l?"text-white":"text-green-500")})),!!o&&f.createElement(zi,null)),!!c&&c.length>0&&f.createElement("div",{className:"space-y-2 flex flex-col items-center py-2"},c.map((e=>f.createElement(Hi,{server:e,key:e.id})))))))}function Hi({server:e}){var t,n,r;const{pathname:a}=I(),l=S(a,{path:"/:server"}),s=null==(n=null==(t=null==l?void 0:l.params)?void 0:t.server)?void 0:n.substring(1),o=Qa((e=>e.serverPages)),[i]=sl({server:e,permissions:[or.PrivateChannels]}),c=!!(null!=(r=e.channels)?r:[]).filter((e=>e.type!==zn.Private||i)).find((e=>e.isUnread)),m=s===e.name,[d,u]=g.exports.useState(!1);return f.createElement(f.Fragment,null,f.createElement(Bi,{open:d,setOpen:u,server:e}),f.createElement(jl,{className:"h-12",data:{type:kl,server:e,openDelete:()=>u(!0)}},f.createElement(Fi,{to:`/+${e.name}${o[e.id]?`/${o[e.id]}`:""}`,name:e.displayName,active:m,unread:c},f.createElement(ls,{server:e,size:12,className:"bg-gray-200 h-12 w-12 dark:bg-gray-800 group-hover:rounded-2xl transition-all "+(m?"rounded-2xl":"rounded-3xl")}))))}function Bi({open:e,setOpen:n,server:r}){const[a,l]=g.exports.useState(""),[s,o]=g.exports.useState(!1),[i,{loading:c}]=function(e){const n={...On,...e};return t(ua,n)}(),{push:m}=U();return f.createElement(Di,{open:e,close:()=>n(!1),closeOnOverlayClick:!0,small:!0,buttons:f.createElement(f.Fragment,null,f.createElement("button",{className:"form-button-cancel",type:"button",onClick:()=>n(!1)},"Cancel"),f.createElement("button",{className:"form-button-delete",type:"button",disabled:!a||c,onClick:()=>{i({variables:{input:{password:a,serverId:r.id}}}).then((()=>{n(!1),m("/")}))}},"Delete",c&&f.createElement(al,{className:"w-5 h-5 text-primary ml-3"})))},f.createElement("div",{className:"max-w-md w-full rounded-md dark:bg-gray-800 shadow-lg px-5 pt-5 pb-10"},f.createElement("div",{className:"text-red-400 text-lg font-semibold"},"Delete ",r.name),f.createElement("div",{className:"text-tertiary pb-3 pt-3 text-sm"},"All posts, comments, and messages will be lost. Enter your password to continue."),f.createElement("div",{className:"relative"},f.createElement("input",{id:"confirmPassword",name:"confirmPassword",className:"form-input-password",placeholder:"Password",value:a,onChange:e=>l(e.target.value),type:s?"text":"password"}),f.createElement(_i,{showPassword:s,setShowPassword:o}))))}function ji({open:e,setOpen:n}){const[r]=Va(),[a,l]=g.exports.useState(!1),{register:s,handleSubmit:o,watch:i,reset:c,formState:{errors:m}}=Le({mode:"onChange"}),d=i("password"),u=i("currentPassword"),[p,{loading:v}]=function(e){const n={...On,...e};return t(ya,n)}(),[h]=function(e){const n={...On,...e};return t(wa,n)}(),b=()=>{n(!1),setTimeout((()=>c()),300)};return f.createElement(f.Fragment,null,f.createElement(Yl,{isOpen:e,close:b},f.createElement("div",{className:"min-w-full h-full min-h-full h-screen dark:bg-gray-800 scrollbar-custom",onClick:e=>e.stopPropagation()},f.createElement("div",{className:"w-full relative flex"},f.createElement("button",{className:"absolute top-3 right-3 focus:outline-none rounded-full transition dark:hover:bg-gray-700 p-2",onClick:b},f.createElement(Ht,{className:"w-6 h-6 text-tertiary"})),f.createElement("div",{className:"w-1/3 min-w-[14rem] dark:bg-gray-800 flex justify-end px-4 py-12"},f.createElement("div",{className:"w-56"},f.createElement(Vl,null,"User Settings"),f.createElement(el,null,"My Account"),f.createElement(el,{onClick:()=>{localStorage.removeItem("token"),location.reload()}},f.createElement("span",{className:"text-red-500"},"Log Out")))),f.createElement("div",{className:"w-2/3 px-10 py-16 dark:bg-gray-750 min-h-screen"},f.createElement("div",{className:"max-w-screen-sm text-left"},f.createElement("div",{className:"font-semibold text-primary uppercase mb-6"},"My Account"),f.createElement("form",{onSubmit:o((({password:e,currentPassword:t})=>{p({variables:{input:{password:e,currentPassword:t}}}).then((()=>{$.success("Saved changes!"),c()}))})),className:"rounded-lg dark:bg-gray-800 p-4"},f.createElement("div",{className:"flex items-center"},f.createElement("input",{type:"file",accept:"image/png,image/jpeg,image/webp,image/gif",name:"avatarFile",id:"avatarFile",hidden:!0,onChange:e=>{const t=e.target.files[0];t&&h({variables:{input:{avatarFile:t}}})}}),f.createElement("label",{htmlFor:"avatarFile",className:"relative group"},f.createElement(ms,{user:r,size:20}),f.createElement("div",{className:"absolute rounded-full cursor-pointer inset-0 bg-black opacity-0 group-hover:opacity-100 bg-opacity-50 z-10 transition flex items-center justify-center"},f.createElement(Lt,{className:"w-1/2 h-1/2"}))),f.createElement("div",{className:"flex items-end ml-6"},f.createElement("div",{className:"font-semibold text-xl text-primary"},r.username))),f.createElement("div",{className:"mt-5 space-y-5"},f.createElement("div",null,f.createElement("label",{htmlFor:"password",className:"label"},"New Password"),f.createElement("input",{className:"textbox",id:"password",...s("password",{minLength:6,required:!0}),type:"password",minLength:6}),m.password&&f.createElement("div",{className:"error"},"Password must be at least 6 characters")),f.createElement("div",null,f.createElement("label",{htmlFor:"currentPassword",className:"label"},"Current Password"),f.createElement("input",{className:"textbox",id:"currentPassword",...s("currentPassword",{required:!0}),type:"password"}))),f.createElement("div",{className:"flex items-center mt-5"},f.createElement("div",{className:"ml-auto"}),f.createElement("button",{type:"submit",disabled:v||!u||!d||(null==d?void 0:d.length)<6,className:"disabled:opacity-50 disabled:cursor-not-allowed rounded px-4 h-9 text-sm text-primary bg-green-600 focus:outline-none flex items-center"},"Save Changes",v&&f.createElement(al,{className:"w-5 h-5 text-primary ml-3"})))),f.createElement("div",{className:"mt-10 flex items-center justify-end"},f.createElement("button",{type:"button",onClick:()=>l(!0),className:"delete-button"},"Delete Account")))))),f.createElement(Gi,{deleteOpen:a,setDeleteOpen:l})))}function Gi({deleteOpen:e,setDeleteOpen:n}){const[r,a]=g.exports.useState(""),[l,{loading:s}]=function(e){const n={...On,...e};return t(Na,n)}(),{push:o}=U(),i=P();return f.createElement(Yl,{isOpen:e,close:()=>n(!1)},f.createElement("div",{className:"max-w-md w-full rounded-md dark:bg-gray-800 shadow-lg p-4"},f.createElement("div",{className:"text-red-400 text-2xl font-semibold"},"Delete Account"),f.createElement("div",{className:"text-secondary pb-5 pt-3 text-base"},"You will not be able to recover your account."),f.createElement("div",{className:"text-left"},f.createElement("label",{htmlFor:"confirmPassword",className:"label"},"Password"),f.createElement("input",{id:"confirmPassword",name:"confirmPassword",className:"textbox",value:r,onChange:e=>a(e.target.value),type:"password"})),f.createElement("div",{className:"flex items-center justify-end space-x-4 pt-4"},f.createElement("button",{className:"cancel-button",type:"button",onClick:()=>n(!1)},"Cancel"),f.createElement("button",{className:"delete-button",type:"button",disabled:!r||s,onClick:()=>{l({variables:{input:{password:r}}}).then((()=>{n(!1),o("/"),i.resetStore()}))}},"Delete Account",s&&f.createElement(al,{className:"w-5 h-5 text-primary ml-3"})))))}function Vi(){const[e]=Va(),n=[0,14],[r,a]=g.exports.useState(!1),[l,s]=Qa((e=>[e.updateAvailable,e.setUpdateAvailable]));g.exports.useEffect((()=>{window.electron&&window.electron.on("updateAvailable",(()=>{s(!0)}))}),[]);const[o]=function(e){const n={...On,...e};return t(Ca,n)}();g.exports.useEffect((()=>{if(e){const e=setInterval((()=>{o({variables:{input:{onlineStatus:Zn.Online}}})}),15e3);return()=>clearInterval(e)}}),[e]),(()=>{const e=Ol()})();const[i,c,m,d]=Zl();return f.createElement(f.Fragment,null,!!e&&f.createElement(ji,{open:r,setOpen:a}),f.createElement("div",{className:"flex items-center shadow-md px-3 bottom-0 h-5.5 bg-gray-700 z-50"},e?f.createElement(f.Fragment,null,f.createElement(ms,{size:4.5,className:"mr-2",user:e}),f.createElement("div",{className:"text-primary text-13 font-medium cursor-pointer"},e.username),f.createElement("div",{className:"w-2 h-2 rounded-full bg-green-500 ml-2"})):f.createElement("div",{className:"flex items-center text-primary text-13 font-medium"},f.createElement("div",{className:"cursor-pointer hover:underline",onClick:()=>{d(!1),c(!0)}},"Log In"),"  ·  ",f.createElement("div",{className:"cursor-pointer hover:underline",onClick:()=>{d(!0),c(!0)}},"Create account")),f.createElement("div",{className:"ml-auto flex items-center space-x-4 text-primary"},f.createElement(F,{content:""+(window.electron&&l?"Update available":"Up to date!")},f.createElement("div",{className:"flex items-center "+(window.electron&&l?"cursor-pointer":""),onClick:()=>{window.electron&&l&&window.electron.restart()}},f.createElement("div",{className:"text-xs font-medium "+(l&&window.electron?"text-green-500":"text-tertiary")},"Comet v","0.0.77"),window.electron&&l&&f.createElement("div",{className:"pl-2"},f.createElement(Bt,{className:"w-4.5 h-4.5 text-green-500 cursor-pointer"})))),!!e&&f.createElement(f.Fragment,null,f.createElement(F,{content:"Notifications",offset:n},f.createElement(b,{to:"/inbox"},f.createElement(jt,{className:"w-4.5 h-4.5 cursor-pointer"}))),f.createElement(F,{content:"Settings",offset:n},f.createElement("div",{onClick:()=>a(!0)},f.createElement(Gt,{className:"w-4.5 h-4.5 cursor-pointer"})))))))}const Yi=e=>y(`\n  h-1.5\n  w-1.5\n  rounded-full\n  dark:bg-gray-100\n  mr-2\n  ${e?"opacity-100":"opacity-0"}\n`),Wi=e=>y(`\n  flex\n  items-center\n  cursor-pointer\n  ${e?"text-primary":"text-gray-600 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300"}\n`);function Zi({open:e,setOpen:n,server:r,channel:a}){var l;const{handleSubmit:s,register:o,setValue:i,watch:c,reset:m}=Le({mode:"onChange"}),d=c("name");g.exports.useEffect((()=>{d&&i("name",d.toLowerCase().replace(" ","-").replace(/[^a-z0-9-_]+/,""))}),[d]);const[u,p]=g.exports.useState(null!=(l=null==a?void 0:a.type)?l:zn.Public),{push:v}=U(),[h,{loading:b}]=function(e){const n={...On,...e};return t($r,n)}({update(e,{data:{createChannel:t}}){e.writeQuery({query:Ta,variables:{name:r.name},data:{server:{...r,channels:[...r.channels,t]}}})}}),[E,{loading:x}]=function(e){const n={...On,...e};return t(Ur,n)}(),y=()=>{n(!1)};g.exports.useEffect((()=>{a?(i("name",a.name),i("description",a.description||""),p(a.type)):(m(),p(zn.Public))}),[a]);const w=!a&&!!d&&r.channels.map((e=>e.name)).includes(d);return f.createElement(Di,{onSubmit:s((({name:e,description:t})=>{a?E({variables:{input:{description:t,channelId:a.id,type:u}}}).then((()=>{y()})):h({variables:{input:{name:e,description:t,serverId:r.id,type:u}}}).then((({data:{createChannel:e}})=>{y(),v(`/+${r.name}/#${e.name}`),m(),p(zn.Public)}))})),open:e,close:y,closeOnOverlayClick:!0,buttons:f.createElement("button",{type:"submit",className:"form-button-submit",disabled:!a&&!d||w||b||x},b||x?f.createElement(al,{className:"w-5 h-5"}):f.createElement(ct,{className:"w-5 h-5"}))},f.createElement("div",{className:"p-5 space-y-4 w-full text-left"},f.createElement("div",{className:"flex items-center font-semibold text-primary"},f.createElement(ls,{server:r,size:6,className:"rounded-md mr-2"}),f.createElement("div",{className:"truncate"},r.displayName),"  ·  ",a?"Edit":"Create"," Channel",f.createElement(He,{className:"h-5 w-5 highlightable ml-auto",onClick:()=>y()})),f.createElement("div",null,f.createElement("div",{className:"relative"},f.createElement("input",{...o("name",{required:!0,maxLength:100}),maxLength:100,className:"form-input-icon",spellCheck:!1,autoCapitalize:"none",id:"name",placeholder:"Channel name",disabled:!!a}),f.createElement(ll,{className:"form-input-icon-icon"})),w&&f.createElement("div",{className:"form-error"},"Channel already exists")),f.createElement("textarea",{placeholder:"Description",...o("description"),className:"form-textarea"}),f.createElement("div",{className:"flex items-center space-x-4 text-sm text-tertiary"},f.createElement(F,{content:"Anyone can view and send messages"},f.createElement("div",{onClick:()=>p(zn.Public),className:Wi(u===zn.Public)},f.createElement("div",{className:Yi(u===zn.Public)}),"Public")),f.createElement(F,{content:"Anyone can view, but only members with permission can send messages"},f.createElement("div",{onClick:()=>p(zn.Restricted),className:Wi(u===zn.Restricted)},f.createElement("div",{className:Yi(u===zn.Restricted)}),"Restricted")),f.createElement(F,{content:"Only members with permission can view and send messages"},f.createElement("div",{onClick:()=>p(zn.Private),className:Wi(u===zn.Private)},f.createElement("div",{className:Yi(u===zn.Private)}),"Private")))))}function Qi({channel:e,server:t}){const{t:n}=k(),[r]=sl({server:t,permissions:[or.ManageChannels]}),{hash:a}=I(),l=`/+${null==t?void 0:t.name}/#${e.name}`,s=a.substring(1)===e.name,[o,i]=g.exports.useState(!1),[c,m]=g.exports.useState(!1);return f.createElement(f.Fragment,null,f.createElement(Zi,{open:c,setOpen:m,channel:e,server:t}),f.createElement(jl,{data:{type:$l,channel:e,server:t,openDelete:()=>i(!0),openEdit:()=>m(!0)}},f.createElement(el,{to:l,active:s},e.isUnread&&!s&&f.createElement("div",{className:"absolute -left-1.5 top-1/2 transform -translate-y-1/2 rounded-r-full dark:bg-gray-100 h-2 w-1"}),f.createElement(ll,{className:"w-5 h-5 mr-3 text-tertiary"}),f.createElement("span",{className:""+(e.isUnread?"text-primary":"")},e.name),f.createElement("div",{className:"ml-auto"}),!!e.mentionCount&&f.createElement("div",{className:r?"group-hover:hidden block":""},f.createElement($i,{count:e.mentionCount})),r&&f.createElement(F,{content:n("channel.edit")},f.createElement("div",{className:"group-hover:block hidden",onClick:e=>{e.stopPropagation(),e.preventDefault(),m(!0)}},f.createElement(Gt,{className:"w-4 h-4 text-tertiary"}))))),f.createElement(Ji,{open:o,setOpen:i,channel:e,server:t}))}function Ji({server:e,channel:n,open:r,setOpen:a}){const[l,{loading:s}]=function(e){const n={...On,...e};return t(Ir,n)}(),{push:o}=U(),{pathname:i,hash:c}=I();return f.createElement(Di,{closeOnOverlayClick:!0,small:!0,open:r,close:()=>a(!1),buttons:f.createElement(f.Fragment,null,f.createElement("button",{className:"form-button-cancel",onClick:()=>a(!1),type:"button"},"Cancel"),f.createElement("button",{className:"form-button-delete",disabled:s,onClick:()=>{l({variables:{input:{channelId:n.id}},update(t,{data:{deleteChannel:n}}){t.writeQuery({query:Ta,variables:{name:e.name},data:{server:{...e,channels:e.channels.filter((e=>e.id!==n))}}})}}).then((()=>{a(!1),i===`/+${e.name}/`&&c===`#${n.name}`&&o(`/+${e.name}`)}))},type:"button"},s?f.createElement(al,null):"Delete"))},f.createElement("div",{className:"px-4 pt-4 pb-10"},f.createElement("div",{className:"text-lg font-medium text-secondary"},"Delete ",f.createElement("span",{className:"text-primary"},"#",n.name),"?"),f.createElement("div",{className:"text-tertiary pt-3 text-sm"},"Messages in this channel will be lost.")))}function Ki({server:e}){const{t:t}=k(),[n,r]=g.exports.useState(!1),[a]=sl({server:e,permissions:[or.ManageChannels]});return a?f.createElement(f.Fragment,null,f.createElement(Vl,{onClick:()=>r(!0),plusLabel:t("channel.create")},"Channels"),f.createElement(Zi,{open:n,setOpen:r,server:e})):f.createElement(Vl,null,"Channels")}function Xi({open:e,setOpen:n,server:r}){var a;const{t:l}=k(),[s,o]=g.exports.useState(null==(a=r.roles.find((e=>e.isDefault)))?void 0:a.id),i=r.roles.find((e=>e.id===s)),[c,m]=g.exports.useState(i.color),[d,u]=g.exports.useState(i.name),[p,v]=g.exports.useState(i.permissions);g.exports.useEffect((()=>{v(i.permissions),u(i.name),m(i.color)}),[i]);const[h]=function(e){const n={...On,...e};return t(ia,n)}({update(e,{data:{deleteRole:t}}){e.writeQuery({query:Ta,variables:{name:r.name},data:{server:{...r,roles:r.roles.filter((e=>e.id!==t))}}})}}),[b,{loading:E}]=function(e){const n={...On,...e};return t(oa,n)}(),x=!((e,t)=>{if(e.length!==t.length)return!1;for(const n of e)if(!t.includes(n))return!1;for(const n of t)if(!e.includes(n))return!1;return!0})(p,i.permissions)||d!==i.name||c!==i.color,y=[or.SendMessages,or.RestrictedChannels,or.PrivateChannels,or.ManageChannels,or.ManageServer,or.ManagePosts,or.ManageComments,or.DisplayRoleSeparately,or.Admin],[w,N]=g.exports.useState(!1),[C,$]=g.exports.useState(""),[U,{loading:I}]=function(e){const n={...On,...e};return t(sa,n)}({update(e,{data:{createRole:t}}){e.writeQuery({query:Ta,variables:{name:r.name},data:{server:{...r,roles:[t,...r.roles]}}})}}),S=()=>{C?U({variables:{input:{serverId:r.id,name:C}}}).then((e=>{$(""),N(!1),o(e.data.createRole.id)})):N(!1)};return f.createElement(Di,{open:e,close:()=>{n(!1)},closeOnOverlayClick:!0,large:!0},f.createElement("div",{className:"flex"},f.createElement("div",{className:"h-[40rem] max-h-screen w-60 dark:bg-gray-750 rounded-l-lg space-y-0.5 overflow-y-auto scrollbar-custom p-1.5"},w?f.createElement("div",{className:"relative py-1 px-1.5"},f.createElement("input",{className:"form-input-password",placeholder:"Name",autoFocus:!0,value:C,onChange:e=>$(e.target.value),onKeyDown:e=>{"Enter"===e.code&&d&&S()},type:"text",maxLength:100}),I?f.createElement(al,{className:"form-show-password-button"}):f.createElement(ct,{onClick:S,className:"form-show-password-button"})):f.createElement(el,{light:!0,onClick:()=>N(!0)},"Add Role",f.createElement(M,{className:"w-5 h-5 ml-auto"})),null==r?void 0:r.roles.map((e=>f.createElement(el,{key:e.id,light:!0,active:s===e.id,onClick:()=>o(e.id)},f.createElement("span",{style:{color:e.color}},e.name),!e.isDefault&&f.createElement(F,{content:"Delete Role"},f.createElement("div",{onClick:()=>{h({variables:{input:{roleId:e.id}}}),s===e.id&&o(r.roles.find((e=>e.isDefault)))},className:"group-hover:visible invisible ml-auto highlightable"},f.createElement(Vt,{className:"w-4 h-4"}))))))),f.createElement("div",{className:"relative py-5 px-7 w-full h-[40rem] overflow-y-auto max-h-screen scrollbar-thin dark:scrollbar-thumb-gray-850 scrollbar-track-transparent scrollbar-thumb-rounded-md rounded-tr-lg"},f.createElement("div",{className:"flex items-center justify-between pb-5"},f.createElement("div",{className:"text-primary text-base font-semibold"},"Edit Role - ",i.name,!!(null==i?void 0:i.isDefault)&&" (Default)")),f.createElement("div",{className:"mb-6"},f.createElement("label",{className:"label"},"Name"),f.createElement("input",{className:"form-input",placeholder:"Name",value:d,onChange:e=>u(e.target.value),id:"name"})),f.createElement("div",{className:"label"},"Color"),f.createElement("div",{className:"grid grid-cols-4 gap-2 mb-10 w-60"},Object.keys(os).map((e=>f.createElement("div",{key:e,className:"h-6 rounded relative cursor-pointer",style:{backgroundColor:os[e][500]},onClick:()=>{c===os[e][500]?m(null):m(os[e][500])}},c===os[e][500]&&f.createElement("div",{className:"inset-0 absolute flex items-center justify-center"},f.createElement(ct,{className:"w-4 h-4 text-white"})))))),f.createElement("div",{className:"label"},"Permissions"),f.createElement("div",{className:"space-y-0.5 divide-y divide-gray-700"},y.map((e=>f.createElement("div",{key:e,className:"flex w-full py-4 text-base cursor-pointer "+(p.includes(or.Admin)&&e!==or.Admin?"opacity-50":""),onClick:()=>{p.includes(or.Admin)&&e!==or.Admin||(p.includes(e)?v(p.filter((t=>t!==e))):v([...p,e]))}},f.createElement("div",null,f.createElement("div",{className:"font-medium"},l(`permissions.server.${e}.title`)),!!l(`permissions.server.${e}.description`)&&f.createElement("div",{className:"text-13 text-tertiary pt-1"},l(`permissions.server.${e}.description`))),f.createElement("div",{className:"pl-6 ml-auto"},f.createElement(Ti,{disabled:p.includes(or.Admin)&&e!==or.Admin,green:!0,checked:p.includes(e),onChange:()=>{p.includes(e)?v(p.filter((t=>t!==e))):v([...p,e])}})))))),f.createElement("div",{className:"h-16"}),f.createElement(Yt,null,!!x&&f.createElement(H.div,{initial:{y:"500px"},animate:{y:0},exit:{y:"500px"},transition:{ease:[.4,0,.2,1],duration:.15},className:"sticky z-50 flex items-center rounded-lg shadow-lg bottom-0 w-full dark:bg-gray-725 pr-3 pl-6 h-14 transform transition "},f.createElement("div",{className:"text-secondary text-sm"},"Changes not saved"),f.createElement("div",{className:"flex items-center space-x-3 ml-auto"},f.createElement("button",{type:"button",className:"form-button-cancel",onClick:()=>{u(i.name),m(i.color),v(i.permissions)}},"Discard"),f.createElement("button",{type:"button",disabled:!d||!x||E,className:"form-button-submit",onClick:()=>b({variables:{input:{roleId:s,name:d,color:c,permissions:p}}})},"Save",E&&f.createElement(al,{className:"w-5 h-5 text-primary ml-3"}))))))))}function ec(){const{server:e}=di(),[n]=Va(),[r,a]=g.exports.useState(!1),[l,s]=g.exports.useState(!1),[o,i]=sl({server:e,permissions:[or.ManageServer,or.PrivateChannels]}),[c,{loading:m}]=function(e){const n={...On,...e};return t(pa,n)}(),[d,{loading:u}]=va(),p=Eo(null==e?void 0:e.category);return e?f.createElement(f.Fragment,null,f.createElement(Oi,{open:r,setOpen:a,server:e}),f.createElement(Xi,{open:l,setOpen:s,server:e,key:e.id}),f.createElement(Za,null,e.bannerUrl?f.createElement("div",{className:"h-20 relative bg-center bg-cover bg-no-repeat "+(e.bannerUrl?"":"bg-gradient-to-br from-red-400 to-indigo-600"),style:e.bannerUrl?{backgroundImage:`url(${e.bannerUrl})`}:{}}):f.createElement("div",{className:"h-12 border-b dark:border-gray-850 shadow flex items-center px-5 text-base font-medium"},f.createElement(yo,{className:"h-4"})),f.createElement("div",{className:"px-1.5 pt-4"},f.createElement("div",{className:"shadow-inner dark:bg-gray-850 p-2.5 space-y-2.5 rounded"},f.createElement("div",{className:"flex items-center"},f.createElement(ls,{server:e,size:6,className:"rounded-md mr-2 dark:bg-gray-750"}),f.createElement("div",{className:"font-semibold text-primary pr-2.5 truncate"},e.displayName),!!n&&n.id!==e.owner.id&&f.createElement("button",{className:(v=e.isJoined,h=m||u,y(`\n  ml-auto\n  px-3\n  h-6\n  rounded\n  text-13\n  font-medium\n  focus:outline-none\n  ${v?"border border-gray-700 text-blue-500":"bg-blue-500 text-primary"}\n  ${h?"opacity-50":"opacity-100"}\n`)),type:"button",onClick:()=>{m||u||(e.isJoined?d({variables:{input:{serverId:e.id}}}):c({variables:{input:{serverId:e.id}}}))}},e.isJoined?"Leave":"Join")),f.createElement("div",{className:"text-13 text-secondary pb-1.5"},e.description||"No description"),f.createElement("div",{className:"flex items-center justify-between"},f.createElement("div",{className:"text-xs font-medium flex items-center text-tertiary"},f.createElement(T,{className:"w-4 h-4 mr-2.5"}),e.userCount," Member",1===e.userCount?"":"s"),f.createElement("div",{className:"text-xs font-medium flex items-center text-tertiary"},f.createElement(p,{className:"w-4 h-4 mr-2.5"}),e.category))),f.createElement(Vl,{plusLabel:"Create Post"},"Posts"),f.createElement(Ci,null),f.createElement(Ki,{server:e}),f.createElement("div",{className:"space-y-0.5"},e.channels.filter((e=>e.type!==zn.Private||i)).map((t=>f.createElement(Qi,{key:t.id,channel:t,server:e})))),o&&f.createElement(f.Fragment,null,f.createElement(Vl,null,"Admin"),f.createElement("div",{className:"space-y-0.5"},f.createElement(el,{onClick:()=>a(!0)},f.createElement(Gt,{className:"mr-3 w-5 h-5"}),"Edit Planet"),f.createElement(el,{onClick:()=>s(!0)},f.createElement(Wt,{className:"mr-3 w-5 h-5"}),"Manage Roles")))))):null;var v,h}function tc({channel:e}){var t;return f.createElement(Kl,{showDivider:!!(null==e?void 0:e.description),icon:f.createElement(ll,{className:"w-5 h-5"}),title:`${null!=(t=null==e?void 0:e.name)?t:""}`},(null==e?void 0:e.description)&&f.createElement("div",{className:"text-13 text-tertiary font-medium leading-5 truncate"},null==e?void 0:e.description),f.createElement("div",{className:"ml-auto pl-6 flex items-center space-x-5"},f.createElement(es,null)))}function nc({channelName:e}){var t;const{server:n,users:r}=di(),a=(null!=(t=null==n?void 0:n.channels)?t:[]).find((t=>t.name===e));return si(`channel/${null==a?void 0:a.id}`),n&&!a?f.createElement(Zt,{to:`/+${n.name}`}):f.createElement(zs,{header:f.createElement(tc,{channel:a}),rightSidebar:f.createElement(ii,{channel:a,serverUsers:r,server:n})},f.createElement(Be,null,f.createElement("title",null,a&&n?`#${null==a?void 0:a.name} – ${null==n?void 0:n.displayName}`:null)),!!a&&f.createElement(ai,{server:n,channel:a,users:r.map((e=>e.user))}))}const rc=()=>{var e,t,n,a;const[l]=Va(),{push:s}=U(),{pathname:o,hash:i}=I(),c=S(o,{path:"/:server"}),m=null==(e=null==c?void 0:c.params)?void 0:e.server.substring(1),d=m&&i?i.substring(1):null,u=S(o,{path:"/dm/:username"}),p=null==(n=null==(t=null==u?void 0:u.params)?void 0:t.username)?void 0:n.substring(1),v=S(o,{path:"/group/:groupId"}),h=null==(a=null==v?void 0:v.params)?void 0:a.groupId,[f,b]=g.exports.useState(!0);g.exports.useEffect((()=>{window.electron&&(window.electron.on("windowOpened",(()=>b(!0))),window.electron.on("windowClosed",(()=>b(!1))))}),[]),function(e){const t={...On,...e};r(_a,t)}({skip:!l,onSubscriptionData({client:e,subscriptionData:t}){var n,r,a,o,i,c,u,g;if(t.data){const v=t.data.messageChanged,b=null==v?void 0:v.added,E=null==v?void 0:v.deleted;let x;if(null==v||v.updated,b){x=b;const t=null==(n=x.channel)?void 0:n.id,c=null==(r=x.group)?void 0:r.id,u=x.toUser?null==(a=x.author)?void 0:a.id:void 0,g={query:Sa,variables:{userId:u,groupId:c,channelId:t,cursor:null}},v=e.cache.readQuery(g);v&&!v.messages.messages.map((e=>e.id)).includes(x.id)&&e.cache.writeQuery({...g,data:{messages:{...v.messages,messages:[...v.messages.messages,x]}}});const E=p&&x.toUser&&p===x.toUser.username,y=h&&x.group&&h===x.group.id,w=d&&x.channel&&x.channel.server.name===m&&d===x.channel.name;if(x.toUser&&!E){const t=e.cache.readFragment({fragment:vr,id:`User:${x.author.id}`});t&&e.cache.writeFragment({fragment:vr,id:`User:${x.author.id}`,data:{...t,unreadCount:t.unreadCount+1}})}else if(x.group&&!y){const t=e.cache.readFragment({fragment:hr,id:`User:${x.group.id}`});t&&e.cache.writeFragment({fragment:hr,id:`Group:${x.group.id}`,data:{...t,unreadCount:t.unreadCount+1}})}else if(x.channel&&!w){const t=e.cache.readFragment({fragment:dr,id:`Channel:${x.channel.id}`});if(t){const n={...t,isUnread:!0};(x.isEveryoneMentioned||l&&x.mentionedUsers.map((e=>e.id)).includes(l.id))&&(n.mentionCount=t.mentionCount+1),e.cache.writeFragment({fragment:dr,id:`Channel:${x.channel.id}`,data:n})}}if(x.author.id!==l.id){if((!window.electron||window.electron&&f)&&(y||E||w))return;if(x.type===Yn.Normal&&x.text&&(x.toUser||x.group||x.isEveryoneMentioned||l&&x.mentionedUsers.map((e=>e.id)).includes(l.id))){let e=`@${x.author.username}`;x.channel&&(e+=` · #${x.channel.name}`),x.group&&(e+=` · #${x.group.displayName}`),po({title:e,body:ac(x.text),icon:null!=(o=x.author.avatarUrl)?o:(window.electron?".":"")+"/icons/icon.png",timestamp:x.createdAt,onClick:()=>{u?s(`/dm/@${x.author.username}`):c?s(`/group/${c}`):t&&s(`/+${x.server.name}/#${x.channel.name}`),window.electron&&window.electron.show()}})}else x.type===Yn.FriendRequestReceived&&po({title:`@${x.author.username}`,body:"Sent a friend request",icon:null!=(i=x.author.avatarUrl)?i:(window.electron?".":"")+"/icons/icon.png",timestamp:x.createdAt,onClick:()=>{s("/friends"),window.electron&&window.electron.show()}})}}else if(E){x=E;const t=null==(c=x.channel)?void 0:c.id,n=null==(u=x.group)?void 0:u.id,r=x.toUser?null==(g=x.author)?void 0:g.id:void 0,a={query:Sa,variables:{userId:r,groupId:n,channelId:t,cursor:null}},l=e.cache.readQuery(a);l&&l.messages.messages.map((e=>e.id)).includes(x.id)&&e.cache.writeQuery({...a,data:{messages:{...l.messages,messages:l.messages.messages.filter((e=>e.id!==x.id))}}})}}}})};function ac(e){let t=document.createElement("DIV");return t.innerHTML=e,t.textContent||t.innerText||""}function lc(){var e,t;rc();const{pathname:n}=I(),r=S(n,{path:"/dm/:username"}),a=null==(t=null==(e=null==r?void 0:r.params)?void 0:e.username)?void 0:t.substring(1);return f.createElement(Qt,null,f.createElement(Jt,{path:"/"},f.createElement(Qt,null,f.createElement(Jt,{path:["/","/inbox","/dm/:username(@[A-Za-z0-9-_]+)","/:server(\\+[A-Za-z0-9_]+)","/:server(\\+[A-Za-z0-9_]+)/post/:postId","/:server(\\+[A-Za-z0-9_]+)/post/:postId/:slug","/explore"],exact:!0},f.createElement("div",{className:"flex-grow"},f.createElement("div",{className:"flex h-full",style:{height:"calc(100% - 1.375rem)"}},f.createElement(qi,null),f.createElement(Jt,{path:"/explore"},f.createElement(Uo,null)),f.createElement(Jt,{path:"/:server(\\+[A-Za-z0-9_]+)"},f.createElement(sc,null)),f.createElement(Jt,{exact:!0,path:["/","/inbox","/dm/:username(@[A-Za-z0-9-_]+)"]},f.createElement(Ui,null),f.createElement(Jt,{path:"/",exact:!0},f.createElement(bo,null)),f.createElement(Jt,{path:"/inbox"},f.createElement(Do,null)),f.createElement(Jt,{path:"/dm/:username(@[A-Za-z0-9-_]+)"},f.createElement(li,{username:a})))),f.createElement(Vi,null))),f.createElement(Jt,null,f.createElement(Wa,null)))))}function sc(){const{server:e}=Mt(),t=e.substring(1);return f.createElement(mi,{name:t},f.createElement(oc,null))}function oc(){var e;const{server:t,loading:n}=di(),{hash:r,pathname:a}=I(),l=r.substring(1),s=S(a,{path:"/:server/post/:postId"}),o=null==(e=null==s?void 0:s.params)?void 0:e.postId;return t||n?f.createElement(f.Fragment,null,f.createElement(ec,null),f.createElement(Jt,{path:"/:server(\\+[A-Za-z0-9_]+)",exact:!0,render:({location:e})=>e.hash?f.createElement(nc,{channelName:l}):f.createElement(ui,null)}),f.createElement(Jt,{path:["/:server(\\+[A-Za-z0-9_]+)/post/:postId","/:server(\\+[A-Za-z0-9_]+)/post/:postId/:slug"]},f.createElement(Ni,{postId:o}))):f.createElement(Wa,null)}function ic(){return Kt("(min-width: 1024px)"),f.createElement(Xt,{position:"bottom-center",toastOptions:{className:"toast",success:{className:"toast",iconTheme:{primary:"#059669"}},error:{className:"toast",iconTheme:{primary:"#EF4444"}}}})}function cc({post:e,show:t}){const n=e?e.title.split(" "):[],r=`${n.slice(0,9).join(" ")}${n.length>=9?"...":""}`;return f.createElement("div",null,f.createElement(Yt,null,t&&f.createElement(H.div,{initial:{scale:.75,opacity:0},animate:{scale:1,opacity:1},exit:{scale:.75,opacity:0},transition:{duration:.15,ease:"easeInOut"},className:"bg-blue-500 bg-opacity-75 truncate w-64 rounded-md shadow-lg text-white text-sm font-medium h-10 px-2 flex items-center"},f.createElement("div",{className:"truncate"},r))))}const mc={position:"fixed",pointerEvents:"none",zIndex:100,left:0,top:0};function dc(e,t,n,r){e||(e={x:0,y:0});let a=n.x-e.x,l=n.y-e.y,{x:s,y:o}=t||{x:r.x-e.x,y:r.y-e.y};const i=`translate(${s+a}px, ${o+l}px)`;return{transform:i,WebkitTransform:i}}var uc=g.exports.memo((function(){const[e,t]=g.exports.useState({x:0,y:0}),[n,r]=g.exports.useState({x:0,y:0}),a=e=>t({x:e.clientX,y:e.clientY}),l=e=>t({x:e.clientX,y:e.clientY});g.exports.useEffect((()=>(window.addEventListener("mousedown",a),window.addEventListener("mouseup",l),()=>{window.removeEventListener("mousedown",a),window.removeEventListener("mouseup",l)})));const{itemType:s,isDragging:o,item:i,initialOffset:c,currentOffset:m}=en((e=>({item:e.getItem(),itemType:e.getItemType(),initialOffset:e.getInitialSourceClientOffset(),currentOffset:e.getSourceClientOffset(),isDragging:e.isDragging()})));return f.createElement("div",{style:mc},f.createElement("div",{style:dc(c,m,e,n)},s===Ja&&f.createElement(cc,{post:i,show:o})))}));const pc="_window-button_19ru1_11",gc="_window-button-icon_19ru1_18";function vc(){const{close:e,minimize:t,maximize:n,unmaximize:r,isMaximized:a}=window.electron,[l,s]=g.exports.useState(a()),o=()=>s(a());return f.createElement("header",{className:"_titlebar_19ru1_1"},f.createElement(yo,{className:"h-3 text-tertiary"}),f.createElement("div",{className:"_window-controls_19ru1_6"},f.createElement("div",{className:`${pc} flex`,onClick:()=>{t(),o()}},f.createElement("img",{className:`${gc} hidden dark:block`,srcSet:"./icons/titlebar/min-w-10.png 1x, ./icons/titlebar/min-w-12.png 1.25x, ./icons/titlebar/min-w-15.png 1.5x, ./icons/titlebar/min-w-15.png 1.75x, ./icons/titlebar/min-w-20.png 2x, ./icons/titlebar/min-w-20.png 2.25x, ./icons/titlebar/min-w-24.png 2.5x, ./icons/titlebar/min-w-30.png 3x, ./icons/titlebar/min-w-30.png 3.5x",draggable:"false"}),f.createElement("img",{className:`${gc} block dark:hidden`,srcSet:"./icons/titlebar/min-k-10.png 1x, ./icons/titlebar/min-k-12.png 1.25x, ./icons/titlebar/min-k-15.png 1.5x, ./icons/titlebar/min-k-15.png 1.75x, ./icons/titlebar/min-k-20.png 2x, ./icons/titlebar/min-k-20.png 2.25x, ./icons/titlebar/min-k-24.png 2.5x, ./icons/titlebar/min-k-30.png 3x, ./icons/titlebar/min-k-30.png 3.5x",draggable:"false"})),f.createElement("div",{className:`${pc} ${l?"hidden":"flex"}`,onClick:()=>{n(),o()}},f.createElement("img",{className:`${gc} hidden dark:block`,srcSet:"./icons/titlebar/max-w-10.png 1x, ./icons/titlebar/max-w-12.png 1.25x, ./icons/titlebar/max-w-15.png 1.5x, ./icons/titlebar/max-w-15.png 1.75x, ./icons/titlebar/max-w-20.png 2x, ./icons/titlebar/max-w-20.png 2.25x, ./icons/titlebar/max-w-24.png 2.5x, ./icons/titlebar/max-w-30.png 3x, ./icons/titlebar/max-w-30.png 3.5x",draggable:"false"}),f.createElement("img",{className:`${gc} block dark:hidden`,srcSet:"./icons/titlebar/max-k-10.png 1x, ./icons/titlebar/max-k-12.png 1.25x, ./icons/titlebar/max-k-15.png 1.5x, ./icons/titlebar/max-k-15.png 1.75x, ./icons/titlebar/max-k-20.png 2x, ./icons/titlebar/max-k-20.png 2.25x, ./icons/titlebar/max-k-24.png 2.5x, ./icons/titlebar/max-k-30.png 3x, ./icons/titlebar/max-k-30.png 3.5x",draggable:"false"})),f.createElement("div",{className:`${pc} ${l?"flex":"hidden"}`,onClick:()=>{r(),o()}},f.createElement("img",{className:`${gc} hidden dark:block`,srcSet:"./icons/titlebar/restore-w-10.png 1x, ./icons/titlebar/restore-w-12.png 1.25x, ./icons/titlebar/restore-w-15.png 1.5x, ./icons/titlebar/restore-w-15.png 1.75x, ./icons/titlebar/restore-w-20.png 2x, ./icons/titlebar/restore-w-20.png 2.25x, ./icons/titlebar/restore-w-24.png 2.5x, ./icons/titlebar/restore-w-30.png 3x, ./icons/titlebar/restore-w-30.png 3.5x",draggable:"false"}),f.createElement("img",{className:`${gc} block dark:hidden`,srcSet:"./icons/titlebar/restore-k-10.png 1x, ./icons/titlebar/restore-k-12.png 1.25x, ./icons/titlebar/restore-k-15.png 1.5x, ./icons/titlebar/restore-k-15.png 1.75x, ./icons/titlebar/restore-k-20.png 2x, ./icons/titlebar/restore-k-20.png 2.25x, ./icons/titlebar/restore-k-24.png 2.5x, ./icons/titlebar/restore-k-30.png 3x, ./icons/titlebar/restore-k-30.png 3.5x",draggable:"false"})),f.createElement("div",{className:`${pc} _close-button_19ru1_32 flex`,onClick:()=>{e(),o()}},f.createElement("img",{className:`${gc} hidden dark:block`,srcSet:"./icons/titlebar/close-w-10.png 1x, ./icons/titlebar/close-w-12.png 1.25x, ./icons/titlebar/close-w-15.png 1.5x, ./icons/titlebar/close-w-15.png 1.75x, ./icons/titlebar/close-w-20.png 2x, ./icons/titlebar/close-w-20.png 2.25x, ./icons/titlebar/close-w-24.png 2.5x, ./icons/titlebar/close-w-30.png 3x, ./icons/titlebar/close-w-30.png 3.5x",draggable:"false"}),f.createElement("img",{className:`${gc} block dark:hidden`,srcSet:"./icons/titlebar/close-k-10.png 1x, ./icons/titlebar/close-k-12.png 1.25x, ./icons/titlebar/close-k-15.png 1.5x, ./icons/titlebar/close-k-15.png 1.75x, ./icons/titlebar/close-k-20.png 2x, ./icons/titlebar/close-k-20.png 2.25x, ./icons/titlebar/close-k-24.png 2.5x, ./icons/titlebar/close-k-30.png 3x, ./icons/titlebar/close-k-30.png 3.5x",draggable:"false"}))))}const{hasOwnProperty:hc}=Object.prototype;const fc=(e,t)=>{let n;try{n=JSON.stringify(e)}catch(r){const e=new nn(`Network request failed. ${t} is not serializable: ${r.message}`);throw e.parseError=r,e}return n};function bc(e,t,n){e.append(t,n,n.name)}const Ec=(e={})=>{let{uri:t="/graphql",fetch:n,includeExtensions:r,useGETForQueries:a,isExtractableFile:l=sn,formDataAppendFile:s=bc,...i}=e;on(n),n||(n=fetch);const c={http:{includeExtensions:r},options:i.fetchOptions,credentials:i.credentials,headers:i.headers};return new o((e=>{let r=rn(e,t);const o=e.getContext(),i={};if(o.clientAwareness){const{name:e,version:t}=o.clientAwareness;e&&(i["apollographql-client-name"]=e),t&&(i["apollographql-client-version"]=t)}const m={...i,...o.headers},u={http:o.http,options:o.fetchOptions,credentials:o.credentials,headers:m},{options:g,body:v}=((e,t,...n)=>{let r={...t.options,headers:t.headers,credentials:t.credentials},a=t.http||{};n.forEach((e=>{r={...r,...e.options,headers:{...r.headers,...e.headers}},e.credentials&&(r.credentials=e.credentials),a={...a,...e.http}}));const{operationName:l,extensions:s,variables:o,query:i}=e,c={operationName:l,variables:o};return a.includeExtensions&&(c.extensions=s),a.includeQuery&&(c.query=p(i)),{options:r,body:c}})(e,cn,c,u),{clone:h,files:f}=an(v,"",l),b=fc(h,"Payload");let E;if(!g.signal){const{controller:e,signal:t}=(()=>{if("undefined"==typeof AbortController)return{controller:!1,signal:!1};const e=new AbortController;return{controller:e,signal:e.signal}})();E=e,E&&(g.signal=t)}if(a&&!e.query.definitions.some((e=>"OperationDefinition"===e.kind&&"mutation"===e.operation))&&(g.method="GET"),"GET"===g.method){const{newURI:e,parseError:t}=function(e,n){const r=[],a=(e,t)=>{r.push(`${e}=${encodeURIComponent(t)}`)};if("query"in n&&a("query",n.query),n.operationName&&a("operationName",n.operationName),n.variables){let e;try{e=fc(n.variables,"Variables map")}catch(t){return{parseError:t}}a("variables",e)}if(n.extensions){let e;try{e=fc(n.extensions,"Extensions map")}catch(t){return{parseError:t}}a("extensions",e)}let l="",s=e;const o=e.indexOf("#");-1!==o&&(l=e.substr(o),s=e.substr(0,o));const i=-1===s.indexOf("?")?"?":"&";return{newURI:s+i+r.join("&")+l}}(r,v);if(t)return ln(t);r=e}else if(f.size){delete g.headers["content-type"];const e=new FormData;e.append("operations",b);const t={};let n=0;f.forEach((e=>{t[++n]=e})),e.append("map",JSON.stringify(t)),n=0,f.forEach(((t,r)=>{s(e,++n,r)})),g.body=e}else try{g.body=fc(v,"Payload")}catch(x){return ln(x)}return new d((t=>{var a;return n(r,g).then((t=>(e.setContext({response:t}),t))).then((a=e,e=>e.text().then((t=>{try{return JSON.parse(t)}catch(n){const r=n;throw r.name="ServerParseError",r.response=e,r.statusCode=e.status,r.bodyText=t,r}})).then((t=>(e.status>=300&&tn(e,t,`Response not successful: Received status code ${e.status}`),Array.isArray(t)||hc.call(t,"data")||hc.call(t,"errors")||tn(e,t,`Server response was missing for query '${Array.isArray(a)?a.map((e=>e.operationName)):a.operationName}'.`),t))))).then((e=>(t.next(e),t.complete(),e))).catch((e=>{"AbortError"!==e.name&&(e.result&&e.result.errors&&e.result.data&&t.next(e.result),t.error(e))})),()=>{E&&E.abort()}}))}))};const xc="https://api.joincomet.app/graphql",yc=fn((({graphQLErrors:e,networkError:t})=>{e&&e.forEach((e=>{const{message:t,locations:n,path:r}=e;En(e),console.log(`[GraphQL error]: Message: ${t}, Location: ${n}, Path: ${r}`),"Access denied! You need to be authorized to perform this action!"!==t&&$.error(a.t(t))})),t&&(console.log(`[Network error]: ${t}`),$.error(t.message))})),wc=new class extends o{constructor(e={}){super(Ec(e).request),this.options=e}}({uri:xc,headers:{token:localStorage.getItem("token")}}),Nc=bn(((e,{headers:t})=>{const n=localStorage.getItem("token");return{headers:n?{...t,token:n}:t}})),kc=new class extends o{constructor(){super(),this.client=i({url:"wss://api.joincomet.app/graphql",lazy:!1,connectionParams:()=>{const e=localStorage.getItem("token");return e?{token:e}:{}},on:{connected:()=>{Ba.status="connected"},error:()=>{Ba.status="error"},closed:()=>{Ba.status="closed"},connecting:()=>{Ba.status="connecting"}}})}wsFetcher(e){return c((t=>this.client.subscribe(e,t)))}request(e){const t=m();return new d((n=>u(t(this.wsFetcher({operationName:e.operationName,query:p(e.query),variables:e.variables})),n)))}},Cc=(new mn).split((({query:e})=>{const t=dn(e);return"OperationDefinition"===t.kind&&("subscription"===t.operation||un(t))}),kc,Nc.concat(wc));function $c(e,t){return e||t}const Uc=new vn({link:gn([new pn.SentryLink({uri:xc}),yc,Cc]),cache:new hn({typePolicies:{User:{fields:{servers:{merge:!1},folders:{merge:!1},relatedUsers:{merge:!1}}},Server:{fields:{channels:{merge:!1},folders:{merge:!1},owner:{merge:!0},permissions:{merge:!1},roles:{merge:!1}}},Post:{fields:{author:{merge:$c},serverUser:{merge:$c},server:{merge:$c}}},Comment:{fields:{author:{merge:$c},serverUser:{merge:$c}}},Message:{fields:{author:{merge:$c},serverUser:{merge:$c},channel:{merge:$c},group:{merge:$c},toUser:{merge:$c}}},Query:{fields:{serverUsers:{merge:!1},user:{merge:!0},server:{merge:!0},folder:{merge:!0},publicServers:{merge:!1}}}}})});var Ic="_meteor-1_oeidh_1",Sc="_meteor-2_oeidh_24",Pc="_meteor-3_oeidh_47",Fc="_meteor-4_oeidh_70",Mc="_meteor-5_oeidh_93",Rc="_meteor-6_oeidh_116",Ac="_meteor-7_oeidh_139";function Dc(){return f.createElement(f.Fragment,null,f.createElement("div",{className:Ic}),f.createElement("div",{className:Sc}),f.createElement("div",{className:Pc}),f.createElement("div",{className:Fc}),f.createElement("div",{className:Mc}),f.createElement("div",{className:Rc}),f.createElement("div",{className:Ac}))}function Tc(){return f.createElement("div",{className:"relative h-full w-full dark:bg-gray-750 flex flex-col items-center justify-center md:hidden p-6 text-center"},f.createElement(Dc,null),f.createElement("div",{className:"z-10 flex flex-col items-center"},f.createElement(yo,{className:"w-48"}),f.createElement("img",{alt:"astronaut",src:"/astronaut.png",className:"object-contain opacity-75 h-48 animate-float mt-5"}),f.createElement("div",{className:"pt-5 font-medium text-primary text-lg"},"Support for mobile devices is coming soon!"),f.createElement("div",{className:"text-tertiary text-base pt-2 font-medium"},"Please visit"," ",f.createElement(b,{to:"/",className:"text-accent hover:underline"},"joincomet.app")," ","from a laptop or desktop computer."),f.createElement("div",{className:"text-tertiary text-base pt-5 font-medium"},"Stay updated:"),f.createElement("div",{className:"space-y-4 text-tertiary text-sm font-medium pt-5"},f.createElement("a",{href:"https://discord.gg/NPCMGSm",target:"_blank",rel:"noopener noreferrer",className:"flex items-center"},f.createElement(xn,{className:"h-6 w-6 mr-4 text-tertiary"}),"Discord"),f.createElement("a",{href:"https://github.com/joincomet/comet",target:"_blank",rel:"noopener noreferrer",className:"flex items-center"},f.createElement(yn,{className:"h-6 w-6 mr-4 text-tertiary"}),"GitHub"),f.createElement("a",{href:"https://twitter.com/joincometapp",target:"_blank",rel:"noopener noreferrer",className:"flex items-center"},f.createElement(wn,{className:"h-6 w-6 mr-4 text-tertiary"}),"Twitter"))))}const Lc=/^[A-Za-z0-9-_]+$/gi;function Oc(){var e,n,r,a;const[l,s,o,i]=Zl(),[c,m]=g.exports.useState(!1),{handleSubmit:d,register:u,watch:p,reset:v,getValues:h,formState:{errors:b}}=Le({mode:"onChange",shouldUnregister:!0}),E=p("email"),x=p("username"),y=p("usernameOrEmail"),w=p("password"),N=p("confirmPassword"),[k,{loading:C}]=function(e){const n={...On,...e};return t(xa,n)}(),[$,{loading:U}]=function(e){const n={...On,...e};return t(ka,n)}(),I=()=>{v(),s(!1)},S=!(o?x&&x.length>=3&&x.length<=20&&Lc.test(x)&&(!E||E&&Nn(E))&&w&&w.length>=6&&N&&N===w:y&&w);return f.createElement(Di,{close:I,open:l,onSubmit:d((({usernameOrEmail:e,email:t,username:n,password:r})=>{if(o)k({variables:{input:{username:n,password:r,email:t||null}}}).then((({data:{createAccount:{accessToken:e,user:t}}})=>{localStorage.setItem("token",e),location.reload()}));else{const t=Nn(e)?{email:e}:{username:e};$({variables:{input:{...t,password:r}}}).then((({data:{login:{accessToken:e,user:t}}})=>{localStorage.setItem("token",e),location.reload()}))}})),buttons:f.createElement("button",{type:"submit",className:"form-button-submit",disabled:S},o&&C||!o&&U?f.createElement(al,{className:"w-5 h-5"}):f.createElement(Tt,{className:"w-5 h-5"}))},f.createElement("div",{className:"rounded-t-lg bg-gradient-to-r from-red-400 to-indigo-600 h-2"}),f.createElement("div",{className:"px-5 pt-2 pb-9 text-left"},f.createElement("div",{className:"pb-4 flex items-center"},f.createElement("div",{onClick:()=>{o&&(i(!1),v())},className:"text-sm cursor-pointer mr-3 py-3 border-b-2 inline-flex items-center justify-center px-3 "+(o?"border-transparent text-secondary":"dark:border-gray-300 text-primary")},"Log In"),f.createElement("div",{onClick:()=>{o||(i(!0),v())},className:"text-sm cursor-pointer py-3 border-b-2 inline-flex items-center justify-center px-3 "+(o?"dark:border-gray-300 text-primary":"border-transparent text-secondary")},"Create Account"),f.createElement("div",{className:"ml-auto"},f.createElement(yo,{className:"h-3.5 text-secondary"})),f.createElement(He,{className:"ml-5 w-5 h-5 text-tertiary highlightable",onClick:()=>I()})),f.createElement("div",{className:"space-y-4"},o?f.createElement(f.Fragment,null,f.createElement("div",null,f.createElement("div",{className:"relative"},f.createElement("input",{id:"username",...u("username",{required:!0,pattern:Lc,maxLength:20,minLength:3}),className:"form-input-icon",placeholder:"Username",minLength:3,maxLength:20}),f.createElement(G,{className:"form-input-icon-icon"})),"minLength"===(null==(e=b.username)?void 0:e.type)&&f.createElement("div",{className:"form-error"},"Username must be between 3 and 20 characters"),"pattern"===(null==(n=b.username)?void 0:n.type)&&f.createElement("div",{className:"form-error"},"Letters, numbers, dashes, and underscores only")),f.createElement("div",null,f.createElement("div",{className:"relative"},f.createElement("input",{id:"email",...u("email",{validate:{email:e=>!e||Nn(e)||"Invalid email"}}),className:"form-input-icon",placeholder:"Email (Optional)",type:"email"}),f.createElement(kn,{className:"form-input-icon-icon"})),"email"===(null==(r=b.email)?void 0:r.type)&&f.createElement("div",{className:"form-error"},b.email.message))):f.createElement("input",{id:"usernameOrEmail",...u("usernameOrEmail",{shouldUnregister:!0}),className:"form-input",placeholder:"Username or email"}),o?f.createElement(f.Fragment,null,f.createElement("div",null,f.createElement("div",{className:"relative"},f.createElement("input",{id:"password",...u("password",{required:!0,minLength:6}),className:"form-input-password",placeholder:"Password",type:c?"text":"password",minLength:6}),f.createElement(_i,{showPassword:c,setShowPassword:m})),"minLength"===(null==(a=b.password)?void 0:a.type)&&f.createElement("div",{className:"form-error"},"Password must be at least 6 characters")),f.createElement("div",null,f.createElement("div",{className:"relative"},f.createElement("input",{id:"confirmPassword",...u("confirmPassword",{required:!0,validate:{matchesPreviousPassword:e=>{const{password:t}=h();return t===e||"Passwords do not match"}}}),className:"form-input-password",placeholder:"Confirm Password",type:c?"text":"password"}),f.createElement(_i,{showPassword:c,setShowPassword:m})),!!w&&!!N&&w!==N&&f.createElement("div",{className:"form-error"},"Passwords do not match"))):f.createElement("div",{className:"relative"},f.createElement("input",{id:"password",...u("password",{required:!0}),className:"form-input",placeholder:"Password",type:c?"text":"password"}),f.createElement(_i,{showPassword:c,setShowPassword:m})))))}const zc=y("\n  flex\n  w-full\n  items-center\n  dark:hover:bg-gray-725\n  px-2\n  py-1\n  h-12\n  rounded\n  cursor-pointer\n"),_c="MutualServers";var qc=g.exports.memo((function(){var e,t;const[n]=Va(),[r,a,l,s]=Qa((e=>[e.dialogUserId,e.setDialogUserId,e.userDialogOpen,e.setUserDialogOpen]));k();const[o,i]=g.exports.useState(_c),{data:c}=za({variables:{id:r},skip:!r}),m=null==c?void 0:c.user,d=null!=(t=null==(e=null==c?void 0:c.user)?void 0:e.servers)?t:[],u=g.exports.useCallback((()=>{s(!1)}),[s]);return f.createElement(Yl,{closeOnOverlayClick:!0,isOpen:l,close:u},f.createElement("div",{onClick:e=>e.stopPropagation(),className:"rounded-lg max-w-xl w-full dark:bg-gray-850"},f.createElement("div",{className:"flex p-5"},f.createElement(ms,{user:m,size:20,showOnline:!0,dotClassName:"ring-5 dark:ring-gray-850 w-4 h-4"}),f.createElement("div",{className:"ml-5 flex w-full pt-5"},f.createElement("div",{className:"font-semibold text-lg text-primary leading-none"},null==m?void 0:m.username),(null==m?void 0:m.isOg)&&f.createElement(F,{content:"OG"},f.createElement("div",{className:"cursor-pointer ml-3 h-5 w-5"},f.createElement(xo,{className:"w-5 h-5"}))),r!==(null==n?void 0:n.id)&&f.createElement(f.Fragment,null,f.createElement("div",{className:"ml-auto"}),f.createElement(jl,{data:{type:xl,user:m},leftClick:!0},f.createElement("button",{className:"h-8 cursor-pointer highlightable ml-3 focus:outline-none"},f.createElement(se,{className:"w-5 h-5"})))))),n&&(null==m?void 0:m.id)===n.id?f.createElement("div",{className:"h-36 dark:bg-gray-750 rounded-b-lg p-5 flex items-center justify-center"},f.createElement("button",{className:"h-0 w-0 overflow-hidden"}),f.createElement("div",{className:"text-lg font-medium text-tertiary"},"Improved profile coming soon!")):f.createElement(f.Fragment,null,f.createElement("div",{className:"px-5 dark:border-gray-775 border-t h-14 flex items-center space-x-10"},f.createElement("button",{className:(p=o===_c,y(`\n  h-full\n  cursor-pointer\n  select-none\n  focus:outline-none\n  text-13\n  border-b-4\n  flex\n  items-center\n  box-content\n  ${p?"text-gray-900 dark:text-gray-100 dark:border-white":"text-gray-600 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300 border-transparent"}\n`)),onClick:()=>i(_c)},f.createElement("div",{className:"transform translate-y-0.5"},"Mutual Planets"))),f.createElement("div",{className:"rounded-b-lg dark:bg-gray-750 p-2 max-h-[15rem] min-h-[15rem] h-full scrollbar-custom"},o===_c&&(d.length>0?d.map((e=>f.createElement(b,{to:`/+${e.name}`,key:e.id,className:zc,onClick:()=>u()},f.createElement(ls,{server:e,size:10,className:"dark:bg-gray-800 rounded-full"}),f.createElement("div",{className:"pl-2.5 text-base text-secondary font-medium"},e.name)))):f.createElement(Ya,{className:"h-36"},"No mutual planets"))))));var p}));var Hc=Cn((function({history:e}){const t="Mac OS"===Ol();return f.createElement($n,{client:Uc},f.createElement(Un,null,f.createElement(Be,null,f.createElement("meta",{charSet:"UTF-8"}),f.createElement("link",{rel:"icon",type:"image/svg+xml",href:"/logos/logo_icon.svg"}),f.createElement("meta",{name:"viewport",content:"width=device-width, initial-scale=1.0"}),f.createElement("title",null,"Comet – All-in-one chat & forums for communities")),f.createElement(Ga,null,f.createElement(In,{history:e},f.createElement(Bl,null,f.createElement(Sn,{backend:Pn,options:{enableTouchEvents:!1,enableMouseEvents:!0}},f.createElement(Tc,null),f.createElement(ic,null),f.createElement(uc,null),window.electron&&!t&&f.createElement(vc,null),f.createElement(Oc,null),f.createElement(qc,null),f.createElement("div",{style:window.electron?{height:t?"100%":"calc(100% - 1.375rem)"}:{height:"100%"},className:"hidden md:flex"},f.createElement(lc,null))))))))}));const Bc=Fn();Mn({dsn:"https://1cff6f3dfcb844e8bd098e35a0498e5a@o683674.ingest.sentry.io/5771326",integrations:[new Rn.BrowserTracing({routingInstrumentation:An(Bc),traceFetch:!1})],release:"web@0.0.77",tracesSampleRate:1,beforeBreadcrumb:pn.excludeGraphQLFetch}),window.electron&&document.documentElement.classList.add("electron"),Dn.render(f.createElement(Hc,{history:Bc}),document.getElementById("root"));
