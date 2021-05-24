import{g as e,u as t,a as n,b as r,i as a,B as l,c as s,A as o,d as i,m as c,e as m,z as d,f as u,p,r as g,s as v,h,R as f,L as b,j as x,N as E,k as y,H as w,l as N,n as k,o as C,q as $,t as U,v as S,w as P,x as I,y as F,C as M,T as R,D as A,E as D,S as O,F as L,G as T,I as q,J as z,K as H,M as _,O as B,P as j,Q as G,U as V,V as Y,W,X as Q,Y as J,Z,_ as K,$ as X,a0 as ee,a1 as te,a2 as ne,a3 as re,a4 as ae,a5 as le,a6 as se,a7 as oe,a8 as ie,a9 as ce,aa as me,ab as de,ac as ue,ad as pe,ae as ge,af as ve,ag as he,ah as fe,ai as be,aj as xe,ak as Ee,al as ye,am as we,an as Ne,ao as ke,ap as Ce,aq as $e,ar as Ue,as as Se,at as Pe,au as Ie,av as Fe,aw as Me,ax as Re,ay as Ae,az as De,aA as Oe,aB as Le,aC as Te,aD as qe,aE as ze,aF as He,aG as _e,aH as Be,aI as je,aJ as Ge,aK as Ve,aL as Ye,aM as We,aN as Qe,aO as Je,aP as Ze,aQ as Ke,aR as Xe,aS as et,aT as tt,aU as nt,aV as rt,aW as at,aX as lt,aY as st,aZ as ot,a_ as it,a$ as ct,b0 as mt,b1 as dt,b2 as ut,b3 as pt,b4 as gt,b5 as vt,b6 as ht,b7 as ft,b8 as bt,b9 as xt,ba as Et,bb as yt,bc as wt,bd as Nt,be as kt,bf as Ct,bg as $t,bh as Ut,bi as St,bj as Pt,bk as It,bl as Ft,bm as Mt,bn as Rt,bo as At,bp as Dt,bq as Ot,br as Lt,bs as Tt,bt as qt,bu as zt,bv as Ht,bw as _t,bx as Bt,by as jt,bz as Gt,bA as Vt,bB as Yt,bC as Wt,bD as Qt,bE as Jt,bF as Zt,bG as Kt,bH as Xt,bI as en,bJ as tn,bK as nn,bL as rn,bM as an,bN as ln,bO as sn,bP as on,bQ as cn,bR as mn,bS as dn,bT as un,bU as pn,bV as gn,bW as vn,bX as hn,bY as fn,bZ as bn,b_ as xn,b$ as En,c0 as yn,c1 as wn,c2 as Nn,c3 as kn,c4 as Cn,c5 as $n,c6 as Un,c7 as Sn,c8 as Pn,c9 as In,ca as Fn,cb as Mn,cc as Rn}from"./vendor.029de914.js";const An={entityNotFound:"{{replace}} not found!",invalidUserAuth:"'USER' authorization can only be used on User entity",notLoggedIn:"Not logged in",fileSize:"File size must be less than {{replace}}MB",channelPermissions:"(useChannelPermissions) channelPermissions and serverPermissions must have same length",folder:{deleted:"Folder has been deleted",notOwner:"You do not own this folder",nameTooLong:"Name cannot be longer than 300 characters",alreadyExists:"You already have a folder with that name",noPermission:"You do not have permission to modify this folder.",alreadyAdded:"This post is already in this folder.",cannotEdit:"Cannot edit Read Later or Favorites folders.",cannotDelete:"Cannot delete Read Later or Favorites folders.",cannotCreate:"Cannot create Read Later or Favorites folders.",notCollaborative:"This folder is not collaborative.",notInFolder:"That post is not in this folder.",owner:"You are the owner of this folder",private:"That folder is private.",friends:"Must be friends with this folder's owner"},message:{notAuthor:"You are not the author of this message",missingArgs:"Must provide channelId, groupId, or userId",notSentInChannel:"Message was not sent in a channel",empty:"Message cannot be empty",textOrFile:"Must provide text or a file"},comment:{notAuthor:"You are not the author of this comment",empty:"Comment cannot be empty",alreadyDeleted:"Comment already deleted",alreadyVoted:"You have already voted this comment"},post:{notAuthor:"You are not the author of this post",alreadyVoted:"You have already voted this post",alreadyPinned:"Post is already pinned",notPinned:"Post is not pinned"},group:{maxSize:"Max group size is 10 users",notJoined:"You are not in this group"},server:{notJoined:"You have not joined this planet",banned:"You are banned from this planet",alreadyJoined:"You have already joined this planet",missingPermission:"Missing planet permission {{replace}}",notOwner:"Must be planet owner",inviteRequired:"Invite required to join this planet",inviteExpired:"This invite has expired."},channel:{missingPermission:"Missing channel permission {{replace}}"},user:{blocking:"You are blocking this user",blocked:"This user has blocked you",friendRequestNotSent:"You have not sent a friend request to this user",friendRequestNotReceived:"You have not received a friend request from this user",notFriends:"You are not friends with this user",alreadyBlocking:"You are already blocking this user",notBlocking:"You are not blocking this user"},upload:{invalidMime:"Image must be PNG or JPEG"},login:{invalid:"Invalid login",invalidEmail:"Invalid email address",emailInUse:"Email already in use",illegalName:"Name cannot contain {{replace}}",nameLength:"Name must be 2-32 characters",banned:"Banned{{replace}}",wrongPassword:"Incorrect password",usernameTaken:"Username taken"},notif:{notYours:"This is not your notification"}},Dn={hide:"Hide Folders",show:"Show Folders",favorites:"Favorites",readLater:"Read Later",added:"Added to {{name}}!",name:"Name",postCount:"{{count}} Post",postCount_plural:"{{count}} Posts",createdBy:"Created by",userFolder:"User Folder",serverFolder:"Planet Folder",collaborative:"Collaborative",user:{title:"Your Folders",create:"Create Folder"},server:{title:"{{name}}'s Folders",create:"Create Planet Folder"},context:{follow:"Follow Folder",unfollow:"Unfollow Folder",delete:"Delete Folder",copyLink:"Copy Folder Link",edit:"Edit Folder",collaborative:"Collaborative",changeVisibility:"Change Visibility",visibility:{public:"Public",friends:"Friends Only",private:"Private",unlisted:"Unlisted"}}},On={};var Ln,Tn,qn,zn,Hn,_n,Bn,jn,Gn,Vn,Yn,Wn,Qn,Jn,Zn,Kn,Xn,er,tr,nr,rr,ar,lr,sr;(Tn=Ln||(Ln={})).Private="Private",Tn.Public="Public",Tn.Restricted="Restricted",(zn=qn||(qn={})).Blue="Blue",zn.Green="Green",zn.Indigo="Indigo",zn.Pink="Pink",zn.Purple="Purple",zn.Red="Red",zn.Yellow="Yellow",(_n=Hn||(Hn={})).New="New",_n.Top="Top",(jn=Bn||(Bn={})).Friends="Friends",jn.Private="Private",jn.Public="Public",jn.Unlisted="Unlisted",(Vn=Gn||(Gn={})).FriendRequestReceived="FriendRequestReceived",Vn.Initial="Initial",Vn.Join="Join",Vn.Left="Left",Vn.Normal="Normal",(Wn=Yn||(Yn={})).Away="Away",Wn.DoNotDisturb="DoNotDisturb",Wn.Offline="Offline",Wn.Online="Online",(Jn=Qn||(Qn={})).Added="Added",Jn.Hot="Hot",Jn.New="New",Jn.Top="Top",(Kn=Zn||(Zn={})).All="All",Kn.Day="Day",Kn.Hour="Hour",Kn.Month="Month",Kn.Week="Week",Kn.Year="Year",(er=Xn||(Xn={})).New="New",er.Top="Top",(nr=tr||(tr={})).Blocked="Blocked",nr.Blocking="Blocking",nr.FriendRequestIncoming="FriendRequestIncoming",nr.FriendRequestOutgoing="FriendRequestOutgoing",nr.Friends="Friends",nr.None="None",(ar=rr||(rr={})).Arts="Arts",ar.Business="Business",ar.Culture="Culture",ar.Discussion="Discussion",ar.Entertainment="Entertainment",ar.Gaming="Gaming",ar.Health="Health",ar.Hobbies="Hobbies",ar.Lifestyle="Lifestyle",ar.Memes="Memes",ar.Meta="Meta",ar.News="News",ar.Other="Other",ar.Politics="Politics",ar.Programming="Programming",ar.Science="Science",ar.Sports="Sports",ar.Technology="Technology",(sr=lr||(lr={})).AddPostToFolder="AddPostToFolder",sr.Admin="Admin",sr.DisplayRoleSeparately="DisplayRoleSeparately",sr.ManageChannels="ManageChannels",sr.ManageComments="ManageComments",sr.ManageFolders="ManageFolders",sr.ManageMessages="ManageMessages",sr.ManagePosts="ManagePosts",sr.ManageServer="ManageServer",sr.ManageUsers="ManageUsers",sr.PrivateChannels="PrivateChannels",sr.RestrictedChannels="RestrictedChannels",sr.SendMessages="SendMessages";const or=e`
    fragment Metadata on LinkMetadata {
  author
  date
  description
  image
  logo
  publisher
  title
  twitterCard
  url
  domain
  themeColor
}
    `,ir=e`
    fragment Comment on Comment {
  id
  parentComment {
    id
  }
  text
  voteCount
  isVoted
  isDeleted
  createdAt
  updatedAt
  linkMetadatas {
    ...Metadata
  }
}
    ${or}`,cr=e`
    fragment User on User {
  id
  username
  avatarUrl
  isOnline
  onlineStatus
  isCurrentUser
  relationshipStatus
  color
}
    `,mr=e`
    fragment Channel on Channel {
  id
  name
  description
  isUnread
  mentionCount
  type
}
    `,dr=e`
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
  owner {
    id
  }
  permissions
  channels {
    ...Channel
  }
}
    ${mr}`,ur=e`
    fragment Group on Group {
  id
  name
  displayName
  avatarUrl
  unreadCount
  lastMessageAt
}
    `,pr=e`
    fragment CurrentUser on User {
  ...User
  isAdmin
  email
  servers {
    ...Server
  }
  relatedUsers {
    ...User
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
    ${cr}
${dr}
${ur}`,gr=e`
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
    `,vr=e`
    fragment Message on Message {
  id
  text
  createdAt
  updatedAt
  type
  image {
    originalUrl
    popupUrl
    popupWidth
    popupHeight
    smallUrl
    smallWidth
    smallHeight
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
    ${or}`,hr=e`
    fragment Post on Post {
  id
  title
  isPinned
  text
  linkUrl
  relativeUrl
  commentCount
  voteCount
  isVoted
  thumbnailUrl
  domain
  isDeleted
  createdAt
  updatedAt
  linkMetadata {
    ...Metadata
  }
  images {
    url
    linkUrl
    caption
  }
}
    ${or}`,fr=e`
    fragment RelatedUser on User {
  ...User
  showChat
  unreadCount
  lastMessageAt
}
    ${cr}`,br=e`
    fragment Role on Role {
  id
  name
  color
  permissions
  isDefault
}
    `,xr=e`
    fragment ServerUser on ServerUser {
  role {
    ...Role
  }
  user {
    ...User
  }
}
    ${br}
${cr}`,Er=e`
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
    ${cr}
${xr}`,yr=e`
    mutation createChannel($input: CreateChannelInput!) {
  createChannel(input: $input) {
    ...Channel
  }
}
    ${mr}`;e`
    mutation updateChannel($input: UpdateChannelInput!) {
  updateChannel(input: $input) {
    ...Channel
  }
}
    ${mr}`;const wr=e`
    mutation deleteChannel($input: DeleteChannelInput!) {
  deleteChannel(input: $input)
}
    `;e`
    mutation moveChannel($input: MoveChannelInput!) {
  moveChannel(input: $input) {
    ...Channel
  }
}
    ${mr}`;const Nr=e`
    mutation readChannel($input: ReadChannelInput!) {
  readChannel(input: $input) {
    ...Channel
  }
}
    ${mr}`;const kr=e`
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
    ${ir}
${cr}
${xr}`;e`
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
    ${ir}
${cr}
${xr}`;const Cr=e`
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
    ${ir}
${cr}
${xr}`;const $r=e`
    mutation voteComment($input: VoteCommentInput!) {
  voteComment(input: $input) {
    ...Comment
    author {
      ...User
    }
    serverUser {
      ...ServerUser
    }
  }
}
    ${ir}
${cr}
${xr}`;const Ur=e`
    mutation unvoteComment($input: UnvoteCommentInput!) {
  unvoteComment(input: $input) {
    ...Comment
    author {
      ...User
    }
    serverUser {
      ...ServerUser
    }
  }
}
    ${ir}
${cr}
${xr}`;const Sr=e`
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
    ${ir}
${cr}
${xr}`;const Pr=e`
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
    ${ir}
${cr}
${xr}`;e`
    mutation createFolder($input: CreateFolderInput!) {
  createFolder(input: $input) {
    ...Folder
  }
}
    ${gr}`;const Ir=e`
    mutation updateFolder($input: UpdateFolderInput!) {
  updateFolder(input: $input) {
    ...Folder
  }
}
    ${gr}`;const Fr=e`
    mutation deleteFolder($input: DeleteFolderInput!) {
  deleteFolder(input: $input)
}
    `;e`
    mutation moveServerFolder($input: MoveServerFolderInput!) {
  moveServerFolder(input: $input) {
    ...Folder
  }
}
    ${gr}`,e`
    mutation moveUserFolder($input: MoveUserFolderInput!) {
  moveUserFolder(input: $input) {
    ...Folder
  }
}
    ${gr}`;const Mr=e`
    mutation followFolder($input: FollowFolderInput!) {
  followFolder(input: $input) {
    ...Folder
  }
}
    ${gr}`;const Rr=e`
    mutation unfollowFolder($input: UnfollowFolderInput!) {
  unfollowFolder(input: $input) {
    ...Folder
  }
}
    ${gr}`;e`
    mutation addPostToFolder($input: AddPostToFolderInput!) {
  addPostToFolder(input: $input) {
    ...Folder
  }
}
    ${gr}`,e`
    mutation removePostFromFolder($input: RemovePostFromFolderInput!) {
  removePostFromFolder(input: $input) {
    ...Folder
  }
}
    ${gr}`,e`
    mutation createGroup($input: CreateGroupInput!) {
  createGroup(input: $input) {
    ...Group
  }
}
    ${ur}`,e`
    mutation updateGroup($input: UpdateGroupInput!) {
  updateGroup(input: $input) {
    ...Group
  }
}
    ${ur}`,e`
    mutation leaveGroup($input: LeaveGroupInput!) {
  leaveGroup(input: $input)
}
    `,e`
    mutation readGroup($input: ReadGroupInput!) {
  readGroup(input: $input) {
    ...Group
  }
}
    ${ur}`,e`
    mutation addUserToGroup($input: AddUserToGroupInput!) {
  addUserToGroup(input: $input) {
    ...Group
  }
}
    ${ur}`,e`
    mutation removeUserFromGroup($input: RemoveUserFromGroupInput!) {
  removeUserFromGroup(input: $input) {
    ...Group
  }
}
    ${ur}`;const Ar=e`
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
    ${vr}
${cr}
${xr}`;function Dr(e){const t={...On,...e};return n(Ar,t)}e`
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
    ${vr}
${cr}
${xr}`;const Or=e`
    mutation deleteMessage($input: DeleteMessageInput!) {
  deleteMessage(input: $input)
}
    `;const Lr=e`
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
    ${vr}
${cr}
${xr}`;function Tr(e){const t={...On,...e};return n(Lr,t)}const qr=e`
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
    ${vr}
${cr}
${xr}`;function zr(e){const t={...On,...e};return n(qr,t)}const Hr=e`
    mutation updateTyping($input: TypingInput!) {
  updateTyping(input: $input)
}
    `;const _r=e`
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
    ${hr}
${cr}
${xr}`;e`
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
    ${hr}
${cr}
${xr}`;const Br=e`
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
    ${hr}
${cr}
${xr}`;const jr=e`
    mutation votePost($input: VotePostInput!) {
  votePost(input: $input) {
    ...Post
    author {
      ...User
    }
    serverUser {
      ...ServerUser
    }
  }
}
    ${hr}
${cr}
${xr}`;const Gr=e`
    mutation unvotePost($input: UnvotePostInput!) {
  unvotePost(input: $input) {
    ...Post
    author {
      ...User
    }
    serverUser {
      ...ServerUser
    }
  }
}
    ${hr}
${cr}
${xr}`;const Vr=e`
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
    ${hr}
${cr}
${xr}`;const Yr=e`
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
    ${hr}
${cr}
${xr}`;const Wr=e`
    mutation createFriendRequest($input: CreateFriendRequestInput!) {
  createFriendRequest(input: $input) {
    ...User
    folders {
      ...Folder
    }
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
    ${cr}
${gr}
${fr}`;function Qr(e){const t={...On,...e};return n(Wr,t)}const Jr=e`
    mutation deleteFriendRequest($input: DeleteFriendRequestInput!) {
  deleteFriendRequest(input: $input) {
    ...User
    folders {
      ...Folder
    }
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
    ${cr}
${gr}
${fr}`;function Zr(e){const t={...On,...e};return n(Jr,t)}const Kr=e`
    mutation answerFriendRequest($input: AnswerFriendRequestInput!) {
  answerFriendRequest(input: $input) {
    ...RelatedUser
  }
}
    ${fr}`;function Xr(e){const t={...On,...e};return n(Kr,t)}const ea=e`
    mutation blockUser($input: BlockUserInput!) {
  blockUser(input: $input) {
    ...RelatedUser
  }
}
    ${fr}`;const ta=e`
    mutation unblockUser($input: UnblockUserInput!) {
  unblockUser(input: $input) {
    ...RelatedUser
  }
}
    ${fr}`;const na=e`
    mutation removeFriend($input: RemoveFriendInput!) {
  removeFriend(input: $input) {
    ...RelatedUser
  }
}
    ${fr}`;function ra(e){const t={...On,...e};return n(na,t)}const aa=e`
    mutation readDm($input: ReadDmInput!) {
  readDm(input: $input) {
    ...RelatedUser
  }
}
    ${fr}`;function la(e){const t={...On,...e};return n(aa,t)}const sa=e`
    mutation openDm($input: OpenDmInput!) {
  openDm(input: $input) {
    ...RelatedUser
  }
}
    ${fr}`;const oa=e`
    mutation closeDm($input: CloseDmInput!) {
  closeDm(input: $input) {
    ...RelatedUser
  }
}
    ${fr}`;function ia(e){const t={...On,...e};return n(oa,t)}const ca=e`
    mutation markReplyRead($input: MarkReplyReadInput!) {
  markReplyRead(input: $input) {
    ...Reply
  }
}
    ${Er}`;e`
    mutation markReplyUnread($input: MarkReplyUnreadInput!) {
  markReplyUnread(input: $input) {
    ...Reply
  }
}
    ${Er}`;const ma=e`
    mutation createRole($input: CreateRoleInput!) {
  createRole(input: $input) {
    ...Role
  }
}
    ${br}`;const da=e`
    mutation updateRole($input: UpdateRoleInput!) {
  updateRole(input: $input) {
    ...Role
  }
}
    ${br}`;const ua=e`
    mutation deleteRole($input: DeleteRoleInput!) {
  deleteRole(input: $input)
}
    `;e`
    mutation setUserRole($input: SetUserRoleInput!) {
  setUserRole(input: $input) {
    ...ServerUser
  }
}
    ${xr}`;const pa=e`
    mutation createServer($input: CreateServerInput!) {
  createServer(input: $input) {
    ...Server
    roles {
      ...Role
    }
    folders {
      ...Folder
    }
  }
}
    ${dr}
${br}
${gr}`;const ga=e`
    mutation updateServer($input: UpdateServerInput!) {
  updateServer(input: $input) {
    ...Server
  }
}
    ${dr}`;const va=e`
    mutation deleteServer($input: DeleteServerInput!) {
  deleteServer(input: $input)
}
    `;e`
    mutation moveServer($input: MoveServerInput!) {
  moveServer(input: $input)
}
    `;const ha=e`
    mutation joinServer($input: JoinServerInput!) {
  joinServer(input: $input) {
    ...Server
  }
}
    ${dr}`;const fa=e`
    mutation leaveServer($input: LeaveServerInput!) {
  leaveServer(input: $input) {
    ...Server
  }
}
    ${dr}`;function ba(e){const t={...On,...e};return n(fa,t)}e`
    mutation readServer($input: ReadServerInput!) {
  readServer(input: $input) {
    ...Server
  }
}
    ${dr}`;const xa=e`
    mutation banUserFromServer($input: BanUserFromServerInput!) {
  banUserFromServer(input: $input)
}
    `;e`
    mutation unbanUserFromServer($input: UnbanUserFromServerInput!) {
  unbanUserFromServer(input: $input)
}
    `;const Ea=e`
    mutation kickUserFromServer($input: KickUserFromServerInput!) {
  kickUserFromServer(input: $input)
}
    `;const ya=e`
    mutation createAccount($input: CreateAccountInput!) {
  createAccount(input: $input) {
    accessToken
    user {
      ...CurrentUser
    }
  }
}
    ${pr}`;const wa=e`
    mutation changePassword($input: ChangePasswordInput!) {
  changePassword(input: $input) {
    ...CurrentUser
  }
}
    ${pr}`;const Na=e`
    mutation changeUserAvatar($input: ChangeUserAvatarInput!) {
  changeUserAvatar(input: $input) {
    ...CurrentUser
  }
}
    ${pr}`;const ka=e`
    mutation deleteAccount($input: DeleteAccountInput!) {
  deleteAccount(input: $input)
}
    `;const Ca=e`
    mutation login($input: LoginInput!) {
  login(input: $input) {
    accessToken
    user {
      ...CurrentUser
    }
  }
}
    ${pr}`;const $a=e`
    mutation changeOnlineStatus($input: ChangeOnlineStatusInput!) {
  changeOnlineStatus(input: $input) {
    ...CurrentUser
  }
}
    ${pr}`;e`
    mutation globalBan($input: GlobalBanInput!) {
  globalBan(input: $input)
}
    `;const Ua=e`
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
    ${ir}
${cr}
${xr}`;const Sa=e`
    query currentUser @live {
  user {
    ...CurrentUser
  }
}
    ${pr}`;e`
    query folder($id: ID!) @live {
  folder(id: $id) {
    ...Folder
    postCount
    owner {
      ...User
    }
    server {
      ...Server
    }
  }
}
    ${gr}
${cr}
${dr}`;const Pa=e`
    query getLinkMeta($linkUrl: String!) {
  getLinkMeta(linkUrl: $linkUrl) {
    ...Metadata
  }
}
    ${or}`;const Ia=e`
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
    ${vr}
${cr}
${xr}`;const Fa=e`
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
      ...Server
      permissions
    }
  }
}
    ${hr}
${cr}
${xr}
${dr}`;const Ma=e`
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
        ...Server
      }
    }
  }
}
    ${hr}
${cr}
${xr}
${dr}`;const Ra=e`
    query publicServers($sort: PublicServersSort, $category: ServerCategory, $featured: Boolean) {
  publicServers(sort: $sort, category: $category, featured: $featured) {
    ...Server
    onlineCount
  }
}
    ${dr}`;function Aa(e){const n={...On,...e};return t(Ra,n)}const Da=e`
    query replies($input: RepliesInput!) {
  replies(input: $input) {
    ...Reply
  }
}
    ${Er}`;function Oa(e){const n={...On,...e};return t(Da,n)}const La=e`
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
    folders {
      ...Folder
    }
  }
}
    ${dr}
${mr}
${br}
${gr}`;const Ta=e`
    query serverUsers($serverId: ID!) @live {
  serverUsers(serverId: $serverId) {
    ...ServerUser
  }
}
    ${xr}`;const qa=e`
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
    ${cr}`;function za(e){const n={...On,...e};return t(qa,n)}e`
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
    ${ir}`;const Ha=e`
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
    ${vr}
${cr}
${xr}`;e`
    subscription PostChanged {
  postChanged {
    added {
      ...Post
      folders {
        id
      }
    }
    updated {
      ...Post
    }
    deleted {
      ...Post
      folders {
        id
      }
    }
  }
}
    ${hr}`,e`
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
    ${Er}`;const _a=e`
    subscription typingUpdated($userId: ID, $groupId: ID, $channelId: ID) {
  typingUpdated(userId: $userId, groupId: $groupId, channelId: $channelId) {
    typingUserId
    isTyping
  }
}
    `;const Ba={en:{translation:{home:"Home",copyId:"Copy ID",markRead:"Mark As Read",continue:"Continue",more:"More",updateAvailable:"Update Available!",auth:{login:"Login",createAccount:"Create an Account",welcomeBack:"Welcome Back!",name:"Name",password:"Password",email:"Email",alreadyHaveAccount:"Already have an account?",register:"Register",needAccount:"Need an account?"},category:{Featured:"Featured",Arts:"Arts",Business:"Business",Culture:"Culture",Discussion:"Discussion",Entertainment:"Entertainment",Gaming:"Gaming",Health:"Health",Hobbies:"Hobbies",Lifestyle:"Lifestyle",Memes:"Memes",Meta:"Meta",News:"News",Politics:"Politics",Programming:"Programming",Science:"Science",Sports:"Sports",Technology:"Technology",Other:"Other"},channel:{title:"Channels",togglePrivate:"Private Channel",hideUsers:"Hide Users",showUsers:"Show Users",create:"Create Channel",edit:"Edit Channel",context:{markRead:"Mark As Read",delete:"Delete Channel",edit:"Edit Channel",mute:"Mute Channel"}},comment:{noPermission:"You do not have permission to view comments.",reply:"Reply",cancelReply:"Cancel Reply",hideReplies:"Hide Replies",showReplies:"Show Replies",create:{submit:"Comment",cancel:"Cancel"},context:{copyLink:"Copy Comment Link",delete:"Delete Comment",reply:"Reply",vote:"Add Rocket",unvote:"Remove Rocket",votePermission:"This planet does not allow you to rocket comments.",pin:"Pin Comment",unpin:"Unpin Comment",edit:"Edit Comment"}},dm:{title:"Direct Messages",create:"Create DM",markRead:"Mark Read",shared:"Shared with {{user.username}}!"},error:An,explore:{title:"Explore",categories:"Categories",all:"All"},folder:Dn,inbox:{title:"Inbox",tab:{all:"All",unread:"Unread"}},infinity:{comingSoon:"Comet Infinity is coming soon!",title:"Infinity"},message:{message:"Message",pinned:"Pinned Messages",upload:"Upload a File",typing:{one:"{{name}} is typing...",two:"{{name1}} and {{name2}} are typing...",three:"{{name1}}, {{name2}}, and {{name3}} are typing...",several:"Several people are typing..."},context:{copyLink:"Copy Message Link",pin:"Pin Message",unpin:"Unpin Message",edit:"Edit Message",delete:"Delete Message"}},permissions:{server:{[lr.ManageChannels]:{title:"Manage Channels",description:"Allows members to create, edit, or delete channels."},[lr.ManageServer]:{title:"Manage Roles",description:"Allows members to create new roles and edit or delete roles lower than their highest role. Also allows members to change permissions of individual channels that they have access to."},[lr.ManageServer]:{title:"Manage Planet",description:"Allows members to change this planet's name, description, icon, and banner image."},[lr.SendMessages]:{title:"Send Messages",description:"Allows members to send messages in text channels."},[lr.RestrictedChannels]:{title:"Send Messages in Restricted Channels",description:"Allows members to send messages in restricted text channels."},[lr.PrivateChannels]:{title:"Use Private Channels",description:"Allows members to view and send messages in private text channels."},[lr.ManageMessages]:{title:"Manage Messages",description:"Allows members to remove messages by other members or pin any message."},[lr.ManagePosts]:{title:"Manage Posts",description:"Allows members to pin and remove posts."},[lr.ManageComments]:{title:"Manage Comments",description:"Allows members to pin and remove comments."},[lr.ManageFolders]:{title:"Manage Folders",description:"Allows members to create, delete, and edit folders."},[lr.AddPostToFolder]:{title:"Add Posts to Folders",description:"Allows members to add and remove posts from folders."},[lr.DisplayRoleSeparately]:{title:"Display Role Separately",description:"Members with this role will appear separately in the users list"},[lr.Admin]:{title:"Administrator",description:"Members with this role have every permission"},[lr.ManageUsers]:{title:"Manage Users",description:"Ban and kick users"}}},post:{createPost:"Create a post",create:{submit:"Post",cancel:"Cancel"},type:{text:"Text Post",link:"Link Post",image:"Image Post",album:"Image Album"},createComment:"Write a comment",commentCount:"{{count}} Comment",commentCount_plural:"{{count}} Comments",participantCount:"{{count}} Participant",participantCount_plural:"{{count}} Participants",creator:"Creator",context:{pin:"Pin Post",pinned:"Post pinned!",unpin:"Unpin Post",unpinned:"Post unpinned!",removeFromFolder:"Remove from Folder",addToUserFolder:"Add to Folder",addToServerFolder:"Add to Planet Folder",edit:"Edit Post",delete:"Delete Post",deleted:"Post deleted!",copyLink:"Copy Post Link",sendToFriend:"Send to Friend",vote:"Add Rocket",unvote:"Remove Rocket",votePermission:"This planet does not allow you to rocket posts."},hideParticipants:"Hide Participants",showParticipants:"Show Participants",pinnedTo:"Pinned to {{server.name}}",expand:"Show Details",collapse:"Hide Details",feed:{title:"Your Feed",refresh:"Refresh Posts",sort:{hot:"Hot",top:"Top",new:"New"},time:{hour:"Hour",day:"Day",week:"Week",month:"Month",year:"Year",all:"All"},liveMode:{title:"Live Mode",description:"Automatically add new posts to feed",comingSoon:"Live Mode is coming soon!"},subscriptions:{show:"Show Subscriptions",hide:"Hide Subscriptions",comingSoon:"Planet subscriptions are coming soon!"}}},search:{comingSoon:"Search is coming soon!"},server:{loading:"Loading planet...",feed:"Feed",invitePeople:"Invite People",onlineCount:"{{count}} online",memberCount:"{{count}} Member",memberCount_plural:"{{count}} Members",context:{markRead:"Mark As Read",mute:"Mute Planet",invite:"Invite People",leave:"Leave Planet"},create:{title:"Create Planet",name:"Planet Name",upload:"Upload",requireInvite:"Require Invite to Join"}},settings:{title:"Settings"},user:{hideUsers:"Hide Users",showUsers:"Show Users",context:{viewProfile:"Profile",closeDm:"Close DM",block:"Block",unblock:"Unblock",addFriend:"Add Friend",removeFriend:"Remove Friend",sendMessage:"Send Message",message:"Message",kickUser:"Kick {{user.username}}",banUser:"Ban {{user.username}}",banPrompt:"Reason (Optional)",ignore:"Ignore",accept:"Accept",revoke:"Revoke Friend Request",sendFriendRequest:"Send Friend Request",blockingYou:"Blocking You",markRead:"Mark as Read"},profile:{sentFriendRequest:"Request Sent",receivedFriendRequest:"Accept Request",mutualServers:"Mutual Planets",mutualFriends:"Mutual Friends",sendMessage:"Send Message"},offline:"Offline",online:"Online",friends:{title:"Friends",sendMessage:"Message",revokeRequest:"Cancel",acceptRequest:"Accept",rejectRequest:"Ignore",tab:{online:"Online",all:"All",pending:"Pending",blocked:"Blocked",add:"Add Friend"}}}}}};a.use(l).use(s).init({resources:Ba,fallbackLng:"en",debug:!1,load:"languageOnly",interpolation:{escapeValue:!1}});const ja={status:"connecting"};const Ga=g.exports.createContext({user:null,loading:!0});function Va({children:e}){const{data:n,loading:r}=function(e){const n={...On,...e};return t(Sa,n)}({fetchPolicy:"cache-and-network",nextFetchPolicy:"cache-first"}),a=null==n?void 0:n.user;return g.exports.useEffect((()=>{a?v({id:a.id,email:a.email,username:a.username}):h((e=>e.setUser(null)))}),[a]),f.createElement(Ga.Provider,{value:{user:a,loading:(r||"connected"!==ja.status)&&!a}},e)}const Ya=()=>{const{user:e,loading:t}=g.exports.useContext(Ga);return[e,t]};var Wa=g.exports.memo((function({children:e="You have reached the end!",className:t="h-48"}){return f.createElement("div",{className:"flex flex-col items-center justify-center text-primary pt-6"},f.createElement("img",{alt:"astronaut",src:"/astronaut.png",className:`object-contain opacity-50 animate-float select-none pointer-events-none ${t}`}),f.createElement("div",{className:"text-tertiary pt-3 text-lg font-semibold"},e))}));function Qa(){return Ya(),f.createElement("div",{className:"relative h-full w-full dark:bg-gray-750 flex flex-col items-center justify-center p-6 text-center"},f.createElement("div",{className:"text-center space-y-3"},f.createElement(Wa,null,"This page does not exist.",f.createElement(b,{to:"/",className:"block text-lg pt-3 text-accent font-medium cursor-pointer hover:underline"},"Return home"))))}function Ja({children:e,right:t=!1,show:n=!0}){return f.createElement("div",{className:`${n?"block":"hidden"} w-60 min-w-[15rem] bg-gray-200 dark:bg-gray-800 ${t?"":"rounded-tl-lg"}`},f.createElement("div",{className:"relative h-full w-full scrollbar-dark"},e))}const Za=x(((e,t)=>({friendsPage:"Online",setFriendsPage:t=>e({friendsPage:t}),inboxPage:"Unread",setInboxPage:t=>e({inboxPage:t}),postsSort:"Hot",setPostsSort:t=>e({postsSort:t}),postsTime:"Day",setPostsTime:t=>e({postsTime:t}),commentsSort:"Top",setCommentsSort:t=>e({commentsSort:t}),liveMode:!1,setLiveMode:t=>e({liveMode:t}),showFolders:!0,setShowFolders:t=>e({showFolders:t}),showUsers:!0,setShowUsers:t=>e({showUsers:t}),serverPages:{},setServerPage:(n,r)=>e({serverPages:{...t().serverPages,[n]:r}}),homePage:null,setHomePage:t=>e({homePage:t}),replyingCommentId:null,setReplyingCommentId:t=>e({replyingCommentId:t}),canGoBack:!1,setCanGoBack:t=>e({canGoBack:t}),exploreSort:"Top",setExploreSort:t=>e({exploreSort:t}),exploreCategory:null,setExploreCategory:t=>e({exploreCategory:t}),dialogUserId:null,setDialogUserId:t=>e({dialogUserId:t,userDialogOpen:!!t}),userDialogOpen:!1,setUserDialogOpen:t=>e({userDialogOpen:t}),folderSort:"Added",setFolderSort:t=>e({folderSort:t}),updateAvailable:!1,setUpdateAvailable:t=>e({updateAvailable:t}),loginDialog:!1,setLoginDialog:t=>e({loginDialog:t}),createAccount:!1,setCreateAccount:t=>e({createAccount:t})}))),Ka="Post",Xa=(e,t,n)=>y(`\n  ${e&&"h-11"}\n  ${t&&"h-9"}\n  ${!e&&!t&&"h-9"}\n  group\n  rounded\n  cursor-pointer\n  flex\n  items-center\n  text-base\n  font-medium\n  px-4\n  w-full\n  ${n?"dark:hover:bg-gray-725 dark:active:bg-gray-725":"dark:hover:bg-gray-775 dark:active:bg-gray-775"}\n  text-gray-600\n  dark:text-gray-400\n  select-none\n  focus:outline-none\n  relative\n  hover:text-gray-700\n  dark:hover:text-gray-300\n`),el=e=>y(`\n  text-gray-800\n  hover:text-gray-800\n  dark:text-gray-200\n  dark:hover:text-gray-200\n  ${e?"dark:bg-gray-700 dark:hover:bg-gray-700":"dark:bg-gray-750 dark:hover:bg-gray-750"}\n`);var tl=g.exports.forwardRef((({children:e,large:t=!1,small:n=!1,to:r,onClick:a,active:l,exact:s=!1,light:o=!1},i)=>r?f.createElement(E,{ref:i,to:r,className:`${Xa(t,n,o)} ${l?el(o):""}`,activeClassName:null!=l?"":el(o),exact:s},e):f.createElement("button",{ref:i,onClick:a,className:`${Xa(t,n,o)} ${l?el(o):""}`,type:"button"},e)));function nl({className:e}){return f.createElement("svg",{className:e,xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor"},f.createElement("path",{fillRule:"evenodd",d:"M7 2a1 1 0 00-.707 1.707L7 4.414v3.758a1 1 0 01-.293.707l-4 4C.817 14.769 2.156 18 4.828 18h10.343c2.673 0 4.012-3.231 2.122-5.121l-4-4A1 1 0 0113 8.172V4.414l.707-.707A1 1 0 0013 2H7zm2 6.172V4h2v4.172a3 3 0 00.879 2.12l1.027 1.028a4 4 0 00-2.171.102l-.47.156a4 4 0 01-2.53 0l-.563-.187a1.993 1.993 0 00-.114-.035l1.063-1.063A3 3 0 009 8.172z",clipRule:"evenodd"}))}function rl({className:e}){return f.createElement("svg",{className:e,xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor"},f.createElement("path",{d:"M13 7H7v6h6V7z"}),f.createElement("path",{fillRule:"evenodd",d:"M7 2a1 1 0 012 0v1h2V2a1 1 0 112 0v1h2a2 2 0 012 2v2h1a1 1 0 110 2h-1v2h1a1 1 0 110 2h-1v2a2 2 0 01-2 2h-2v1a1 1 0 11-2 0v-1H9v1a1 1 0 11-2 0v-1H5a2 2 0 01-2-2v-2H2a1 1 0 110-2h1V9H2a1 1 0 010-2h1V5a2 2 0 012-2h2V2zM5 5h10v10H5V5z",clipRule:"evenodd"}))}function al({className:e}){return f.createElement("svg",{className:e,viewBox:"0 0 24 24"},f.createElement("path",{fill:"currentColor",d:"M17 14H19V17H22V19H19V22H17V19H14V17H17V14M20 12C20 8.64 17.93 5.77 15 4.59V5C15 6.1 14.1 7 13 7H11V9C11 9.55 10.55 10 10 10H8V12H14C14.5 12 14.9 12.35 15 12.81C13.2 13.85 12 15.79 12 18C12 19.5 12.54 20.85 13.44 21.9L12 22C6.5 22 2 17.5 2 12C2 6.5 6.5 2 12 2C17.5 2 22 6.5 22 12L21.9 13.44C21.34 12.96 20.7 12.59 20 12.34L20 12M11 19.93V18C9.9 18 9 17.1 9 16V15L4.21 10.21C4.08 10.78 4 11.38 4 12C4 16.08 7.06 19.44 11 19.93Z"}))}function ll({className:e="h-5 w-5 text-primary"}){return f.createElement("svg",{className:`animate-spin ${e}`,xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24"},f.createElement("circle",{className:"opacity-25",cx:"12",cy:"12",r:"10",stroke:"currentColor",strokeWidth:"4"}),f.createElement("path",{className:"opacity-75",fill:"currentColor",d:"M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"}))}function sl({className:e}){return f.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",className:e,viewBox:"0 0 20 20",fill:"currentColor"},f.createElement("path",{d:"M2 5a2 2 0 012-2h7a2 2 0 012 2v4a2 2 0 01-2 2H9l-3 3v-3H4a2 2 0 01-2-2V5z"}),f.createElement("path",{d:"M15 7v2a4 4 0 01-4 4H9.828l-1.766 1.767c.28.149.599.233.938.233h2l3 3v-3h2a2 2 0 002-2V9a2 2 0 00-2-2h-1z"}))}const ol=({server:e,permissions:t})=>g.exports.useMemo((()=>e?t.map((t=>{var n;return[...null!=(n=null==e?void 0:e.permissions)?n:[]].includes(t)})):t.map((e=>!1))),[t,e]),il=0,cl=2,ml={disable:!1,holdToDisplay:1e3,posX:0,posY:0,mouseButton:cl,disableIfShiftIsPressed:!1,collect(){}};function dl(e,t){return t=>{const n=Object.assign({},ml,t);g.exports.useRef(!1),g.exports.useRef(),g.exports.useRef();const r=t=>{t.ctrlKey||(t.preventDefault(),t.stopPropagation(),e(((e,t)=>["X","Y"].map((n=>(e[`client${n}`]||e.touches&&e.touches[0][`page${n}`])-t[`pos${n}`])))(t,n),{...n.collect(),href:t.target.href}))};return[{onContextMenu:e=>{e.button===n.mouseButton&&r(e)},onClick:e=>{e.button===n.mouseButton&&r(e)}}]}}const ul=27,pl=13,gl=38,vl=40,hl={position:"fixed",opacity:0,pointerEvents:"none"},fl=e=>e.focus(),bl=({rtl:e,handleElementSelect:t=fl}={})=>{const n=g.exports.useRef(),r=g.exports.useRef([]),[a,l]=g.exports.useState(hl),[s,o]=g.exports.useState(-1),[i,c]=g.exports.useState(!1),[m,d]=g.exports.useState([0,0]),[u,p]=g.exports.useState(),v=g.exports.useCallback((()=>c(!1)),[c]);g.exports.useCallback((()=>{i&&c(!1)}),[i,c]);const h=g.exports.useCallback(((e,t)=>{c(!0),d(e),p(t)}),[c,p]);g.exports.useEffect((()=>{const e=e=>{n.current.contains(e.target)||(o(-1),v())},a=e=>{switch(e.keyCode){case ul:e.preventDefault(),v();break;case gl:e.preventDefault(),s>0&&(o((e=>e-1)),t(r.current[s-1]));break;case vl:e.preventDefault(),s+1<r.current.length&&(o((e=>e+1)),t(r.current[s+1]));break;case pl:-1!==s&&r.current[s].click(),v()}};return i&&(document.addEventListener("mousedown",e),document.addEventListener("touchstart",e),document.addEventListener("scroll",v),document.addEventListener("contextmenu",v),document.addEventListener("keydown",a)),()=>{document.removeEventListener("mousedown",e),document.removeEventListener("touchstart",e),document.removeEventListener("scroll",v),document.removeEventListener("contextmenu",v),document.removeEventListener("keydown",a)}}),[n,v,s,o,r,t,i]),g.exports.useLayoutEffect((()=>{if(i){const t=n.current.getBoundingClientRect(),{top:r,left:a}=e?((e,[t,n])=>{const r={top:n,left:t},{innerWidth:a,innerHeight:l}=window;return r.left=t-e.width,n+e.height>l&&(r.top-=e.height),r.left<0&&(r.left+=e.width),r.top<0&&(r.top=e.height<l?(l-e.height)/2:0),r.left+e.width>a&&(r.left=e.width<a?(a-e.width)/2:0),r})(t,m):((e,[t,n])=>{const r={top:n,left:t},{innerWidth:a,innerHeight:l}=window;return n+e.height>l&&(r.top-=e.height),t+e.width>a&&(r.left-=e.width),r.top<0&&(r.top=e.height<l?(l-e.height)/2:0),r.left<0&&(r.left=e.width<a?(a-e.width)/2:0),r})(t,m);l((e=>({...e,top:`${r}px`,left:`${a}px`,opacity:1,pointerEvents:"auto"})))}else l(hl)}),[n,i,m]);return[{style:a,ref:n,role:"menu",tabIndex:-1},{ref:e=>r.current=null===e?[]:[...r.current,e],role:"menuitem",tabIndex:-1},dl(h),{data:u,isVisible:i,setVisible:c,coords:m,setCoords:d}]},xl=e=>y(`\n  active:text-white\n  dark:active:text-white\n  dark:hover:text-white\n  dark:focus:text-white\n  hover:text-white\n  select-none\n  cursor-pointer\n  w-full\n  px-2\n  py-1.5\n  leading-5\n  flex\n  items-center\n  text-13\n  rounded-sm\n  font-medium\n  focus:outline-none\n  group\n  relative\n  ${e?"text-red-500 active:bg-red-600 hover:bg-red-500 focus:bg-red-500":"text-gray-600 dark:text-gray-400 active:bg-green-700 focus:bg-green-600 hover:bg-green-600"} \n`);function El({item:{bindMenuItem:e,hideMenu:t},onClick:n,red:r,checked:a=null,label:l,children:s}){return f.createElement("div",{...e,className:xl(r),onClick:e=>{t(),n&&n(e)}},l,null!==a&&f.createElement("input",{type:"checkbox",className:"ml-auto h-4 w-4 border-none rounded dark:checked:bg-green-600 dark:bg-gray-750 focus:outline-none cursor-pointer",checked:a,readOnly:!0}),s&&f.createElement(f.Fragment,null,f.createElement("div",{className:"ml-auto"},f.createElement(w,{className:"w-5 h-5 -mr-0.5"})),f.createElement("div",{className:"absolute left-full -top-2 -ml-2 hidden group-hover:block"},f.createElement("div",{className:"pl-2"},f.createElement("div",{className:"p-2 ml-3 dark:bg-gray-900 rounded w-48 shadow-lg"},s)))))}const yl="User",wl="Post",Nl="Comment",kl="Message",Cl="Server",$l="Folder",Ul="Channel",Sl=e=>{const{t:t}=N(),[r]=function(e){const t={...On,...e};return n(jr,t)}({optimisticResponse:{votePost:{...e,isVoted:!0,voteCount:e.voteCount+1}}}),[a]=function(e){const t={...On,...e};return n(Gr,t)}({optimisticResponse:{unvotePost:{...e,isVoted:!1,voteCount:e.voteCount-1}}});return g.exports.useCallback((()=>{const t={postId:e.id};e.isVoted?a({variables:{input:t}}):r({variables:{input:t}})}),[e,r,a,t])},Pl=e=>{const[t]=function(e){const t={...On,...e};return n(Vr,t)}(),[r]=function(e){const t={...On,...e};return n(Yr,t)}();return g.exports.useCallback((()=>{const n={postId:e.id};e.isPinned?r({variables:{input:n}}):t({variables:{input:n}})}),[e,t,r])},Il=y("\n  select-none\n  w-full\n  px-2\n  h-8\n  flex\n  items-center\n  text-13\n  text-mid\n  cursor-default\n  rounded-sm\n  font-medium\n  focus:outline-none\n");function Fl({children:e}){return Ml(e)?f.createElement("div",{className:"space-y-0.5"},f.createElement("div",{className:Il},"No actions available")):f.createElement("div",{className:"space-y-0.5"},e)}const Ml=e=>!k.renderToStaticMarkup(e),Rl=()=>Za((e=>[e.loginDialog,e.setLoginDialog,e.createAccount,e.setCreateAccount])),Al=()=>{const e=Rl()[1];return()=>e(!0)};function Dl({post:e,ContextMenuItem:t}){var r,a;C();const{t:l}=N(),[s]=ol({server:null==e?void 0:e.server,permissions:[lr.ManagePosts]}),o=$()[1],[i]=function(e){const t={...On,...e};return n(Br,t)}(),c=Sl(e),m=Pl(e),[d]=Ya(),u=!!d&&(null==(r=null==e?void 0:e.author)?void 0:r.id)===d.id,p=u||s,g=(null!=(a=null==d?void 0:d.relatedUsers)?a:[]).filter((e=>"Friends"===e.relationshipStatus));return e?f.createElement(f.Fragment,null,f.createElement(Fl,null,!!d&&f.createElement(t,{onClick:()=>{c()},label:e.isVoted?l("post.context.unvote"):l("post.context.vote")}),g.length>0&&f.createElement(t,{label:l("post.context.sendToFriend")},g.map((e=>f.createElement(t,{key:e.id,label:e.name})))),u&&f.createElement(t,{label:l("post.context.edit")}),s&&f.createElement(t,{onClick:()=>m(),label:e.isPinned?l("post.context.unpin"):l("post.context.pin")}),f.createElement(t,{onClick:()=>{o(`${location.origin}${e.relativeUrl}`)},label:l("post.context.copyLink")}),p&&f.createElement(t,{red:!0,onClick:()=>{i({variables:{input:{postId:e.id}}}),U.success(l("post.context.deleted"))},label:l("post.context.delete")}))):null}function Ol({user:e,server:t,isDm:r,ContextMenuItem:a}){const{t:l}=N(),[s]=Ya(),[o]=ol({server:t,permissions:[lr.ManageUsers]}),[i]=ia(),[c]=la(),[m]=function(e){const t={...On,...e};return n(xa,t)}(),[d]=function(e){const t={...On,...e};return n(Ea,t)}();Qr(),ra();const u=Za((e=>e.setDialogUserId)),{push:p}=S();return e?f.createElement(f.Fragment,null,f.createElement(Fl,null,f.createElement(a,{label:l("user.context.viewProfile"),onClick:()=>{u(e.id)}}),r&&f.createElement(f.Fragment,null,!!e.unreadCount&&f.createElement(a,{label:l("user.context.markRead"),onClick:()=>{c({variables:{input:{userId:e.id}}})}}),f.createElement(a,{label:l("user.context.closeDm"),onClick:()=>{i({variables:{input:{userId:e.id}}})}})),s&&e.id!==s.id?f.createElement(f.Fragment,null,!r&&f.createElement(a,{onClick:()=>p(`/dm/@${e.username}`),label:l("user.context.sendMessage")})):f.createElement(f.Fragment,null),!!t&&o&&f.createElement(f.Fragment,null,f.createElement(a,{label:l("user.context.kickUser",{user:e}),red:!0,onClick:()=>{d({variables:{input:{serverId:t.id,userId:e.id}}}),U.success(l("user.context.kickedUser",{user:e}))}}),f.createElement(a,{label:l("user.context.banUser",{user:e}),red:!0,onClick:()=>{const n=window.prompt(l("user.context.banPrompt"));null!==n&&(m({variables:{input:{serverId:t.id,userId:e.id,reason:n}}}),U.success(l("user.context.bannedUser",{user:e})))}})))):null}function Ll({message:e,server:t,ContextMenuItem:r}){var a,l;const{pathname:s}=C(),o=P(s,{path:"/group/:groupId"}),i=P(s,{path:"/dm/:username"});null==(a=null==o?void 0:o.params)||a.groupId,null==(l=null==i?void 0:i.params)||l.username;const[c]=ol({server:t,permissions:[lr.ManageMessages]});$()[1],function(e){const t={...On,...e};n(Or,t)}(),Tr(),zr(),(e=>{const[t]=Tr(),[n]=zr();g.exports.useCallback((()=>{const r={messageId:e.id};e.isPinned?n({variables:{input:r}}):t({variables:{input:r}})}),[e,t,n])})(e);const{t:m}=N(),[d]=Ya(),u=!!d&&e.author.id===d.id,p=(c||u)&&e.type===Gn.Normal,v=u&&e.type===Gn.Normal;return f.createElement(f.Fragment,null,f.createElement(Fl,null,v&&f.createElement(r,{label:m("message.context.edit")}),p&&f.createElement(r,{label:m("message.context.delete"),red:!0,onClick:()=>U.error(m("message.context.deleted"))})))}const Tl=e=>{const{t:t}=N(),[r]=function(e){const t={...On,...e};return n($r,t)}({optimisticResponse:{voteComment:{...e,isVoted:!0,voteCount:e.voteCount+1}}}),[a]=function(e){const t={...On,...e};return n(Ur,t)}({optimisticResponse:{unvoteComment:{...e,isVoted:!1,voteCount:e.voteCount-1}}});return g.exports.useCallback((()=>{const t={commentId:e.id};e.isVoted?a({variables:{input:t}}):r({variables:{input:t}})}),[e,r,a,t])},ql=e=>{const[t]=function(e){const t={...On,...e};return n(Sr,t)}(),[r]=function(e){const t={...On,...e};return n(Pr,t)}();return g.exports.useCallback((()=>{const n={commentId:e.id};e.isPinned?r({variables:{input:n}}):t({variables:{input:n}})}),[e,t,r])};function zl({comment:e,post:t,ContextMenuItem:r}){const{t:a}=N(),[l]=Ya(),s=Za((e=>e.setReplyingCommentId)),[o]=ol({server:t.server,permissions:[lr.ManageComments]});$()[1],function(e){const t={...On,...e};n(Cr,t)}();const i=Tl(e),c=ql(e),m=!!l&&e.author.id===l.id,d=o||m;return f.createElement(f.Fragment,null,f.createElement(Fl,null,!!l&&f.createElement(r,{label:e.isVoted?a("comment.context.unvote"):a("comment.context.vote"),onClick:()=>i()}),m&&f.createElement(r,{label:a("comment.context.edit")}),o&&f.createElement(r,{label:e.isPinned?a("comment.context.unpin"):a("comment.context.pin"),onClick:()=>c()}),!!l&&f.createElement(r,{onClick:()=>s(null==e?void 0:e.id),label:a("comment.context.reply")}),d&&f.createElement(r,{label:a("comment.context.delete"),red:!0,onClick:()=>U.error(a("comment.context.deleted"))})))}function Hl({server:e,enableFeatured:t,enableFeaturedPosition:n,openDelete:r,ContextMenuItem:a}){const{t:l}=N(),[s]=Ya(),o=I(),[i]=ba(),{push:c}=S(),{pathname:m}=C();return f.createElement(f.Fragment,null,f.createElement(Fl,null,(null==s?void 0:s.isAdmin)&&f.createElement(f.Fragment,null,!!t&&f.createElement(a,{label:e.isFeatured?"Remove from Featured":"Make Featured"}),!!n&&e.isFeatured&&f.createElement(f.Fragment,null,f.createElement(a,{label:"Increment Featured Position"}),f.createElement(a,{label:"Decrement Featured Position"}))),!!s&&e.owner.id!==s.id&&f.createElement(a,{label:l("server.context.leave"),red:!0,onClick:()=>{m.startsWith(`/+${e.id}`)&&c("/"),i({variables:{input:{serverId:e.id}}});const t=o.cache.readQuery({query:Sa});o.cache.writeQuery({query:Sa,data:{user:{...t.user,servers:t.user.servers.filter((t=>t.id!==e.id))}}});const n=o.cache.readFragment({fragment:dr,id:`Server:${e.id}`});o.cache.writeFragment({fragment:dr,id:`Server:${e.id}`,data:{...n,isJoined:!1}})}}),!!s&&!!r&&(s.isAdmin||e.owner.id===s.id)&&f.createElement(a,{label:"Delete Planet",red:!0,onClick:()=>r()})))}function _l({channel:e,server:t,openDelete:n,ContextMenuItem:r}){const{t:a}=N(),[l]=ol({server:t,permissions:[lr.ManageChannels]});return f.createElement(f.Fragment,null,f.createElement(Fl,null,l&&f.createElement(f.Fragment,null,f.createElement(r,{label:a("channel.context.edit")}),f.createElement(r,{label:a("channel.context.delete"),red:!0,onClick:()=>{n()}}))))}function Bl({folder:e,ContextMenuItem:t}){var r,a,l,s;const{t:o}=N(),[i]=Ya(),c=null!=(r=null==i?void 0:i.folders)?r:[],m=!!i&&c.filter((e=>{var t;return(null==(t=e.owner)?void 0:t.id)!==i.id})).map((e=>e.id)).includes(e.id),d="Read Later"!==e.name&&"Favorites"!==e.name,[u]=function(e){const t={...On,...e};return n(Ir,t)}(),[p]=function(e){const t={...On,...e};return n(Mr,t)}(),[g]=function(e){const t={...On,...e};return n(Rr,t)}(),[v]=function(e){const t={...On,...e};return n(Fr,t)}(),{push:h}=S(),{pathname:b}=C(),x=P(b,{path:"/:server"}),E=null==(l=null==(a=null==x?void 0:x.params)?void 0:a.server)?void 0:l.substring(1);return f.createElement(f.Fragment,null,f.createElement(Fl,null,f.createElement(t,{label:o("folder.context.copyLink")}),!!i&&(null==(s=e.owner)?void 0:s.id)!==i.id&&f.createElement(f.Fragment,null,m?f.createElement(t,{label:o("folder.context.unfollow"),onClick:()=>g({variables:{input:{folderId:e.id}}})}):f.createElement(t,{label:o("folder.context.follow"),onClick:()=>p({variables:{input:{folderId:e.id}}})})),d&&f.createElement(f.Fragment,null,f.createElement(t,{label:o("folder.context.edit")}),!E&&f.createElement(t,{label:o("folder.context.collaborative"),checked:e.isCollaborative,onClick:()=>u({variables:{input:{folderId:e.id,isCollaborative:!e.isCollaborative}}})}),f.createElement(t,{label:o("folder.context.changeVisibility")},f.createElement(t,{label:o("folder.context.visibility.public"),checked:e.visibility===Bn.Public,onClick:()=>u({variables:{input:{folderId:e.id,visibility:Bn.Public}}})}),f.createElement(t,{label:o("folder.context.visibility.friends"),checked:e.visibility===Bn.Friends,onClick:()=>u({variables:{input:{folderId:e.id,visibility:Bn.Friends}}})}),f.createElement(t,{label:o("folder.context.visibility.unlisted"),checked:e.visibility===Bn.Unlisted,onClick:()=>u({variables:{input:{folderId:e.id,visibility:Bn.Unlisted}}})}),f.createElement(t,{label:o("folder.context.visibility.private"),checked:e.visibility===Bn.Private,onClick:()=>u({variables:{input:{folderId:e.id,visibility:Bn.Private}}})})),f.createElement(t,{label:o("folder.context.delete"),red:!0,onClick:()=>{v({variables:{input:{folderId:e.id}}}),b.startsWith("/folder")?h("/"):b.startsWith(`/${E}/folder`)&&h(`/${E}`)}}))))}function jl(){let e=window.navigator.userAgent,t=window.navigator.platform,n=null;return-1!==["Macintosh","MacIntel","MacPPC","Mac68K"].indexOf(t)?n="Mac OS":-1!==["iPhone","iPad","iPod"].indexOf(t)?n="iOS":-1!==["Win32","Win64","Windows","WinCE"].indexOf(t)?n="Windows":/Android/.test(e)?n="Android":/Linux/.test(t)&&(n="Linux"),n}function Gl(){return f.createElement("div",{className:"border-t dark:border-gray-800 mt-2 pb-2"})}const Vl=y("\n  p-2\n  w-48\n  dark:bg-gray-900\n  rounded\n  shadow-lg\n  outline-none\n");function Yl({bindMenu:{style:e,ref:t,role:n,tabIndex:r},data:a,bindMenuItem:l,hideMenu:s}){const o=(i={bindMenuItem:l,hideMenu:s},g.exports.useCallback((({onClick:e,red:t,label:n,checked:r,children:a})=>f.createElement(El,{item:i,onClick:e,red:t,label:n,checked:r},a)),[i]));var i;const c=$()[1],m=(null==a?void 0:a.href)?new URL(a.href):null,d=m&&m.origin===window.location.origin,u="Mac OS"===jl(),p={...null!=a?a:{},ContextMenuItem:o};return f.createElement("div",{style:{...e,zIndex:999999},ref:t,role:n,tabIndex:r,className:Vl,onMouseDown:e=>{e.stopPropagation(),e.preventDefault()}},!!window.getSelection().toString()&&f.createElement(f.Fragment,null,f.createElement(o,{label:f.createElement("div",{className:"flex items-center w-full"},"Copy",f.createElement("div",{className:"ml-auto"},u?"⌘+C":"Ctrl+C")),onClick:()=>document.execCommand("copy")}),f.createElement(Gl,null)),(null==a?void 0:a.type)===wl&&f.createElement(Dl,{...p}),(null==a?void 0:a.type)===yl&&f.createElement(Ol,{...p}),(null==a?void 0:a.type)===kl&&f.createElement(Ll,{...p}),(null==a?void 0:a.type)===Nl&&f.createElement(zl,{...p}),(null==a?void 0:a.type)===Cl&&f.createElement(Hl,{...p}),(null==a?void 0:a.type)===Ul&&f.createElement(_l,{...p}),(null==a?void 0:a.type)===$l&&f.createElement(Bl,{...p}),!!(null==a?void 0:a.href)&&!d&&f.createElement(f.Fragment,null,f.createElement(Gl,null),f.createElement(Fl,null,f.createElement(o,{label:"Copy Link",onClick:()=>c(a.href)}),f.createElement(o,{label:"Open Link",onClick:()=>window.open(a.href,"_blank")}))))}const Wl=g.exports.createContext({useContextTrigger:e=>[{}]});function Ql({children:e}){const[t,n,r,{data:a,coords:l,setVisible:s}]=bl();return f.createElement(f.Fragment,null,f.createElement(Wl.Provider,{value:{useContextTrigger:r}},e,f.createElement(Yl,{bindMenu:t,data:a,bindMenuItem:n,hideMenu:()=>s(!1)})))}function Jl({data:e,leftClick:t=!1,children:n,className:r}){const[a]=((e,t=!1)=>{const{useContextTrigger:n}=g.exports.useContext(Wl);return n({collect:()=>e,mouseButton:t?il:cl})})(e,t);return f.createElement("div",{className:r,...a},n)}const Zl=e=>y(`\n  px-3\n  pt-4\n  pb-1\n  text-gray-500\n  dark:text-gray-500\n  uppercase\n  text-11\n  font-semibold\n  tracking-wide\n  flex\n  items-center\n  justify-between\n  select-none\n  ${e&&"hover:text-gray-600 dark:hover:text-gray-400"}\n`);function Kl({children:e,plusLabel:t,onClick:n}){const r=t&&n;return f.createElement("div",{className:Zl(r)},e,r&&f.createElement(F,{content:t},f.createElement("div",{onClick:n},f.createElement(M,{className:"w-5 h-5 text-gray-600 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300 cursor-pointer"}))))}function Xl({isOpen:e,close:t,children:n,closeOnOverlayClick:r=!1}){return f.createElement(R,{show:e,as:g.exports.Fragment},f.createElement(A,{open:e,onClose:t,static:!0},f.createElement("div",{className:"fixed z-10 inset-0"},f.createElement("div",{className:"flex items-end justify-center min-h-screen text-center sm:block p-0"},f.createElement(R.Child,{enter:"ease-out duration-150",enterFrom:"opacity-0",enterTo:"opacity-100",leave:"ease-in duration-150",leaveFrom:"opacity-100",leaveTo:"opacity-0"},f.createElement(A.Overlay,{className:"fixed inset-0 transition-opacity"},f.createElement("div",{className:"absolute inset-0 bg-gray-500 dark:bg-black opacity-75"}))),f.createElement(R.Child,{enter:"ease-out transform duration-150",enterFrom:"opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95",enterTo:"opacity-100 translate-y-0 sm:scale-100",leave:"ease-in transform duration-150",leaveFrom:"opacity-100 translate-y-0 sm:scale-100",leaveTo:"opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"},f.createElement("span",{className:"hidden sm:inline-block sm:align-middle sm:h-screen","aria-hidden":"true"},"​"),f.createElement("div",{onClick:()=>{r&&t()},className:"overflow-y-auto scrollbar dark:scrollbar-thumb-gray-800 dark:scrollbar-track-transparent inline-block h-screen transform transition-all align-middle w-full"},f.createElement("div",{className:"flex min-h-full w-full items-center justify-center"},n)))))))}var es=A.Title;function ts(){return f.createElement("div",{className:"group relative w-full"},f.createElement("input",{onFocus:e=>{e.target.blur(),U.error("Search is coming soon!")},className:"w-full block h-7 min-w-0 rounded-md dark:bg-gray-850 placeholder-tertiary text-sm focus:outline-none focus:ring-1 ring-blue-600 transition"}),f.createElement(D,{className:"w-4 h-4 text-mid absolute top-1/2 transform -translate-y-1/2 left-3"}))}function ns({children:e,className:t,icon:n,title:r,showDivider:a=!1}){return f.createElement("header",{id:"header",className:"h-12 min-h-[3rem] items-center bg-white dark:bg-gray-750 border-b dark:border-gray-800 shadow flex"},f.createElement("div",{className:"flex items-center font-semibold text-base leading-5 text-primary pl-4 pr-4 "+(a?"border-r dark:border-gray-700 mr-4":"")},f.createElement("div",{className:"text-tertiary mr-3"},n),r),f.createElement("div",{className:"flex-grow flex items-center min-w-0 pr-4"},e),f.createElement("div",{className:"flex w-60 min-w-[15rem] pr-4"},f.createElement(ts,null)))}function rs({currentPage:e,setCurrentPage:t,page:n,green:r=!1,children:a}){return f.createElement("button",{onClick:()=>t(n),className:"text-base font-medium rounded px-1.5 py-0.5 cursor-pointer select-none flex flex-shrink-0 items-center focus:outline-none "+(n===e?r?"text-green-600 bg-green-900":"text-secondary dark:bg-gray-700":r?"text-secondary bg-green-600":"text-tertiary")},a||n)}function as({checked:e,onChange:t,children:n,green:r=!1,className:a,disabled:l}){return f.createElement(O.Group,{as:"div",className:"flex items-center space-x-3"},n&&f.createElement(O.Label,{className:a},n),f.createElement(O,{disabled:l,as:"button",checked:e,onChange:t,className:(e?""+(r?"bg-green-600":"bg-blue-600"):"dark:bg-gray-500")+" relative inline-flex flex-shrink-0 h-6 transition-colors duration-200 ease-in-out border-2 border-transparent rounded-full cursor-pointer w-10 focus:outline-none focus:shadow-outline"},(({checked:e})=>f.createElement("span",{className:(e?"translate-x-4":"translate-x-0.5")+" bg-gray-100 inline-block relative translate-y-1px w-4.5 h-4.5 transition duration-200 ease-in-out transform rounded-full"},f.createElement(L,{className:`absolute inset-1/2 transform -translate-y-1/2 -translate-x-1/2 w-4 h-4 transition-opacity duration-200 ${e?"opacity-100":"opacity-0"} ${r?"text-green-600":"text-blue-600"}`}),f.createElement(T,{className:`absolute inset-1/2 transform -translate-y-1/2 -translate-x-1/2 w-4 h-4 transition-opacity duration-200 ${e?"opacity-0":"opacity-100"} text-gray-500`})))))}function ls({refreshPosts:e}){const[t,n,r]=Za((e=>[e.postsSort,e.showFolders,e.liveMode])),{t:a}=N();let l;switch(t){case"Hot":l=f.createElement(_,{className:"w-5 h-5"});break;case"New":l=f.createElement(H,{className:"w-5 h-5"});break;case"Top":l=f.createElement(z,{className:"w-5 h-5"})}return f.createElement(ns,{isRightSidebar:n,title:t,icon:l,showDivider:"Top"===t},"Top"===t&&f.createElement("div",{className:"flex items-center space-x-4"},f.createElement(ss,{time:"Hour"}),f.createElement(ss,{time:"Day"}),f.createElement(ss,{time:"Week"}),f.createElement(ss,{time:"Month"}),f.createElement(ss,{time:"Year"}),f.createElement(ss,{time:"All"})),f.createElement("div",{className:"ml-auto space-x-5 flex items-center"},f.createElement(F,{content:a("post.feed.refresh")},f.createElement("div",{className:"highlightable",onClick:e},f.createElement(q,{className:"w-5 h-5"})))))}function ss({time:e}){const{t:t}=N(),[n,r]=Za((e=>[e.postsTime,e.setPostsTime]));return f.createElement(rs,{page:e,setCurrentPage:r,currentPage:n},t(`post.feed.time.${e.toLowerCase()}`))}const os=({serverId:e,folderId:n})=>{var r;const[a,l,s]=Za((e=>[e.postsSort,e.postsTime,e.folderSort])),[o,i]=g.exports.useState(0),c={sort:n?s:a,time:"Top"!==a||n?null:l,serverId:e,folderId:n},{data:m,loading:d,fetchMore:u}=function(e){const n={...On,...e};return t(Ma,n)}({variables:c,fetchPolicy:"cache-and-network",nextFetchPolicy:"cache-first"}),p=null==m?void 0:m.posts.hasMore,v=null!=(r=null==m?void 0:m.posts.posts)?r:[];return[v,d,()=>{p&&0!==v.length&&(u({variables:{...c,offset:20*(o+1)},updateQuery:(e,{fetchMoreResult:t})=>({posts:{hasMore:t.posts.hasMore,posts:[...e.posts.posts,...t.posts.posts]}})}),i(o+1))},p]};var is=g.exports.forwardRef((({avatarUrl:e,children:t,loading:n="eager",className:r="",size:a=12,style:l={}},s)=>f.createElement("div",{ref:s,className:`relative flex-shrink-0 flex items-center justify-center bg-cover bg-center ${r}`,style:{width:a/4+"rem",height:a/4+"rem",backgroundImage:e?`url(${e})`:void 0,...l}},t)));const cs={gray:B.gray,red:B.red,yellow:B.amber,green:B.emerald,blue:B.blue,indigo:B.indigo,purple:B.violet,pink:B.pink},ms={transparent:"transparent",current:"currentColor",black:B.black,white:B.white,...cs},ds={Red:ms.red[500],Yellow:ms.yellow[500],Green:ms.green[500],Blue:ms.blue[500],Indigo:ms.indigo[500],Purple:ms.purple[500],Pink:ms.pink[500]};var us=g.exports.forwardRef((({user:e,loading:t="eager",size:n=12,showOnline:r=!1,className:a="",dotClassName:l=""},s)=>f.createElement(is,{ref:s,avatarUrl:null==e?void 0:e.avatarUrl,loading:t,className:`${a} cursor-pointer rounded-full`,size:n,style:(null==e?void 0:e.avatarUrl)?{}:{backgroundColor:ds[null==e?void 0:e.color]}},r&&f.createElement("div",{className:`absolute bottom-0 right-0 rounded-full z-10 ${l} ${(null==e?void 0:e.isOnline)?"bg-green-500":"bg-gray-600"}`}),!(null==e?void 0:e.avatarUrl)&&f.createElement(j,{className:"text-primary w-2/3 h-2/3"})))),ps=g.exports.forwardRef((({server:e,loading:t="eager",size:n=12,className:r="",style:a={}},l)=>{var s;const o=(null!=(s=null==e?void 0:e.displayName)?s:"").split(" ").map((e=>e[0])).join("").toUpperCase(),i=g.exports.useMemo((()=>{const e=o;return e.length<=2?"18px":3===e.length?"16px":4===e.length?"14px":5===e.length?"12px":e.length>=6?"10px":void 0}),[o]);return e?f.createElement(is,{ref:l,avatarUrl:e.avatarUrl,loading:t,className:`${r} cursor-pointer`,size:n,style:a},!e.avatarUrl&&f.createElement("svg",{width:"100%",height:"100%",viewBox:"0 0 48 48",className:"absolute top-0 left-0",overflow:"visible"},f.createElement("defs",null,f.createElement("g",null,f.createElement("path",{d:"M48 24C48 37.2548 37.2548 48 24 48C10.7452 48 0 37.2548 0 24C0 10.7452 10.7452 0 24 0C37.2548 0 48 10.7452 48 24Z"})),f.createElement("g",null,f.createElement("rect",{x:"28",y:"-4",width:"24",height:"24",rx:"12",ry:"12",transform:"translate(20 -20)"})),f.createElement("g",null,f.createElement("rect",{x:"28",y:"28",width:"24",height:"24",rx:"12",ry:"12",transform:"translate(20 20)"}))),f.createElement("foreignObject",{x:"0",y:"0",width:"48",height:"48"},f.createElement("div",{className:"flex items-center justify-center h-full",tabIndex:"-1","aria-label":e.name,style:{fontSize:i}},f.createElement("div",{className:"flex items-center justify-center whitespace-nowrap font-medium text-tertiary","aria-hidden":"true"},o))))):null}));function gs({children:e,render:t,className:n,placement:r="right"}){const[a,l]=g.exports.useState(!1),s=G(8);const o={name:"hideOnPopperBlur",defaultValue:!0,fn:e=>({onCreate(){e.popper.addEventListener("focusout",(t=>{e.props.hideOnPopperBlur&&t.relatedTarget&&!e.popper.contains(t.relatedTarget)&&e.hide()}))}})};return f.createElement(f.Fragment,null,f.createElement(V,{render:e=>f.createElement(Y.div,{style:{x:s},...e,className:`hidden lg:block ${n}`},t((()=>l(!1)))),placement:r,interactive:!0,onMount:function(){l(!0),s.set(8),W(s,0,{ease:[.4,0,.2,1],duration:.15})},visible:a,onHide:()=>l(!1),onClickOutside:()=>l(!1),plugins:[o],zIndex:9999,appendTo:document.body},f.createElement("span",{className:"leading-none",onClick:()=>l(!0)},e)))}function vs({user:e,role:t,children:n,placement:r="right"}){const a=Za((e=>e.setDialogUserId));return f.createElement(f.Fragment,null,f.createElement(gs,{className:"w-64",placement:r,render:n=>f.createElement("div",{className:"w-full relative rounded-md shadow-lg duration-200 transform transition z-50 w-64"},f.createElement("div",{className:"p-3 flex flex-col items-center dark:bg-gray-850 rounded-t-md"},f.createElement("div",{className:"group relative"},f.createElement(us,{user:e,size:20,showOnline:!0,className:"dark:bg-gray-700 cursor-pointer select-none",dotClassName:"ring-5 w-4 h-4 dark:ring-gray-850"}),f.createElement("div",{onClick:()=>{n(),a(e.id)},className:"cursor-pointer bg-black bg-opacity-50 transition rounded-full absolute whitespace-nowrap inset-0 flex items-center justify-center text-9 uppercase tracking-widest font-semibold opacity-0 group-hover:opacity-100"},"View Profile")),f.createElement("div",{className:"mt-3 text-base"},f.createElement("span",{className:"font-semibold text-primary"},e.username))),f.createElement("div",{className:"p-4 dark:bg-gray-800 rounded-b-md"},t&&f.createElement("div",null,f.createElement("div",{className:"text-11 font-semibold uppercase tracking-widest text-secondary pb-2"},"Roles"),f.createElement("div",{className:"flex space-x-1"},f.createElement("div",{style:{color:t.color,borderColor:t.color},className:"text-xs font-medium px-2 h-5.5 rounded-full border inline-flex items-center "+(t.color?"":"dark:border-gray-700 text-secondary")},t.name),f.createElement("div",{className:"text-xs font-medium h-5.5 w-5.5 rounded-full border inline-flex items-center justify-center dark:border-gray-700 text-secondary"},f.createElement(M,{className:"w-5 h-5"}))))))},n))}function hs(e){return Q(e).calendar()}function fs(e){return Q(e).format("h:mm A")}Q.extend(J),Q.extend(Z);const bs=/^https?:\/\/twitter\.com\/(?:#!\/)?(?:\w+)\/status(?:es)?\/(\d+)/,xs=/^https?:\/\/banned\.video\/watch\?id=((?:\w){24})/,Es=/^https?:\/\/open\.(?:spotify\.com\/)(?:embed\/)?(track|playlist|album)\/((?:\w){22})/,ys=/^https?:\/\/gfycat\.com\/(\w+)/,ws=/^https?:\/\/www\.bitchute\.com\/video\/(\w+)/,Ns=/^https?:\/\/www\.youtube\.com\/watch\?v=(\w+)/,ks=/^https?:\/\/www\.twitch\.tv\/([a-zA-Z0-9_-]+)/,Cs=/^https?:\/\/www\.twitch\.tv\/videos\/(\d+)/,$s=/^https?:\/\/clips\.twitch\.tv\/([a-zA-Z0-9_-]+)/,Us=e=>bs.test(e),Ss=e=>xs.test(e),Ps=e=>Es.test(e),Is=e=>ys.test(e),Fs=e=>ws.test(e),Ms=e=>Ns.test(e),Rs=e=>ks.test(e),As=e=>Cs.test(e),Ds=e=>$s.test(e),Os=y("aspect-h-9 aspect-w-16 relative"),Ls=y("w-full h-full");function Ts({url:e}){if(Us(e)){const t=e.match(bs)[1];return f.createElement(K,{tweetId:t,options:{theme:"dark",align:"center",dnt:!0}})}if(Ss(e)){const t=e.match(xs)[1];return f.createElement("div",{className:Os},f.createElement("iframe",{src:`https://api.banned.video/embed/${t}?autoplay=false&amp;muted=false`,frameBorder:"0",allowFullScreen:!0,className:Ls}))}if(Ps(e)){const t=e.match(Es),n=t[1],r=t[2];return f.createElement("div",{className:Os},f.createElement("iframe",{src:`https://open.spotify.com/embed/${n}/${r}`,frameBorder:"0",allowTransparency:"true",allow:"encrypted-media",className:Ls}))}if(Is(e)){const t=e.match(ys)[1];return f.createElement("div",{className:Os},f.createElement("iframe",{src:`https://gfycat.com/ifr/${t}`,frameBorder:"0",scrolling:"no",allowFullScreen:!0,className:Ls}))}if(Fs(e)){const t=e.match(ws)[1];return f.createElement("div",{className:Os},f.createElement("iframe",{src:`https://www.bitchute.com/embed/${t}/`,frameBorder:"0",allowFullScreen:!0,className:Ls}))}if(Ms(e)){const t=e.match(Ns)[1];return f.createElement(X,{videoId:t,containerClassName:"relative w-full h-0 aspect-h-9 aspect-w-16 overflow-hidden youtube",opts:{playerVars:{autoplay:1,controls:1}}})}if(Rs(e)){const t=e.match(ks)[1];return f.createElement(ee,{channel:t,layout:"video",theme:"dark",targetClass:Os})}if(As(e)){const t=e.match(Cs)[1];return f.createElement(ee,{video:t,layout:"video",theme:"dark",targetClass:Os})}if(Ds(e)){const t=e.match($s)[1];return f.createElement("div",{className:Os},f.createElement("iframe",{src:`https://clips.twitch.tv/embed?clip=${t}&parent=localhost&parent=joincomet.app`,frameBorder:"0",allowFullScreen:!0,scrolling:"no",className:Ls}))}return null}function qs({metadata:e,dark:t=!1}){var n,r;const[a,l]=g.exports.useState(!1),s=(o=e.url)&&(Us(o)||Ss(o)||Ps(o)||Is(o)||Fs(o)||Ms(o)||Rs(o)||As(o)||Ds(o));var o;return f.createElement("div",{className:`rounded flex transition ${t?"dark:bg-gray-850 dark:border-gray-950":"dark:bg-gray-800 dark:border-gray-900"} pt-4 border-l-4`},f.createElement("div",{className:"overflow-auto flex-grow rounded-r-md pl-4 pr-4 pb-4 flex flex-col space-y-3"},e.publisher&&f.createElement("div",{className:"text-xs text-secondary"},e.publisher),f.createElement("div",{className:"leading-none"},f.createElement("a",{href:e.url,rel:"noopener nofollow noreferrer",target:"_blank",className:"text-sm font-semibold text-blue-400 hover:underline"},null!=(n=e.title)?n:"No title")),e.description&&!s&&f.createElement("div",{className:""},f.createElement("div",{className:"text-13 text-secondary line-clamp-3",dangerouslySetInnerHTML:{__html:null!=(r=e.description)?r:"No description"}})),(s||e.image&&"summary_large_image"===e.twitterCard)&&f.createElement("div",{className:"max-w-[25rem] w-full h-full pt-1"},a?f.createElement(Ts,{url:e.url}):f.createElement("div",{onClick:()=>{s&&l(!0)},className:"relative cursor-pointer bg-cover bg-center bg-no-repeat aspect-h-9 aspect-w-16 h-full w-full rounded",style:{backgroundImage:`url(${e.image})`}},!!s&&f.createElement("div",{className:"absolute inset-0 flex items-center justify-center"},f.createElement("div",{className:"text-tertiary rounded-full bg-black bg-opacity-75 flex space-x-3 p-3"},f.createElement(te,{className:"w-6 h-6 cursor-pointer text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 transition"}),f.createElement(ne,{onClick:t=>{t.stopPropagation(),t.preventDefault(),window.open(e.url,"_blank")},className:"w-6 h-6 cursor-pointer text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 transition"})))))),!!e.image&&"summary_large_image"!==e.twitterCard&&!s&&f.createElement("div",{className:"pb-4 px-4"},f.createElement("img",{alt:"Thumbnail",src:e.image,className:"object-cover w-20 min-w-[5rem] rounded max-h-[5rem] cursor-pointer h-auto cursor-pointer"})))}var zs=g.exports.memo((function({post:e,isPostPage:t=!1,showServerName:n=!1,className:r="",index:a}){var l,s,o,i,c,m,d;const{push:u}=S(),p=Sl(e),[{opacity:v},h]=re({type:Ka,item:e,collect:e=>({opacity:e.isDragging()?.4:1})}),x=ae().getMonitor().isDragging(),[E,y]=g.exports.useState(!1);g.exports.useEffect((()=>{if(!x){const e=setTimeout((()=>y(!1)),300);return()=>clearTimeout(e)}y(!0)}),[x]);const N=g.exports.useMemo((()=>{var t,n;return e.text||!(e.text||e.linkUrl||e.images&&0!==e.images.length)?"Text":e.linkUrl?e.domain:1===(null==(t=e.images)?void 0:t.length)?"Image":(null==(n=e.images)?void 0:n.length)>1?"Image Album":void 0}),[e.domain,e.images,e.linkUrl,e.text]),k=e=>{e.stopPropagation(),e.preventDefault()},[C,$]=g.exports.useState(0),[U]=Ya(),P=Al();return f.createElement(Jl,{data:{type:wl,post:e}},f.createElement("div",{ref:h,style:{opacity:v},className:`${r} cursor-pointer relative group hover:shadow dark:bg-gray-800 dark:hover:bg-gray-825 pt-4 px-4 pb-4 rounded flex`,onClick:()=>{E||u(e.relativeUrl)}},!t&&f.createElement("div",{className:"w-26 h-18 rounded dark:bg-gray-700 mr-4 flex items-center justify-center bg-center bg-cover bg-no-repeat",style:e.thumbnailUrl?{backgroundImage:`url(${e.thumbnailUrl})`}:{}},!e.thumbnailUrl&&f.createElement(f.Fragment,null,e.linkUrl?f.createElement(le,{className:"w-8 h-8 text-tertiary"}):f.createElement(se,{className:"w-8 h-8 text-tertiary"}))),f.createElement("div",{className:"pr-4 flex-grow flex flex-col"},f.createElement(b,{to:e.relativeUrl,className:"text-secondary font-medium"},e.title,f.createElement("span",{className:"text-xs text-mid"},"  ",N)),t&&N&&f.createElement("div",{className:"mt-0.5 pb-2"},!!e.text&&f.createElement("div",{dangerouslySetInnerHTML:{__html:e.text},className:"prose prose-sm dark:prose-dark max-w-none pt-0.5"}),!!e.linkUrl&&f.createElement(f.Fragment,null,e.linkMetadata?f.createElement("div",{className:"max-w-screen-sm w-full mt-2"},f.createElement(qs,{dark:!0,metadata:e.linkMetadata})):f.createElement("a",{href:e.linkUrl,target:"_blank",rel:"noopener nofollow noreferrer",className:"text-sm text-blue-400 hover:underline cursor-pointer pt-0.5"},e.linkUrl)),(null==(l=e.images)?void 0:l.length)>=1&&f.createElement("div",{className:"max-w-screen-md w-full mt-2"},f.createElement("div",{className:"flex relative"},f.createElement("div",{className:"aspect-h-9 aspect-w-16 relative flex w-full dark:bg-gray-775"},e.images.map(((e,t)=>f.createElement("img",{key:t,alt:"",src:e.url,className:"w-full h-full object-contain select-none "+(t===C?"block":"hidden")})))),e.images.length>1&&f.createElement(f.Fragment,null,C>0&&f.createElement("div",{onClick:()=>$(C-1),className:"absolute left-3 top-1/2 transform -translate-y-1/2 rounded-full shadow flex items-center justify-center w-10 h-10 dark:bg-white"},f.createElement(oe,{className:"w-5 h-5 dark:text-black"})),C<e.images.length-1&&f.createElement("div",{onClick:()=>$(C+1),className:"absolute right-3 top-1/2 transform -translate-y-1/2 rounded-full shadow flex items-center justify-center w-10 h-10 dark:bg-white"},f.createElement(w,{className:"w-5 h-5 dark:text-black"})))),f.createElement("div",{className:"h-12 dark:bg-gray-750 flex items-center px-5 text-13 select-none"},e.images[C].caption&&f.createElement("div",{className:"text-primary truncate pr-3",title:e.images[C].caption},e.images[C].caption),e.images[C].linkUrl&&f.createElement("a",{href:e.images[C].linkUrl,target:"_blank",rel:"noopener nofollow noreferrer",className:"ml-auto text-blue-400 hover:underline cursor-pointer"},e.images[C].linkUrl)))),f.createElement("div",{className:"flex items-center pt-2 mt-auto"},f.createElement("div",{className:"flex items-center",onClick:k},f.createElement(Jl,{data:{type:yl,user:e.author}},f.createElement(vs,{user:e.author,role:null==(s=e.serverUser)?void 0:s.role},f.createElement(us,{user:e.author,size:5}))),f.createElement(Jl,{data:{type:yl,user:e.author}},f.createElement(vs,{user:e.author,role:null==(o=e.serverUser)?void 0:o.role},f.createElement("div",{className:"ml-2 cursor-pointer text-gray-600 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300 text-xs font-medium leading-none",style:{color:null==(c=null==(i=e.serverUser)?void 0:i.role)?void 0:c.color}},null!=(d=null==(m=e.author)?void 0:m.username)?d:"[deleted]"))),n&&f.createElement("div",{className:"ml-1 flex items-center",onClick:k},f.createElement(ie,{className:"w-4.5 h-4.5 text-mid mr-1"}),f.createElement(b,{to:`/+${e.server.name}`,className:"flex items-center"},f.createElement(ps,{server:e.server,size:5,className:"dark:bg-gray-750 rounded-full"}),f.createElement("span",{className:"ml-2 text-xs font-medium text-gray-600 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300"},e.server.displayName))),f.createElement("div",{className:"text-xs text-mid font-medium"},"  ·  ",f.createElement(F,{content:hs(e.createdAt)},f.createElement("span",null,(I=e.createdAt,Q(I).twitter()))))),f.createElement("div",{className:"flex items-center ml-auto"},f.createElement("div",{className:"text-gray-500 hover:text-gray-700 dark:hover:text-gray-300 flex items-center cursor-pointer"},f.createElement(ce,{className:"w-5 h-5"}),f.createElement("div",{className:"ml-2 text-xs font-medium"},e.commentCount)),f.createElement("div",{onClick:e=>{e.preventDefault(),e.stopPropagation(),U?p():P()},className:(e.isVoted?"text-red-400":"text-gray-500 hover:text-gray-700 dark:hover:text-gray-300")+" flex items-center cursor-pointer ml-6"},f.createElement(me,{className:"w-4 h-4"}),f.createElement("div",{className:"ml-2 text-xs font-medium"},e.voteCount)),f.createElement(Jl,{data:{type:wl,post:e},leftClick:!0},f.createElement("div",{className:"ml-4 text-gray-500 hover:text-gray-700 dark:hover:text-gray-300 flex items-center cursor-pointer"},f.createElement(de,{className:"text-disabled w-4 h-4"}))))))));var I}));function Hs({folderId:e,serverId:t,showServerName:n,header:r}){const a=g.exports.useRef(null),[l,s,o,i]=os({folderId:e,serverId:t}),c=g.exports.useCallback(((e,t)=>{const r=e[t];return r?f.createElement("div",{className:"px-4 pb-1.5"},f.createElement(zs,{post:r,showServerName:n,index:t})):f.createElement("div",{style:{height:"1px"}})}),[n]);return f.createElement(f.Fragment,null,f.createElement(ue,{className:"scrollbar-custom dark:bg-gray-750",components:{Header:r?()=>r:null,Footer:()=>i?f.createElement("div",{className:"flex items-center justify-center h-20"},f.createElement(ll,null)):f.createElement(Wa,null)},endReached:()=>{!s&&i&&o()},itemContent:e=>c(l,e),overscan:100,ref:a,style:{overflowX:"hidden"},totalCount:(null==l?void 0:l.length)||0}))}const _s=e=>{const t=Za((e=>e.setHomePage));g.exports.useEffect((()=>t(e)))};function Bs({children:e,header:t,rightSidebar:n,leftSidebar:r}){return f.createElement("div",{className:"flex flex-col flex-grow"},t,f.createElement("div",{className:"flex h-full",style:{maxHeight:t?"calc(100% - 3rem)":"100%"}},r,f.createElement("div",{className:"flex flex-col flex-grow"},e),n))}const js=/(https?:\/\/(?:www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z]{2,}\b(?:[-a-zA-Z0-9@:%._+~#=?!&/]*)(?:[-a-zA-Z0-9@:%._+~#=?!&/]*))[\s\n]$/gi,Gs=/(?:\()https?:\/\/(?:www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z]{2,}\b(?:[-a-zA-Z0-9@:%._+~#=?!&/()]*)(?:\))[\s\n]$/gi;function Vs(e,t,n){const r=he(e,t,n);return new ge(e,((e,t,n,a)=>{const l=r.handler(e,t,n,a);return l&&l.insertText(t[0].slice(-1),a),l}))}var Ys=pe.extend({addProseMirrorPlugins(){const e=[Vs(js,this.type,(e=>({href:e[1]}))),Vs(Gs,this.type,(e=>({href:e[1]})))],t=ve({rules:e}),n=t.props.handleTextInput;return t.props.handleKeyDown=(e,t)=>{if("Enter"!==t.key)return!1;const{$cursor:r}=e.state.selection;return!!r&&n(e,r.pos,r.pos,"\n")},[t]}});const Ws=fe.create({name:"spoiler",inclusive:!1,defaultOptions:{HTMLAttributes:{"data-spoiler":""}},addAttributes:()=>({"data-spoiler":{default:""}}),parseHTML:()=>[{tag:"span[data-spoiler]"}],renderHTML({HTMLAttributes:e}){return["span",be(this.options.HTMLAttributes,e),0]},addCommands:()=>({setSpoiler:e=>({commands:t})=>t.setMark("spoiler",e),toggleSpoiler:e=>({commands:t})=>t.toggleMark("spoiler",e),unsetSpoiler:()=>({commands:e})=>e.unsetMark("spoiler")})});function Qs({text:e,setText:t}){var n;const r=xe({extensions:[Ee.configure({heading:{levels:[2,3]}}),Ys,ye,Ws],content:e,editorProps:{attributes:{class:"prose prose-sm dark:prose-dark focus:outline-none max-w-none min-h-[7.5rem] p-4"}}}),a=null!=(n=null==r?void 0:r.getHTML())?n:"";return g.exports.useEffect((()=>{t("<p></p>"===a?"":a)}),[r,a,t]),f.createElement("div",{className:"dark:bg-gray-750 rounded"},f.createElement(eo,{editor:r}),f.createElement(we,{editor:r}))}const Js=e=>y(`\n  p-1\n  rounded\n  dark:hover:bg-gray-600\n  cursor-pointer\n  ${e?"dark:bg-gray-600 dark:text-gray-300":"text-gray-600 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300"}\n`);function Zs({label:e,icon:t,small:n,onClick:r,active:a}){const l=t;return f.createElement(F,{content:e},f.createElement("div",{className:"h-9 flex items-center",onClick:r},f.createElement("div",{className:Js(a)},f.createElement(l,{className:""+(n?"w-4 h-4 mt-0.5":"w-5 h-5")}))))}const Ks=y("\n  flex\n  items-center\n  px-2\n  h-full\n  space-x-0.5\n");function Xs({children:e}){return f.createElement("div",{className:Ks},e)}function eo({editor:e}){return e?f.createElement("div",{className:"min-h-[2.25rem] border-b dark:border-gray-700 flex flex-wrap items-center divide-x dark:divide-gray-700"},f.createElement(Xs,null,f.createElement(Zs,{label:"Bold (Ctrl+B)",icon:Ne,onClick:()=>e.chain().focus().toggleBold().run(),active:e.isActive("bold")}),f.createElement(Zs,{label:"Italic (Ctrl+U)",icon:ke,onClick:()=>e.chain().focus().toggleItalic().run(),active:e.isActive("italic")}),f.createElement(Zs,{label:"Underline (Ctrl+I)",icon:Ce,onClick:()=>e.chain().focus().toggleUnderline().run(),active:e.isActive("underline")}),f.createElement(Zs,{label:"Strikethrough",icon:$e,onClick:()=>e.chain().focus().toggleStrike().run(),active:e.isActive("strike")})),f.createElement(Xs,null,f.createElement(Zs,{label:"Spoiler",icon:Ue,onClick:()=>e.chain().focus().toggleSpoiler().run(),active:e.isActive("spoiler")}),f.createElement(Zs,{label:"Inline Code",icon:Se,onClick:()=>e.chain().focus().toggleCode().run(),active:e.isActive("code")})),f.createElement(Xs,null,f.createElement(Zs,{label:"Link",icon:Pe,onClick:()=>{const t=window.prompt("URL");e.chain().focus().setLink({href:t}).run()},active:e.isActive("link")}),e.isActive("link")&&f.createElement(Zs,{label:"Remove Link",icon:Ie,onClick:()=>{e.chain().focus().unsetLink().run()}}),f.createElement(Zs,{label:"Divider",icon:Fe,onClick:()=>e.chain().focus().setHorizontalRule().run()})),f.createElement(Xs,null,f.createElement(Zs,{label:"Bulleted List",icon:Me,onClick:()=>e.chain().focus().toggleBulletList().run(),active:e.isActive("bulletList")}),f.createElement(Zs,{label:"Numbered List",icon:Re,onClick:()=>e.chain().focus().toggleOrderedList().run(),active:e.isActive("orderedList")})),f.createElement(Xs,null,f.createElement(Zs,{label:"Large Heading (Ctrl+[)",icon:Ae,onClick:()=>e.chain().focus().toggleHeading({level:2}).run(),active:e.isActive("heading",{level:2})}),f.createElement(Zs,{label:"Small Heading (Ctrl+])",icon:Ae,small:!0,onClick:()=>e.chain().focus().toggleHeading({level:3}).run(),active:e.isActive("heading",{level:3})})),f.createElement(Xs,null,f.createElement(Zs,{label:"Block Quote",icon:De,onClick:()=>e.chain().focus().toggleBlockquote().run(),active:e.isActive("blockquote")}),f.createElement(Zs,{label:"Code Block",icon:Oe,onClick:()=>e.chain().focus().toggleCodeBlock().run(),active:e.isActive("codeBlock")})),f.createElement(Xs,null,f.createElement(Zs,{label:"Emoji",icon:Le}))):null}const to=y("\n  relative\n  w-full\n  h-12\n  flex\n  items-center\n  pl-5\n  pr-10\n  text-left\n  bg-white\n  dark:bg-gray-800\n  dark:hover:bg-gray-775\n  cursor-pointer\n  focus:outline-none\n  text-sm\n  rounded-none\n  rounded-tl-xl\n"),no=y("\n  scrollbar-dark\n  absolute\n  w-full\n  py-1\n  mt-1\n  overflow-auto\n  text-sm\n  text-primary\n  bg-white\n  dark:bg-gray-775\n  rounded-md\n  shadow-lg\n  max-h-60\n  focus:outline-none\n  space-y-0.5\n");function ro({servers:e=[],server:t,setServer:n}){return f.createElement("div",{className:"col-span-1 z-10"},f.createElement(Te,{value:t,onChange:n},(({open:n})=>f.createElement(f.Fragment,null,f.createElement("div",{className:"relative"},f.createElement(Te.Button,{className:to},t?f.createElement(f.Fragment,null,f.createElement(ps,{server:t,className:"dark:bg-gray-750 rounded-full",size:7}),f.createElement("span",{className:"block truncate pl-2"},t.name)):f.createElement("span",{className:"block truncate text-red-400"},"Select a planet"),f.createElement("span",{className:"absolute inset-y-0 right-0 flex items-center pr-4 pointer-events-none"},f.createElement(qe,{className:"w-5 h-5 text-gray-400","aria-hidden":"true"}))),f.createElement(R,{show:n,as:g.exports.Fragment,leave:"transition ease-in duration-100",leaveFrom:"opacity-100",leaveTo:"opacity-0"},f.createElement(Te.Options,{static:!0,className:no},e.map((e=>f.createElement(Te.Option,{key:e.id,className:({active:e})=>(e=>y(`\n  ${e?"dark:bg-gray-750":""}\n  cursor-pointer\n  select-none\n  relative\n  focus:outline-none\n`))(e),value:e},(({selected:t})=>f.createElement("div",{className:"flex items-center h-10 pl-5 pr-4 "+(t?"dark:bg-gray-750":"")},f.createElement(ps,{server:e,size:7,className:"dark:bg-gray-725 rounded-full"}),f.createElement("span",{className:(t?"font-semibold":"font-normal")+" block truncate pl-2"},e.name)))))))))))))}const ao=(e,t)=>{const n=g.exports.useRef(e);g.exports.useEffect((()=>{n.current=e}),null!=t?t:[e]);return g.exports.useCallback(((...e)=>{var t;null==(t=n.current)||t.call(n,...e)}),[])};var lo=g.exports.forwardRef((({onChange:e,onInput:t,onBlur:n,onKeyPress:r,onKeyDown:a,onPaste:l,...s},o)=>{const i=ao(e),c=ao(t),m=ao(n),d=ao(r),u=ao(a),p=ao(l);return f.createElement(ze,{...s,ref:o,onChange:i,onInput:c,onBlur:m,onKeyPress:d,onKeyDown:u,onPaste:p})}));const so=y("\n  block\n  text-11\n  pb-1.5\n  font-semibold\n  tracking-widest\n  uppercase\n  text-tertiary\n"),oo=y("\n  text-base\n  text-primary\n  disabled:opacity-50\n  bg-green-600\n  rounded\n  px-5\n  h-9\n  flex\n  items-center\n  disabled:cursor-not-allowed\n  focus:outline-none\n  select-none\n"),io=y("\n  text-base\n  text-tertiary\n  focus:outline-none\n  px-2\n  h-9\n  flex\n  items-center\n  select-none\n"),co=e=>y(`\n  px-5\n  h-12\n  border-b-2\n  dark:hover:bg-gray-775\n  ${e?"dark:border-gray-100 text-primary dark:bg-gray-775":"border-transparent text-tertiary"}\n  flex\n  items-center\n  justify-center\n  select-none\n  cursor-pointer\n  text-sm\n  last:rounded-tr-xl\n`),mo=y("\n  px-4\n  h-10\n  placeholder-tertiary\n  dark:bg-gray-750\n  rounded\n  text-sm\n  text-primary\n  w-full\n  focus:outline-none\n"),uo="Text",po="Link",go="Image";function vo({open:e,setOpen:r,serverId:a}){var l,s,o,i,c,m,d,u,p,v;const[h,b]=g.exports.useState(""),[x,{loading:E}]=function(e){const t={...On,...e};return n(_r,t)}(),{t:y}=N(),{push:w}=S(),[k]=Ya(),C=null!=(l=null==k?void 0:k.servers)?l:[],[$,U]=g.exports.useState(a?null==C?void 0:C.find((e=>e.id===a)):null),[P,I]=g.exports.useState(uo),{register:F,handleSubmit:R,reset:A,formState:D,watch:O,setValue:L,trigger:q}=He({mode:"onChange"}),z=O("linkUrl"),[H,_]=g.exports.useState("");_e((()=>{_(z)}),500,[z]);const B=O("title"),{data:j,loading:G}=function(e){const n={...On,...e};return t(Pa,n)}({variables:{linkUrl:H},skip:!H||!Be(H)}),V=null==j?void 0:j.getLinkMeta,[Y,W]=g.exports.useState([]);function Q(e){return new Promise((function(t,n){let r=new FileReader;r.onload=function(){t(r.result)},r.onerror=function(){n(r)},r.readAsDataURL(e)}))}const[J,Z]=g.exports.useState(0),K=()=>{r(!1),setTimeout((()=>{Z(0),W([]),I(uo),A()}),300)};return f.createElement(Xl,{isOpen:e,close:K},f.createElement("form",{onSubmit:R((({title:e,linkUrl:t})=>{x({variables:{input:{title:e,text:h&&P===uo?h:null,linkUrl:t&&P===po?t:null,serverId:$.id,images:Y&&Y.length>0&&P===go?Y.map((({file:e,caption:t,linkUrl:n})=>({file:e,caption:t,linkUrl:n}))):null}}}).then((({data:e})=>{const t=null==e?void 0:e.createPost;t&&(r(!1),A(),w(t.relativeUrl))}))})),className:"max-w-screen-md w-full dark:bg-gray-800 text-left rounded-xl"},f.createElement("div",{className:"grid grid-cols-4"},f.createElement(ro,{servers:C,server:$,setServer:U}),f.createElement("div",{className:co(P===uo),onClick:()=>{I(uo),L("linkUrl",""),W([])}},f.createElement(se,{className:"mr-2 w-5 h-5"}),"Text"),f.createElement("div",{className:co(P===po),onClick:()=>{I(po),b(""),W([])}},f.createElement(je,{className:"mr-2 w-5 h-5"}),"Link"),f.createElement("div",{className:co(P===go),onClick:()=>{I(go),L("linkUrl",""),q("linkUrl"),b("")}},f.createElement(Ge,{className:"mr-2 w-5 h-5"}),"Images")),f.createElement("div",{className:"p-5"},f.createElement("div",{className:"relative"},f.createElement("label",{htmlFor:"title",className:so},"Title",(null==B?void 0:B.length)>0&&` (${null==B?void 0:B.length}/300)`),f.createElement("input",{maxLength:300,className:mo,...F("title",{required:!0}),id:"title"})),P===uo&&f.createElement("div",{className:"pt-5"},f.createElement(Qs,{text:h,setText:b})),P===po&&f.createElement(f.Fragment,null,f.createElement("div",{className:"pb-5 pt-1.5"},(null==V?void 0:V.title)&&B!==(null==V?void 0:V.title)&&f.createElement("span",{className:"text-xs text-blue-500 hover:underline cursor-pointer line-clamp-1",onClick:()=>{L("title",null==V?void 0:V.title),q("title")}},null==V?void 0:V.title)),f.createElement("label",{htmlFor:"linkUrl",className:"block text-11 pb-1.5 font-semibold tracking-widest uppercase text-tertiary"},"Link URL"),f.createElement("div",{className:"relative h-10"},f.createElement(je,{className:"top-1/2 left-2.5 transform -translate-y-1/2 absolute w-5 h-5 text-mid"}),f.createElement("input",{maxLength:2e3,className:"px-10 h-10 dark:bg-gray-750 rounded text-sm text-primary w-full focus:outline-none",...F("linkUrl",{validate:e=>!e||Be(e)}),id:"linkUrl"}),G&&f.createElement("div",{className:"top-1/2 right-2.5 transform -translate-y-1/2 absolute"},f.createElement(ll,null))),z&&!Be(z)&&f.createElement("div",{className:"text-13 text-red-400 pt-1"},"Must be a valid URL"),H&&Be(H)&&!!V&&f.createElement("div",{className:"mt-5"},f.createElement(qs,{dark:!0,metadata:V}))),P===go&&f.createElement("div",{className:"mt-5"},Y&&Y.length>0?f.createElement("div",null,f.createElement("div",{className:"flex"},f.createElement("div",{className:"flex scrollbar-custom items-center space-x-3 overflow-x-auto border dark:border-gray-700 rounded-md h-31 px-3 max-w-full w-full"},Y.map(((e,t)=>f.createElement("div",{key:t,onClick:()=>Z(t),className:"cursor-pointer group relative rounded border "+(J===t?"dark:border-gray-500":"dark:border-transparent")},f.createElement("div",{className:"max-w-25 max-h-25 min-w-[6.25rem] min-h-[6.25rem] transform "+(J===t?"scale-85":"")},f.createElement("div",{className:"absolute top-1 right-1 rounded-full bg-black p-0.5 hidden group-hover:block z-10",onClick:()=>{J>=t&&J>0&&setImmediate((()=>Z(J-1)));const e=Y.slice();e.splice(t,1),W(e)}},f.createElement(T,{className:"w-4.5 h-4.5 text-white"})),f.createElement("div",{className:"absolute inset-0 bg-black rounded bg-opacity-0 group-hover:bg-opacity-50"}),f.createElement("div",{style:{backgroundImage:`url(${e.data})`},className:"max-w-25 max-h-25 min-w-[6.25rem] min-h-[6.25rem] bg-cover bg-center select-none rounded"}))))),f.createElement("div",{className:"w-25 h-25 rounded relative flex items-center justify-center border dark:border-gray-700 border-dashed cursor-pointer transition dark:hover:bg-gray-775"},f.createElement("input",{type:"file",id:"file",accept:"image/png,image/jpeg,image/webp,image/gif",hidden:!0,multiple:!0,onChange:e=>{const t=e.target.files;if(t&&t.length>0){W([...Y,...Array.from(t).map((e=>({file:e,caption:"",linkUrl:""})))]);let e=[];for(let n=0;n<t.length;n++)e.push(Q(t[n]));Promise.all(e).then((e=>{W([...Y,...e.map(((e,n)=>({file:t[n],caption:"",linkUrl:"",data:e})))])}))}}}),f.createElement("label",{htmlFor:"file",className:"absolute inset-0 block cursor-pointer"}),f.createElement(M,{className:"w-1/2 h-1/2 text-tertiary"})))),Y&&(null==Y?void 0:Y.length)>0&&f.createElement("div",{className:"mt-5 flex space-x-5"},f.createElement("div",{className:"w-81 h-81 bg-contain bg-center bg-no-repeat dark:bg-gray-775 flex-shrink-0",style:{backgroundImage:`url(${null==(s=Y[J])?void 0:s.data})`}}),f.createElement("div",{className:"space-y-5 max-w-full flex-grow"},f.createElement("div",null,f.createElement("label",{htmlFor:"caption",className:so},"Caption",(null==(i=null==(o=Y[J])?void 0:o.caption)?void 0:i.length)>0&&` (${null==(m=null==(c=Y[J])?void 0:c.caption)?void 0:m.length}/180)`),f.createElement(lo,{id:"caption",className:"px-4 py-2.5 min-h-[2.5rem] dark:bg-gray-750 rounded text-sm text-primary focus:outline-none break-word",html:(null==(d=Y[J])?void 0:d.caption)||"",onChange:e=>{var t,n;if((null==(n=null==(t=Y[J])?void 0:t.caption)?void 0:n.length)>=180)return;const r=Y.slice();let a=e.target.value;a.length>180&&(a=a.substring(0,181)),r[J].caption=a,W(r)}})),f.createElement("div",null,f.createElement("label",{htmlFor:"link",className:so},"Link"),f.createElement("input",{id:"link",className:mo,value:(null==(u=Y[J])?void 0:u.linkUrl)||"",onChange:e=>{const t=Y.slice();t[J].linkUrl=e.target.value,W(t)}}),(null==(p=Y[J])?void 0:p.linkUrl)&&!Be(null==(v=Y[J])?void 0:v.linkUrl)&&f.createElement("div",{className:"text-13 text-red-400 pt-1"},"Must be a valid URL"))))):f.createElement("div",{className:"relative"},f.createElement("input",{type:"file",id:"files",accept:"image/png,image/jpeg,image/webp,image/gif",hidden:!0,multiple:!0,onChange:e=>{const t=e.target.files;if(t&&t.length>0){W(Array.from(t).map((e=>({file:e,caption:"",linkUrl:""}))));let e=[];for(let n=0;n<t.length;n++)e.push(Q(t[n]));Promise.all(e).then((e=>W(e.map(((e,n)=>({file:t[n],caption:"",linkUrl:"",data:e}))))))}}}),f.createElement("label",{htmlFor:"files",className:"select-none cursor-pointer flex items-center justify-center text-base text-tertiary h-30 border border-dashed dark:border-gray-700 rounded-md transition dark:hover:bg-gray-775"},"Drag 'n' drop some images here, or click to select images"))),f.createElement("div",{className:"flex items-center pt-5"},f.createElement("div",{className:"ml-auto flex items-center space-x-3"},f.createElement("button",{type:"button",className:io,onClick:()=>K()},y("post.create.cancel")),f.createElement("button",{type:"submit",className:oo,disabled:!D.isValid||!$||E},y("post.create.submit"),E&&f.createElement(ll,{className:"w-5 h-5 text-primary ml-3"})))))))}function ho({server:e}){const{t:t}=N(),[n,r]=g.exports.useState(!1),[a]=Ya();return f.createElement(f.Fragment,null,f.createElement(vo,{open:n,setOpen:r,serverId:null==e?void 0:e.id}),f.createElement("div",{className:"p-4"},f.createElement("div",{onClick:()=>r(!0),className:"dark:bg-gray-700 h-13 flex items-center rounded transition dark:hover:bg-gray-650 cursor-pointer"},f.createElement("div",{className:"px-3 border-r dark:border-gray-650 h-7"},f.createElement(us,{user:a,size:7})),f.createElement("div",{className:"text-sm text-secondary px-3"},t("post.createPost")))))}const fo=({onClick:e,title:t,body:n,icon:r,timestamp:a})=>{if("granted"!==Notification.permission)return;new Notification(t,{body:n,icon:r,timestamp:a,silent:!0}).onclick=e;const l=new Audio((window.electron?".":"")+"/notification.mp3");l.volume=.5,l.play()},bo=y("\n  cursor-pointer\n  hover:underline\n");function xo(){return f.createElement(Ja,{right:!0},f.createElement("div",{className:"px-2.5 py-2.5"},f.createElement("div",{className:"dark:border-gray-750 border rounded p-2.5 text-xs text-tertiary space-x-3 leading-5"},f.createElement(b,{to:"/about",target:"_blank",className:bo},"Terms"),f.createElement(b,{to:"/about",target:"_blank",className:bo},"Privacy Policy"),f.createElement(b,{to:"/about",target:"_blank",className:bo},"Content Policy"),f.createElement("a",{href:"https://github.com/joincomet/comet",target:"_blank",rel:"noopener noreferrer",className:bo},"GitHub"),f.createElement("a",{href:"https://discord.gg/NPCMGSm",target:"_blank",rel:"noopener noreferrer",className:bo},"Discord"))))}function Eo(){N(),Za((e=>e.showFolders));const[e]=Ya(),t=g.exports.useRef(null);return _s(null),g.exports.useEffect((()=>{"default"===Notification.permission&&Notification.requestPermission().then((function(e){"granted"===e&&fo({title:"Notifications enabled!",icon:"/icons/icon.png"})}))})),f.createElement(f.Fragment,null,f.createElement(Ve,null,f.createElement("title",null,"Home – Comet")),f.createElement(Bs,{header:f.createElement(ls,{refreshPosts:()=>{t&&t.current&&t.current.refresh()}}),rightSidebar:f.createElement(xo,null)},f.createElement(Hs,{showServerName:!0,header:e?f.createElement(ho,null):null})))}function yo({friend:e,children:t}){const{t:n}=N(),{push:r}=S();return f.createElement("div",{className:"group px-2 dark:hover:bg-gray-725 rounded-lg"},f.createElement("div",{onClick:()=>r(`/dm/@${e.username}`),className:"relative h-16 py-2 flex items-center cursor-pointer group border-t dark:border-gray-700"},f.createElement("div",{className:"flex"},f.createElement(us,{user:e,size:9,showOnline:!0,dotClassName:"w-2.5 h-2.5 ring-3 dark:ring-gray-750"}),f.createElement("div",null,f.createElement("div",{className:"text-base text-secondary font-medium ml-3"},e.username),f.createElement("div",{className:"text-13 text-tertiary font-medium ml-3 leading-5"},e.isOnline?n("user.online"):n("user.offline")))),f.createElement("div",{className:"ml-auto flex items-center space-x-3"},t)))}const wo=y("\n  rounded-full\n  dark:bg-gray-800\n  dark:group-hover:bg-gray-900\n  h-9 w-9\n  flex\n  items-center\n  justify-center\n  text-tertiary\n");function No({children:e,label:t,onClick:n}){const{t:r}=N();return f.createElement(F,{content:r(t)},f.createElement("div",{onClick:n,className:wo},e))}function ko({friend:e}){const{t:t}=N();return f.createElement(yo,{friend:e},f.createElement(No,{label:"friends.sendMessage"},f.createElement(ce,{className:"w-5 h-5"})),f.createElement(F,{content:t("more")},f.createElement("button",{onClick:e=>{e.stopPropagation(),e.preventDefault()},className:wo},f.createElement(de,{className:"w-5 h-5"}))))}function Co({count:e}){return f.createElement("div",{className:"rounded-full bg-red-500 w-4 h-4 flex items-center justify-center"},f.createElement("div",{className:"leading-none text-11 font-medium text-primary",style:{marginLeft:"-1px"}},e))}function $o({pendingCount:e=0}){return f.createElement(ns,{icon:f.createElement(Ye,{className:"h-5 w-5"}),title:"Friends",showDivider:!0},f.createElement("div",{className:"flex items-center space-x-4"},f.createElement(Uo,{page:"Online"}),f.createElement(Uo,{page:"All"}),f.createElement(Uo,{page:"Pending",pendingCount:e}),f.createElement(Uo,{page:"Blocked"}),f.createElement(Uo,{page:"Add Friend",green:!0})))}function Uo({page:e,green:t=!1,pendingCount:n=0}){const[r,a]=Za((e=>[e.friendsPage,e.setFriendsPage]));return f.createElement(rs,{page:e,green:t,currentPage:r,setCurrentPage:a},e,!!n&&f.createElement("div",{className:"ml-2"},f.createElement(Co,{count:n})))}function So({user:e}){const[t]=Zr(),[n]=Xr();return f.createElement(Jl,{data:{type:yl,user:e}},f.createElement(yo,{friend:e},e.relationshipStatus===tr.FriendRequestOutgoing?f.createElement(No,{label:"Cancel",onClick:n=>{n.stopPropagation(),t({variables:{input:{userId:e.id}}})}},f.createElement(T,{className:"w-5 h-5"})):f.createElement(f.Fragment,null,f.createElement(No,{label:"Accept",onClick:t=>{t.stopPropagation(),n({variables:{input:{userId:e.id,accept:!0}}})}},f.createElement(L,{className:"w-5 h-5"})),f.createElement(No,{label:"Ignore",onClick:t=>{t.stopPropagation(),n({variables:{input:{userId:e.id,accept:!1}}})}},f.createElement(T,{className:"w-5 h-5"})))))}function Po({children:e}){return f.createElement("div",{className:"max-h-full h-full dark:bg-gray-750 px-6 py-4 scrollbar-custom"},e)}const Io=y("\n  px-2\n  pb-2\n  text-11\n  text-tertiary\n  uppercase\n  tracking-wide\n  font-semibold\n  select-none\n");function Fo(){const{friends:e,outgoingFriendRequests:t,incomingFriendRequests:n,blocking:r}=(()=>{var e,t,n,r,a;const[l]=Ya();return{friends:null!=(e=null==l?void 0:l.relatedUsers.filter((e=>e.relationshipStatus===tr.Friends)))?e:[],blocking:null!=(t=null==l?void 0:l.relatedUsers.filter((e=>e.relationshipStatus===tr.Blocking)))?t:[],blockedBy:null!=(n=null==l?void 0:l.relatedUsers.filter((e=>e.relationshipStatus===tr.Blocked)))?n:[],outgoingFriendRequests:null!=(r=null==l?void 0:l.relatedUsers.filter((e=>e.relationshipStatus===tr.FriendRequestOutgoing)))?r:[],incomingFriendRequests:null!=(a=null==l?void 0:l.relatedUsers.filter((e=>e.relationshipStatus===tr.FriendRequestIncoming)))?a:[]}})(),a=e.filter((e=>e.isOnline)),l=t.concat(n),s=Za((e=>e.friendsPage)),[o,i]=g.exports.useState("");return _s("friends"),f.createElement(Bs,{header:f.createElement($o,{pendingCount:n.length})},f.createElement(Ve,null,f.createElement("title",null,"Friends – Comet")),f.createElement(Po,null,"Online"===s&&f.createElement(f.Fragment,null,f.createElement("div",{className:Io},"Online - ",a.length),a.map((e=>f.createElement(ko,{friend:e,key:e.id})))),"All"===s&&f.createElement(f.Fragment,null,f.createElement("div",{className:Io},"All Friends - ",e.length),e.map((e=>f.createElement(ko,{friend:e,key:e.id})))),"Pending"===s&&f.createElement(f.Fragment,null,f.createElement("div",{className:Io},"Pending Requests - ",l.length),l.map((e=>f.createElement(So,{user:e,key:`${e.relationshipStatus===tr.FriendRequestOutgoing?"outgoing":"incoming"}-${e.id}`})))),"Blocked"===s&&f.createElement(f.Fragment,null,f.createElement("div",{className:Io},"Blocked Users - ",r.length)),"Add Friend"===s&&f.createElement("div",null,f.createElement("div",{className:"font-bold uppercase text-base text-primary"},"Add Friend"),f.createElement("div",{className:"text-secondary text-sm mt-3 mb-4"},"You can add a friend with their Comet Tag. It's cAsE sEnSitIvE!"),f.createElement("div",{className:"relative"},f.createElement("input",{value:o,onChange:e=>i(e.target.value),placeholder:"Enter a Username#0000",className:"w-full h-14 rounded-xl px-4 dark:bg-gray-775 border dark:border-gray-850 placeholder-gray-400 dark:placeholder-gray-600 block focus:outline-none text-base text-secondary"}),f.createElement("button",{className:"absolute right-4 text-13 text-primary font-medium bg-blue-500 rounded h-8 px-4 top-1/2 transform -translate-y-1/2 disabled:opacity-50",disabled:!o},"Send Friend Request")))))}const Mo=e=>{if(!e)return We;switch(e){case"Featured":return ot;case"Arts":return st;case"Business":return lt;case"Culture":return Ye;case"Discussion":return ce;case"Entertainment":return at;case"Gaming":return rt;case"Health":return nt;case"Hobbies":return tt;case"Lifestyle":return et;case"Memes":return Le;case"Meta":return Xe;case"News":return Ke;case"Politics":return Ze;case"Programming":return Se;case"Science":return nl;case"Sports":return Je;case"Technology":return rl;case"Other":return Qe}};function Ro({className:e}){const[t]=g.exports.useState((new Date).getTime().toString());return f.createElement("svg",{className:e,fill:"currentColor",viewBox:"0 0 30.327 5.0518"},f.createElement("defs",null,f.createElement("linearGradient",{id:t,x1:"7.7677",x2:"14.802",y1:"5.3857",y2:"5.3857",gradientTransform:"translate(1.0113e-4,1.6184e-4)",gradientUnits:"userSpaceOnUse"},f.createElement("stop",{stopColor:"#6875f5",offset:"0"}),f.createElement("stop",{stopColor:"#f98080",offset:"1"}))),f.createElement("g",{transform:"translate(-56.423 -63.81)",strokeWidth:".26458"},f.createElement("path",{d:"m61.235 68.093q-0.18344 0.16933-0.50094 0.34572t-0.72672 0.30339q-0.40922 0.11994-0.87489 0.11994-0.5715 0-1.0654-0.17639-0.49389-0.18344-0.86783-0.51506-0.36689-0.33161-0.5715-0.79728-0.20461-0.47272-0.20461-1.0513 0-0.54328 0.21167-1.0019 0.21872-0.45861 0.59972-0.79728t0.87489-0.52211q0.49389-0.1905 1.0442-0.1905 0.45156 0 0.86783 0.127 0.41628 0.11994 0.74083 0.31044 0.33161 0.1905 0.52917 0.39511l-0.47272 0.61383q-0.34572-0.30339-0.76906-0.49389-0.42333-0.19756-0.9525-0.19756-0.35983 0-0.6985 0.11994t-0.61383 0.35278q-0.26811 0.22578-0.43039 0.55033-0.15522 0.32456-0.15522 0.73378 0 0.59267 0.28222 0.99483 0.28222 0.39511 0.74083 0.59972 0.46567 0.19756 0.98778 0.19756 0.381 0 0.68439-0.09878 0.30339-0.10583 0.54328-0.254t0.43039-0.29633z"}),f.createElement("path",{d:"m70.164 63.853 1.9826 2.6317 1.9826-2.6317h0.73378v4.9389h-0.762v-2.0743q0-0.45861 0.01411-0.86783 0.02117-0.40922 0.0635-0.81844l-1.8062 2.3424h-0.46567l-1.8062-2.3354q0.04939 0.40217 0.0635 0.81139t0.01411 0.86783v2.0743h-0.762v-4.9389z"}),f.createElement("path",{d:"m77.106 63.853h3.8241v0.73378h-3.0621v1.3053h2.6741v0.73378h-2.6741v1.4323h3.0621v0.73378h-3.8241z"}),f.createElement("path",{d:"m84.203 68.792v-4.2051h-1.7357v-0.73378h4.2827v0.73378h-1.7851v4.2051z"})),f.createElement("path",{transform:"rotate(32 15.881 -1.0183)",fillRule:"evenodd",d:"m11.03 3.2283a2.4814 2.526 7.3662e-7 0 0-0.30277 0.22149 1.9313 1.966 7.3662e-7 0 1 1.5991 1.936 1.9313 1.966 7.3662e-7 0 1-1.5988 1.9369 2.4814 2.526 7.3662e-7 0 0 1.5929 0.589 2.4814 2.526 7.3662e-7 0 0 2.4814-2.5255 2.4814 2.526 7.3662e-7 0 0-2.4815-2.526 2.4814 2.526 7.3662e-7 0 0-1.2903 0.36814zm-3.2345 2.2039c-0.18296 0.086815 0.49439 0.074836 3.0594 0.9212 0.46608 0.15383 0.88156-0.43345 0.88156-0.96766s-0.41546-1.1208-0.88154-0.96706l-2.9313 0.96698c-0.058262 0.019224-0.10199 0.034146-0.12813 0.046548z",fill:`url(#${t})`}))}function Ao({category:e}){const{t:t}=N(),[n,r]=Za((e=>[e.exploreCategory,e.setExploreCategory])),a=Mo(e);return f.createElement(tl,{onClick:()=>r(e),active:n===e},f.createElement(a,{className:"w-5 h-5 mr-3"}),t(e?`category.${e}`:"explore.all"))}function Do({sort:e,label:t,icon:n}){const[r,a]=Za((e=>[e.exploreSort,e.setExploreSort])),l=n;return f.createElement(tl,{onClick:()=>a(e),active:r===e},f.createElement(l,{className:"w-5 h-5 mr-3"}),t)}function Oo(){const{t:e}=N(),t=g.exports.useMemo((()=>{let e=Object.keys(rr);const t=e.splice(e.indexOf(rr.Other),1);return e.push(...t),e}),[]);return f.createElement(Ja,null,f.createElement("div",{className:"h-12 border-b dark:border-gray-850 shadow flex items-center px-5 text-base font-medium"},f.createElement(Ro,{className:"h-4"})),f.createElement("div",{className:"px-1.5"},f.createElement(Kl,null,"Sort"),f.createElement("div",{className:"space-y-0.5"},f.createElement(Do,{label:"Most Popular",sort:"Top",icon:z}),f.createElement(Do,{label:"Recently Created",sort:"New",icon:H})),f.createElement(Kl,null,e("explore.categories")),f.createElement("div",{className:"space-y-0.5"},f.createElement(Ao,{category:"Featured"}),f.createElement(Ao,{category:null}),t.map((e=>f.createElement(Ao,{key:e,category:e}))))))}function Lo({server:e,shadow:t=!1,className:n=""}){var r;const{t:a}=N(),l=Mo(e.category),s=Za((e=>e.exploreCategory));return f.createElement(Jl,{data:{type:Cl,server:e,enableFeatured:!0,enableFeaturedPosition:"Featured"===s}},f.createElement(b,{to:`/+${e.name}`,className:`${n} relative relative flex flex-col w-full rounded-lg group dark:bg-gray-800 dark:hover:bg-gray-850 duration-200 transform transition hover:shadow-xl ${t?"shadow-lg":""}`},f.createElement("div",{className:"h-32 rounded-t-lg w-full bg-cover bg-center bg-no-repeat relative bg-gradient-to-br from-red-400 to-indigo-600",style:(null==e?void 0:e.bannerUrl)?{backgroundImage:`url(${null==e?void 0:e.bannerUrl})`}:void 0},f.createElement("div",{className:"absolute left-4 -bottom-3"},f.createElement(ps,{size:10,server:e,className:"dark:bg-gray-750 rounded-xl ring-4 dark:ring-gray-800 transition dark:group-hover:ring-gray-850 group-hover:shadow-md"}))),f.createElement("div",{className:"flex flex-col flex-grow px-4 pt-5 pb-4 h-40"},f.createElement("div",{className:"text-lg font-semibold text-secondary"},null==e?void 0:e.displayName),f.createElement("div",{className:"text-13 text-tertiary line-clamp-3 pt-1"},(null==e?void 0:e.description)||"No description"),f.createElement("div",{className:"flex mt-auto text-xs"},f.createElement("div",{className:"inline-flex items-center"},f.createElement(it,{className:"w-4 h-4 text-tertiary"}),f.createElement("div",{className:"ml-2 text-tertiary"},a("server.memberCount",{count:null!=(r=null==e?void 0:e.userCount)?r:0}))),f.createElement("div",{className:"ml-auto inline-flex items-center"},f.createElement(l,{className:"w-4 h-4 text-tertiary"}),f.createElement("div",{className:"ml-2 text-tertiary"},e.category))))))}function To(){var e;const[t,n]=g.exports.useState(0),[r,a]=Za((e=>[e.exploreCategory,e.exploreSort])),{data:l}=Aa({variables:{sort:a,category:r&&"Featured"!==r?r:null,featured:"Featured"===r,page:t,pageSize:20},fetchPolicy:"cache-and-network",nextFetchPolicy:"cache-first"}),s=null!=(e=null==l?void 0:l.publicServers)?e:[];return f.createElement(Bs,{leftSidebar:f.createElement(Oo,null)},f.createElement(Ve,null,f.createElement("title",null,"Explore Planets – Comet")),f.createElement(Po,null,f.createElement("div",{className:"px-8 py-8"},f.createElement("div",{className:"grid grid-cols-1 gap-4 lg:grid-cols-3 2xl:grid-cols-5"},s.map((e=>f.createElement(Lo,{server:e,key:e.id})))),!s.length&&f.createElement(Wa,null,"Nothing here yet!"))))}function qo(){return f.createElement(ns,{icon:f.createElement(ct,{className:"h-5 w-5"}),title:"Inbox",showDivider:!0},f.createElement("div",{className:"flex items-center space-x-4"},f.createElement(zo,{page:"Unread"}),f.createElement(zo,{page:"All"})))}function zo({page:e}){const[t,n]=Za((e=>[e.inboxPage,e.setInboxPage]));return f.createElement(rs,{page:e,currentPage:t,setCurrentPage:n})}function Ho({reply:e}){const t=Za((e=>e.inboxPage)),{comment:r}=e,{parentComment:a,post:l}=r,[s]=Ya(),[o]=function(e){const t={...On,...e};return n(ca,t)}({optimisticResponse:{markReplyRead:{...e,isRead:!0}},update(e,{data:{markReplyRead:n}}){const r={query:Da,variables:{input:{userId:s.id,unreadOnly:"Unread"===t}}},a=e.readQuery(r);a&&a.replies.map((e=>e.id)).includes(n.id)&&e.writeQuery({...r,data:{replies:a.replies.filter((e=>e.id!==n.id))}})}});return f.createElement(b,{to:`${l.relativeUrl}#${r.id}`,className:"block dark:bg-gray-800 dark:hover:bg-gray-825 rounded p-3 cursor-pointer relative"},f.createElement("div",{className:"flex"},f.createElement("div",{className:"text-13 hover:underline font-medium text-tertiary pr-5 leading-5"},l.title),f.createElement("div",{className:"flex items-center ml-auto h-5"},f.createElement("div",{className:"text-mid text-13 font-medium mr-2 leading-5"},l.server.name),f.createElement(ps,{server:l.server,size:5,className:"rounded-full"}))),a?f.createElement("div",null,f.createElement(_o,{comment:a}),f.createElement("div",{className:"ml-7 mt-2 border-t dark:border-gray-750"},f.createElement(_o,{comment:r}))):f.createElement(_o,{comment:r}),f.createElement("div",{className:"flex items-center pt-3 border-t dark:border-gray-750 mt-2"},f.createElement("div",{className:"flex items-center highlightable",onClick:t=>{t.stopPropagation(),t.preventDefault(),o({variables:{input:{replyId:e.id}}})}},f.createElement(L,{className:"h-5 w-5"}),f.createElement("div",{className:"ml-2 text-xs font-medium"},"Mark Read"))))}function _o({comment:e}){var t,n,r,a,l,s;return f.createElement("div",{className:"flex space-x-3 pt-3"},f.createElement("div",{onClick:e=>{e.stopPropagation(),e.preventDefault()}},f.createElement(Jl,{data:{type:yl,user:e.author}},f.createElement(vs,{user:e.author,role:null==(t=e.serverUser)?void 0:t.role},f.createElement(us,{user:e.author,size:7})))),f.createElement("div",null,f.createElement("div",{className:"flex items-end pb-1.5"},f.createElement("div",{onClick:e=>{e.stopPropagation(),e.preventDefault()}},f.createElement(Jl,{data:{type:yl,user:e.author}},f.createElement(vs,{user:e.author,role:null==(n=e.serverUser)?void 0:n.role},f.createElement("div",{className:"text-sm font-medium cursor-pointer hover:underline leading-none "+(e.author.color?"":"text-primary"),style:{color:null==(a=null==(r=e.serverUser)?void 0:r.role)?void 0:a.color}},null!=(s=null==(l=e.author)?void 0:l.username)?s:"[deleted]")))),f.createElement("div",{className:"text-11 text-mid font-medium pl-2 leading-none"},hs(e.createdAt))),f.createElement("div",{className:"prose prose-sm dark:prose-dark",dangerouslySetInnerHTML:{__html:e.text}})))}const Bo="px-2 pb-2 text-11 text-tertiary uppercase tracking-widest font-semibold";function jo(){var e;const t=Za((e=>e.inboxPage));_s("inbox");const[n]=Ya(),{data:r}=Oa({variables:{input:{unreadOnly:"Unread"===t}},skip:!n}),a=null!=(e=null==r?void 0:r.replies)?e:[];return f.createElement(Bs,{header:f.createElement(qo,null)},f.createElement(Ve,null,f.createElement("title",null,`(${a.length}) Inbox – Comet`)),f.createElement(Po,null,"Unread"===t&&f.createElement(f.Fragment,null,f.createElement("div",{className:Bo},"Unread - ",a.length)),"All"===t&&f.createElement(f.Fragment,null,f.createElement("div",{className:Bo},"All - ",a.length)),0===a.length&&f.createElement(Wa,null,"You are all caught up!"),f.createElement("div",{className:"space-y-1.5"},a.map((e=>f.createElement(Ho,{reply:e,key:e.id}))))))}function Go({user:e}){var t;return f.createElement(ns,{icon:f.createElement(mt,{className:"w-5 h-5"}),title:f.createElement(f.Fragment,null,null!=(t=null==e?void 0:e.username)?t:"",f.createElement("div",{className:"w-2.5 h-2.5 ml-3 rounded-full "+((null==e?void 0:e.isOnline)?"bg-green-500":"bg-gray-600")}))})}const Vo=["application/vnd.rar","application/x-tar","application/zip","application/x-7z-compressed","application/java-archive","application/x-bzip","application/x-bzip2","application/gzip","application/x-freearc"],Yo=["application/msword","application/vnd.openxmlformats-officedocument.wordprocessingml.document","application/x-abiword","application/rtf","application/vnd.oasis.opendocument.text"],Wo=["application/xhtml+xml","application/xml","text/xml","application/json","application/ld+json","text/css","application/x-csh","text/html","text/javascript","application/x-httpd-php","application/x-sh","application/vnd.mozilla.xul+xml"],Qo=["application/vnd.ms-excel","application/vnd.openxmlformats-officedocument.spreadsheetml.sheet","application/vnd.oasis.opendocument.spreadsheet"],Jo=["application/vnd.ms-powerpoint","application/vnd.openxmlformats-officedocument.presentationml.presentation","application/vnd.oasis.opendocument.presentation"],Zo=e=>g.exports.useMemo((()=>e?e.startsWith("audio")?dt:e.startsWith("image")?ut:e.startsWith("video")?pt:"text/csv"===e?gt:"application/pdf"===e?vt:Yo.includes(e)?ht:Qo.includes(e)?ft:Jo.includes(e)?bt:Vo.includes(e)?xt:Wo.includes(e)?Et:yt:null),[e]);function Ko({message:e}){const[t,n]=g.exports.useState(!1);return e.image?f.createElement("div",{className:"pt-1"},f.createElement("img",{onClick:()=>n(!0),src:e.image.smallUrl,alt:"",className:"rounded cursor-pointer",width:e.image.smallWidth,height:e.image.smallHeight}),f.createElement(Xl,{closeOnOverlayClick:!0,close:()=>n(!1),isOpen:t},f.createElement("div",{className:"mx-auto"},f.createElement("div",{className:"text-left"},f.createElement("img",{onClick:e=>e.stopPropagation(),src:e.image.popupUrl,alt:"",width:e.image.popupWidth,height:e.image.popupHeight}),f.createElement("div",{className:"pt-1"},f.createElement("a",{href:e.image.originalUrl,className:"hover:underline cursor-pointer text-mid font-semibold text-13 focus:outline-none",target:"_blank",rel:"noreferrer noopener",onClick:e=>e.stopPropagation()},"Open original")))))):null}function Xo({user:e,channel:t,group:n}){return f.createElement("div",{className:"px-4 py-5.5 flex items-end"},f.createElement("div",null,!!e&&f.createElement(f.Fragment,null,f.createElement(us,{user:e,size:20}),f.createElement("div",{className:"text-3xl font-semibold pt-4 text-primary"},e.username),f.createElement("div",{className:"pt-2 text-tertiary select-none text-base"},"This is the beginning of your direct message history with"," ",f.createElement("span",{className:"font-semibold"},"@",e.username))),!!t&&f.createElement(f.Fragment,null,f.createElement("div",{className:"rounded-full flex items-center justify-center w-20 h-20 dark:bg-gray-700"},f.createElement(sl,{className:"w-2/3 h-2/3 text-primary"})),f.createElement("div",{className:"text-3xl font-semibold pt-4 text-primary"},"Welcome to #",t.name,"!"),f.createElement("div",{className:"pt-2 text-tertiary select-none text-base"},"This is the start of the #",t.name," channel.")),!!n&&f.createElement(f.Fragment,null,f.createElement("div",{className:"rounded-full flex items-center justify-center w-20 h-20 dark:bg-gray-700"},f.createElement(it,{className:"w-2/3 h-2/3 text-primary"})),f.createElement("div",{className:"text-3xl font-semibold pt-4 text-primary"},n.name),f.createElement("div",{className:"pt-2 text-tertiary select-none text-base"},"Welcome to the beginning of the"," ",f.createElement("span",{className:"font-semibold"},n.displayName)," group."))))}var ei=g.exports.memo((function({index:e,message:t,prevMessage:n,server:r,channel:a,group:l,user:s}){var o,i,c,m,d,u;const[p]=Ya(),v=t.isEveryoneMentioned||t.mentionedUsers.map((e=>e.id)).includes(null==p?void 0:p.id),h=Zo(null==(o=null==t?void 0:t.file)?void 0:o.mime),b=g.exports.useCallback((e=>{var t,n;const r=null==(n=null==(t=e.target)?void 0:t.dataset)?void 0:n.mention;r&&r.substring(2,r.length-1)}),[t]),x=0===e||n&&(!n.text||n.author.id!==t.author.id);return t.type===Gn.Initial?f.createElement(Xo,{channel:a,group:l,user:s}):t.type===Gn.Join?f.createElement(Jl,{className:(null==n?void 0:n.text)?"pt-4":"",data:{type:kl,message:t}},f.createElement("div",{className:"flex dark:hover:bg-gray-775 py-1 px-4"},f.createElement("div",{className:"w-10 flex justify-center"},f.createElement(wt,{className:"w-5 h-5 text-green-500"})),f.createElement("div",{className:"pl-4 text-base text-tertiary flex items-center"},f.createElement(Jl,{className:"inline-block",data:{type:yl,user:t.author}},f.createElement(vs,{user:t.author,role:null==(i=t.serverUser)?void 0:i.role},f.createElement(us,{user:t.author,size:5}))),f.createElement(Jl,{className:"inline-block",data:{type:yl,user:t.author}},f.createElement(vs,{user:t.author,role:null==(c=t.serverUser)?void 0:c.role},f.createElement("span",{className:"ml-2 text-white cursor-pointer hover:underline"},t.author.username)))," has joined the ",t.serverUser?"planet":"group",f.createElement("span",{className:"pl-2 text-11 whitespace-nowrap text-mid cursor-default leading-5 select-none"},fs(t.createdAt))))):t.type===Gn.Normal?f.createElement("div",{className:""+(x?"pt-4":"")},f.createElement(Jl,{data:{type:kl,message:t,server:r}},f.createElement("div",{className:"flex py-1 pl-4 pr-18 dark:hover:bg-gray-775 group relative"},v&&f.createElement("div",{className:"bg-gray-500 group-hover:bg-opacity-30 bg-opacity-10 absolute inset-0 pointer-events-none border-l-2 border-gray-500"}),x?f.createElement(Jl,{data:{type:yl,user:t.author}},f.createElement(vs,{user:t.author,role:null==(m=t.serverUser)?void 0:m.role},f.createElement(us,{user:t.author,size:10,className:"dark:bg-gray-700 cursor-pointer"}))):f.createElement("div",{className:"w-10 text-11 whitespace-nowrap text-mid group-hover:opacity-100 opacity-0 cursor-default select-none leading-6.5"},fs(t.createdAt)),f.createElement("div",{className:"pl-4 w-full"},x&&f.createElement("div",{className:"flex items-end pb-0.5"},f.createElement(Jl,{data:{type:yl,user:t.author}},f.createElement(vs,{user:t.author,role:null==(d=t.serverUser)?void 0:d.role},f.createElement("div",{className:"text-base font-medium cursor-pointer hover:underline leading-none"},t.author.username))),f.createElement("div",{className:"text-11 text-mid pl-2 leading-none cursor-default select-none"},hs(t.createdAt))),!!t.text&&f.createElement("div",{onClick:b,className:"prose prose-sm dark:prose-dark focus:outline-none max-w-none",dangerouslySetInnerHTML:{__html:t.text}}),!!(null==(u=t.linkMetadatas)?void 0:u.length)&&f.createElement("div",{className:"space-y-1 pt-1 max-w-screen-sm"},t.linkMetadatas.map(((e,t)=>f.createElement(qs,{key:t,metadata:e,linkUrl:e.url})))),f.createElement(Ko,{message:t}),!!t.file&&f.createElement("div",{className:"pt-1 max-w-screen-sm w-full"},f.createElement("div",{className:"flex border dark:border-gray-850 dark:bg-gray-800 p-3 rounded w-full items-center"},f.createElement(h,{className:"w-8 h-8 dark:text-white"}),f.createElement("div",{className:"pl-3"},f.createElement("a",{href:t.file.url,target:"_blank",rel:"noreferrer noopener",className:"block text-base text-accent hover:underline cursor-pointer truncate"},t.file.filename),f.createElement("div",{className:"text-mid text-xs"},function(e,t=2){if(0===e)return"0 Bytes";const n=t<0?0:t,r=Math.floor(Math.log(e)/Math.log(1024));return parseFloat((e/Math.pow(1024,r)).toFixed(n))+" "+["Bytes","KB","MB","GB","TB","PB","EB","ZB","YB"][r]}(t.file.size))),f.createElement("a",{className:"block ml-auto",href:t.file.url,target:"_blank",rel:"noreferrer noopener"},f.createElement(Nt,{className:"h-6 w-6 highlightable"})))))))):null}));const ti=({channelId:e,groupId:n,userId:r})=>{const a={channelId:e,groupId:n,userId:r},{data:l,fetchMore:s,loading:o}=function(e){const n={...On,...e};return t(Ia,n)}({variables:{...a,cursor:null},fetchPolicy:"network-only",nextFetchPolicy:"cache-first"}),i=null==l?void 0:l.messages.hasMore,c=null==l?void 0:l.messages.messages;return[c,o,()=>{c&&i&&0!==c.length&&s({variables:{...a,cursor:c[0].id},updateQuery:(e,{fetchMoreResult:t})=>({messages:{hasMore:t.messages.hasMore,messages:[...t.messages.messages,...e.messages.messages]}})})},i]},ni=e=>y(`\n  ${e?"scale-100":"scale-0"}\n  transform\n  transition\n  bg-gradient-to-br\n  from-red-400\n  to-indigo-600\n  rounded-xl\n  p-3\n  max-w-sm\n  w-full\n  relative\n`);function ri({channel:e,user:t,group:n,setFiles:r}){const[a,l]=(()=>{const[e,t]=g.exports.useState(null),[n,r]=g.exports.useState(!1),a=g.exports.useRef(0),l=g.exports.useCallback((e=>{e.preventDefault(),e.stopPropagation()}),[]),s=g.exports.useCallback((e=>{e.preventDefault(),e.stopPropagation(),a.current++,e.dataTransfer.items&&e.dataTransfer.items.length>0&&r(!0)}),[]),o=g.exports.useCallback((e=>{e.preventDefault(),e.stopPropagation(),a.current--,a.current>0||r(!1)}),[]),i=g.exports.useCallback((e=>{e.preventDefault(),e.stopPropagation(),r(!1),e.dataTransfer.files&&e.dataTransfer.files.length>0&&(a.current=0,t(e.dataTransfer.files),e.dataTransfer.clearData())}),[]);return g.exports.useEffect((()=>(window.addEventListener("dragenter",s),window.addEventListener("dragleave",o),window.addEventListener("dragover",l),window.addEventListener("drop",i),function(){window.removeEventListener("dragenter",s),window.removeEventListener("dragleave",o),window.removeEventListener("dragover",l),window.removeEventListener("drop",i)}))),[e,n]})();g.exports.useEffect((()=>r(a)),[a,r]);const s=g.exports.useMemo((()=>e?`#${e.name}`:t?`@${t.username}`:n?`${n.displayName}`:void 0),[e,t,n]);return f.createElement(f.Fragment,null,f.createElement("div",{className:(o=l,y(`\n  fixed\n  inset-0\n  transition-all\n  bg-black\n  ${o?"visible bg-opacity-75":"invisible bg-opacity-0"}\n  flex\n  items-center\n  justify-center\n`)),style:{zIndex:999999}},f.createElement("div",{className:ni(l)},f.createElement("div",{className:"flex absolute left-1/2 transform top-0 -translate-x-1/2 -translate-y-1/2 transition delay-75 "+(l?"scale-100":"scale-0")},f.createElement("div",{className:"relative transform translate-x-6 translate-y-3 -rotate-12"},f.createElement("div",{className:"absolute left-5 top-9 w-14 h-14 bg-red-400",style:{zIndex:-1}}),f.createElement(Et,{className:"w-24 h-24"})),f.createElement("div",{className:"relative"},f.createElement("div",{className:"absolute left-5 top-9 w-14 h-14 bg-red-400",style:{zIndex:-1}}),f.createElement(pt,{className:"w-24 h-24 "})),f.createElement("div",{className:"relative transform -translate-x-6 translate-y-3 rotate-12"},f.createElement("div",{className:"absolute left-5 top-8 w-14 h-14 bg-red-400",style:{zIndex:-1}}),f.createElement(ut,{className:"w-24 h-24"}))),f.createElement("div",{className:"rounded-xl border-dashed border-white border-2 px-4 pb-4 pt-16 text-center"},f.createElement("div",{className:"text-xl font-bold text-primary"},"Upload to ",f.createElement("span",{className:"text-white"},s))))));var o}const ai=e=>new Promise(((t,n)=>{const r=new FileReader;r.onload=e=>t(e.target.result),r.onerror=e=>n(e),r.readAsDataURL(e)})),li=y("\n  text-sm\n  text-primary\n  h-10\n  px-7\n  hover:underline\n  focus:outline-none\n  select-none\n  disabled:opacity-50\n  disabled:no-underline\n  disabled:cursor-not-allowed\n"),si=y("\n  text-sm\n  text-primary\n  transition\n  bg-blue-500\n  hover:bg-blue-600\n  flex\n  items-center\n  justify-center\n  rounded\n  px-7\n  h-10\n  focus:outline-none\n  select-none\n  disabled:opacity-50\n  disabled:cursor-not-allowed\n");function oi({createMessage:e,variables:t,file:n,setFileIndex:r,placeholder:a,multiple:l,cancelAll:s}){var o;const[i,c]=g.exports.useState(""),m=(e=>{const[t,n]=g.exports.useState(null);return g.exports.useEffect((()=>{e&&(e.type.startsWith("image")?ai(e).then((e=>n(e))).catch((()=>n(null))):n(null))}),[e]),t})(n),[d,u]=g.exports.useState(!1),p=g.exports.useCallback((()=>{d||r((e=>e+1))}),[r,d]),v=g.exports.useCallback((()=>{u(!0),e({variables:{input:{text:i||null,file:n,...t}}}).then((()=>{u(!1),p()}))}),[p,i,n,t,e]);g.exports.useEffect((()=>c("")),[n]);const h=g.exports.useCallback((e=>{"Enter"===e.key&&n&&v()}),[v,n]);g.exports.useEffect((()=>(document.body.addEventListener("keydown",h),()=>{document.body.removeEventListener("keydown",h)})),[h]);const b=Zo(null==n?void 0:n.type);return f.createElement(Xl,{close:p,isOpen:!!n},f.createElement("div",{className:"text-left relative w-full rounded-xl dark:bg-gray-750 max-w-lg mx-auto"},f.createElement("div",{className:"absolute left-5 -top-20 flex w-46 h-40"},m&&f.createElement("img",{alt:"",src:m,className:"absolute max-w-full max-h-full bottom-0 left-0 rounded shadow-md object-cover"}),!m&&b&&f.createElement(b,{className:"h-full w-full text-white absolute bottom-0 left-0 transform -translate-x-8"})),f.createElement("div",{className:"px-5 pt-24 pb-5"},f.createElement(es,{className:"truncate text-left text-xl text-primary font-semibold select-none"},null!=(o=null==n?void 0:n.name)?o:""),f.createElement("div",{className:"text-tertiary text-13 pb-5 pt-0.5 select-none"},"Upload to"," ",f.createElement("span",{className:"font-medium text-secondary"},a)),f.createElement("label",{htmlFor:"comment",className:"block uppercase text-xs font-medium text-secondary pb-1.5"},"Add a Comment ",f.createElement("span",{className:"text-tertiary"},"(Optional)")),f.createElement("input",{className:"h-10 rounded-lg dark:bg-gray-700 w-full focus:outline-none px-4 text-secondary text-base",id:"comment",value:i,onChange:e=>{const t=e.target.value;c(t)}})),f.createElement("div",{className:"flex p-4 dark:bg-gray-775 rounded-b-xl"},f.createElement("div",{className:"ml-auto"}),l&&f.createElement("button",{className:li,onClick:()=>{s()},disabled:d},"Cancel All"),f.createElement("button",{className:li,onClick:p,disabled:d},"Cancel"),f.createElement("button",{className:si,disabled:!n||d,onClick:v},"Upload",d&&f.createElement("div",{className:"ml-3"},f.createElement(ll,null))))))}const ii=({channel:e,group:t,user:a,users:l})=>{N();const[s]=Ya(),[o,i]=g.exports.useState([]),[c]=function(e){const t={...On,...e};return n(Hr,t)}(),m={userId:null==a?void 0:a.id,groupId:null==t?void 0:t.id,channelId:null==e?void 0:e.id};!function(e){const t={...On,...e};r(_a,t)}({variables:m,skip:!e&&!t&&!a,onSubscriptionData({subscriptionData:{data:{typingUpdated:{typingUserId:e,isTyping:t}}}}){if(t){const t=o.find((t=>t.id===e));if(t){const e=o.indexOf(t),n=[...o];n[e]={id:t.id,time:(new Date).getTime()},i(n)}else i([...o,{id:e,time:(new Date).getTime()}])}else i(o.filter((({id:t})=>t!==e)))}});const[d,u]=g.exports.useState(0);g.exports.useEffect((()=>{const e=setInterval((()=>{u(d+1)}),1e3);return()=>clearInterval(e)}),[d,u]);return[()=>c({variables:{input:m}}),o.filter((({id:e,time:t})=>(!s||e!==s.id)&&(new Date).getTime()-t<=1500)).map((({id:e})=>{var t;return null==(t=l.find((t=>t.id===e)))?void 0:t.username})).filter((e=>!!e))]},ci=kt.create({name:"mention",defaultOptions:{HTMLAttributes:{},suggestion:{char:"@",command:({editor:e,range:t,props:n})=>{e.chain().focus().insertContentAt(t,[{type:"mention",attrs:n},{type:"text",text:" "}]).run()},allow:({editor:e,range:t})=>e.can().insertContentAt(t,{type:"mention"})}},group:"inline",inline:!0,selectable:!1,atom:!0,addAttributes:()=>({id:{default:null,parseHTML:e=>({id:e.getAttribute("data-mention")}),renderHTML:e=>e.id?{"data-mention":e.id}:{}},name:{default:null,parseHTML:e=>({name:e.getAttribute("data-mention")}),renderHTML:()=>({})}}),parseHTML:()=>[{tag:"span[data-mention]"}],renderHTML({node:e,HTMLAttributes:t}){return["span",be(this.options.HTMLAttributes,t),`${this.options.suggestion.char}${e.attrs.name}`]},renderText({node:e}){return`${this.options.suggestion.char}${e.attrs.name}`},addKeyboardShortcuts(){return{Backspace:()=>this.editor.commands.command((({tr:e,state:t})=>{let n=!1;const{selection:r}=t,{empty:a,anchor:l}=r;return!!a&&(t.doc.nodesBetween(l-1,l,((t,r)=>{if("mention"===t.type.name)return n=!0,e.insertText(this.options.suggestion.char||"",r,r+t.nodeSize),!1})),n)}))}},addProseMirrorPlugins(){return[Ct({editor:this.editor,...this.options.suggestion})]}});class mi extends g.exports.Component{constructor(e){super(e),this.state={selectedIndex:0}}componentDidUpdate(e){this.props.users!==e.users&&this.setState({selectedIndex:0})}onKeyDown({event:e}){return"ArrowUp"===e.key?(this.upHandler(),!0):"ArrowDown"===e.key?(this.downHandler(),!0):"Enter"===e.key&&(e.stopPropagation(),this.enterHandler(),!0)}upHandler(){this.setState({selectedIndex:(this.state.selectedIndex+this.props.users.length-1)%this.props.users.length})}downHandler(){this.setState({selectedIndex:(this.state.selectedIndex+1)%this.props.users.length})}enterHandler(){this.selectItem(this.state.selectedIndex)}selectItem(e){const t=this.props.users[e];t&&this.props.command("string"==typeof t?{id:`<${t}>`,name:t.substring(1)}:{id:`<@${t.id}>`,name:t.username})}render(){return f.createElement("div",{className:"relative w-full w-72 rounded dark:bg-gray-800 text-primary overflow-hidden text-sm shadow-md"},this.props.users.filter((e=>("string"==typeof e?e.substring(1):e.username).toLowerCase().startsWith(this.props.query.toLowerCase()))).slice(0,5).map(((e,t)=>f.createElement("button",{className:"block w-full text-left bg-transparent border-none px-2 py-2 dark:hover:bg-gray-775 focus:outline-none "+(t===this.state.selectedIndex?"dark:bg-gray-775":""),key:"string"==typeof e?e:e.id,onClick:()=>this.selectItem(t)},"string"==typeof e?e:e.username))))}}const di="_typing__dot_1o677_5";function ui(){return f.createElement("div",{className:"_typing_1o677_1"},f.createElement("div",{className:di}),f.createElement("div",{className:di}),f.createElement("div",{className:di}))}function pi({channel:e,server:t,group:n,user:r,users:a}){const{t:l}=N(),[s]=Ya(),o=!!r&&r.relationshipStatus===tr.Blocked,i=!!r&&r.relationshipStatus===tr.Blocking,[c,m,d]=ol({server:t,permissions:[lr.SendMessages,lr.RestrictedChannels,lr.PrivateChannels]}),u=!!e&&c&&(e.type===Ln.Public||e.type===Ln.Restricted&&m||e.type===Ln.Private&&d),p=!!s&&(!!r&&(!!r&&!o&&!i)||!!e&&u||!!n),v=g.exports.useMemo((()=>s?e?u?`Message #${e.name}`:"You do not have permission to send messages in this channel":n?`Message ${n.name}`:r?o?"This user has blocked you":i?"You are blocking this user":`Message @${r.username}`:"":"Must log in to send messages"),[s,e,n,r,u,o,i]),h={autofocus:!0,extensions:[Ee.configure({horizontalRule:!1,bulletList:!1,orderedList:!1,listItem:!1,heading:!1}),Ys,$t.configure({placeholder:`${v}`,showOnlyWhenEditable:!1}),Ut.create({addKeyboardShortcuts:()=>({Enter:({editor:e})=>{let t=e.getHTML();if(!(0===e.state.doc.textContent.length)){const n=/^<p>|<\/p>$/gi,r=/^\s*(?:<br\s*\/?\s*>)+|(?:<br\s*\/?\s*>)+\s*$/gi;t=t.replace(n,""),t=t.replace(r,""),I({variables:{input:{text:t,...M}}}),e.commands.clearContent()}return!0}})}),ci.configure({suggestion:{allowSpaces:!1,render:()=>{let e,t;return{onStart:n=>{e=new St(mi,{props:{...n,users:["@everyone"].concat(a)},editor:n.editor}),t=Pt("body",{getReferenceClientRect:n.clientRect,appendTo:()=>document.body,content:e.element,showOnCreate:!0,interactive:!0,trigger:"manual",placement:"bottom-start",render(e){const t=document.createElement("div"),n=document.createElement("div");return t.appendChild(n),n.innerHTML="",n.appendChild(e.props.content),{popper:t,onUpdate:function(e,t){e.content!==t.content&&(n.innerHTML="",n.appendChild(t.content))}}}})},onUpdate(n){e.updateProps(n),t[0].setProps({getReferenceClientRect:n.clientRect})},onKeyDown(t){var n;return null==(n=e.ref)?void 0:n.onKeyDown(t)},onExit(){t[0].destroy(),e.destroy()}}}}})],content:"",editorProps:{attributes:{class:"prose prose-sm dark:prose-dark focus:outline-none max-w-none"}},editable:p},[b,x]=g.exports.useState(null),E=function(){const[,e]=g.exports.useState(0);return()=>e((e=>e+1))}();g.exports.useEffect((()=>{b&&b.destroy();const e=new It(h);return x(e),e.on("transaction",E),()=>{e.destroy()}}),[p,v,e,r,n,t]);const[y,w]=ii({channel:e,group:n,user:r,users:a}),[k,C]=g.exports.useState(null),[$,U]=g.exports.useState(null),[S,P]=g.exports.useState(0),[I]=Dr({update(t,{data:{createMessage:a}}){const l=null==e?void 0:e.id,s=null==n?void 0:n.id,o=null==r?void 0:r.id,i={query:Ia,variables:{userId:o,groupId:s,channelId:l,cursor:null}},c=t.readQuery(i);c&&!c.messages.messages.map((e=>e.id)).includes(a.id)&&t.writeQuery({...i,data:{messages:{...c.messages,messages:[...c.messages.messages,a]}}})}}),M={channelId:null==e?void 0:e.id,groupId:null==n?void 0:n.id,userId:null==r?void 0:r.id},R=Al(),A=g.exports.useCallback((e=>{if(!p)return;const t=e.clipboardData.files;if(t&&t.length>0)C(t),e.preventDefault();else{e.clipboardData.getData("text")&&(null==b||b.commands.focus())}}),[b]);g.exports.useEffect((()=>(document.body.addEventListener("paste",A),()=>{document.body.removeEventListener("paste",A)})),[A]);const[D,O]=g.exports.useState(null),L=g.exports.useCallback((e=>{if(!p)return;const t=(new Date).getTime();D?t-D>500&&(y(),O(t)):O(t),null==b||b.commands.focus()}),[b]);g.exports.useEffect((()=>(document.body.addEventListener("keypress",L),()=>{document.body.removeEventListener("keypress",L)})),[A]),g.exports.useEffect((()=>{k&&(U(k[0]),P(0))}),[k]),g.exports.useEffect((()=>{if(!k)return;let e;return S>=k.length?(C(null),U(null),P(0)):(U(null),e=setTimeout((()=>U(k[S])),300)),()=>{e&&clearTimeout(e)}}),[S]);const T=g.exports.useCallback((()=>{C(null),U(null),P(0)}),[C,U,P]);return f.createElement(f.Fragment,null,!!s&&f.createElement(f.Fragment,null,f.createElement(ri,{placeholder:v,setFiles:C}),f.createElement(oi,{createMessage:I,variables:M,file:$,setFileIndex:P,placeholder:v,multiple:k&&k.length>1,cancelAll:T})),f.createElement("div",{className:"px-4 dark:bg-gray-750 relative"},f.createElement("div",{className:"relative"},p&&f.createElement(F,{content:l("message.upload")},f.createElement("div",{className:"block absolute left-4.5 top-1/2 transform -translate-y-1/2"},f.createElement("input",{className:"hidden",id:"file",name:"file",type:"file",onChange:e=>C(e.target.files),multiple:!0}),f.createElement("label",{htmlFor:"file",className:"text-tertiary highlightable"},f.createElement(Ft,{className:"w-5 h-5"})))),f.createElement("div",{onClick:()=>{s||R()},className:`${p?"px-14":"px-4 opacity-50"} ${s?"":"cursor-pointer"} min-h-[3rem] max-h-[20rem] overflow-y-auto scrollbar-light dark:bg-gray-700 py-3 w-full  rounded-lg text-base focus:outline-none text-secondary border-none`},f.createElement(we,{editor:b}))),f.createElement("div",{className:"h-6 flex items-center text-secondary text-13 font-medium"},w.length>0&&f.createElement(ui,null),1===w.length&&f.createElement(f.Fragment,null,f.createElement("span",{className:"font-bold text-primary"},w[0])," is typing..."),2===w.length&&f.createElement(f.Fragment,null,f.createElement("span",{className:"font-bold text-primary"},w[0])," and ",f.createElement("span",{className:"font-bold text-primary"},w[1])," are typing..."),3===w.length&&f.createElement(f.Fragment,null,f.createElement("span",{className:"font-bold text-primary"},w[0]),", ",f.createElement("span",{className:"font-bold text-primary"},w[1]),", and ",f.createElement("span",{className:"font-bold text-primary"},w[2])," are typing..."),w.length>3&&f.createElement(f.Fragment,null,"Several people are typing..."))))}function gi({channel:e,server:t,user:n,group:r,users:a}){const l=g.exports.useRef(null),[s,o,i,c]=ti({channelId:null==e?void 0:e.id,userId:null==n?void 0:n.id,group:null==r?void 0:r.id}),[m,d]=g.exports.useState((null==s?void 0:s.length)||0);Mt(m),g.exports.useEffect((()=>{var e;d((null==s?void 0:s.length)||0),null==(e=null==l?void 0:l.current)||e.scrollToIndex(m+1e7)}),[e,n,r,l]);const{atBottom:u,newMessagesNotification:p,setNewMessagesNotification:v}=function(e){const[t]=Ya(),[n,r]=g.exports.useState(!1),a=g.exports.useRef(""),l=g.exports.useRef(!1);return g.exports.useEffect((()=>{var n;if(!(null==e?void 0:e.length))return;const s=e[e.length-1],o=a.current;a.current=s.id||"",s.id!==o&&(l.current||t&&(null==(n=s.author)?void 0:n.id)!==t.id&&r(!0))}),[t,e]),{atBottom:l,newMessagesNotification:n,setNewMessagesNotification:r}}(s),h=function(e){var t;const n=null==(t=null==e?void 0:e[0])?void 0:t.id,r=g.exports.useRef(n),a=g.exports.useRef(n),l=g.exports.useRef(0);return g.exports.useMemo((()=>{if(!e||!e.length)return 0;if(n===a.current)return l.current;r.current||(r.current=n),a.current=n;for(let t=l.current;t<e.length;t+=1)if(e[t].id===r.current)return l.current=t,t;return 0}),[e,null==e?void 0:e.length])}(s),b=function(e){const[t]=Ya(),n=g.exports.useRef(""),r=g.exports.useRef(!1);function a(){var r;if(e&&e.length>0){const a=e[e.length-1];if((null==(r=a.author)?void 0:r.id)===(null==t?void 0:t.id)&&n.current!==a.id)return n.current=a.id,!0}return!1}return g.exports.useEffect((()=>{e&&e.length&&!r.current&&(r.current=!0,a())}),[e,null==e?void 0:e.length]),a}(s),x=g.exports.useCallback(((a,l)=>{const s=l+h-1e7,o=a[s],i=s>0?a[s-1]:null;return o?f.createElement(ei,{server:t,channel:e,group:r,user:n,message:o,index:s,prevMessage:i}):f.createElement("div",{style:{height:"1px"}})}),[h,t,e,r,n]);return f.createElement(f.Fragment,null,f.createElement("div",{className:"relative flex-1 overflow-x-hidden overflow-y-auto dark:bg-gray-750 w-full h-full"},!!s&&f.createElement(ue,{className:"scrollbar-custom",alignToBottom:!0,atBottomStateChange:e=>{u.current=e,e&&p&&v(!1)},components:{Footer:()=>f.createElement("div",{className:"h-5.5"})},firstItemIndex:1e7-h,followOutput:e=>(b()||!!e)&&"auto",initialTopMostItemIndex:s.length>0?s.length-1:0,itemContent:e=>x(s,e),overscan:0,ref:l,startReached:()=>{!o&&c&&i()},style:{overflowX:"hidden"},totalCount:s.length||0})),!!a&&(!!e||!!n||!!r)&&f.createElement(pi,{server:t,channel:e,user:n,group:r,users:a}))}function vi({username:e}){const{data:t}=za({variables:{username:e},fetchPolicy:"cache-and-network",nextFetchPolicy:"cache-first"}),[r]=function(e){const t={...On,...e};return n(sa,t)}(),[a]=la(),l=null==t?void 0:t.user;g.exports.useEffect((()=>{l&&(l.showChat||r({variables:{input:{userId:l.id}}}))}),[l]),_s(`dm/@${e}`);const[s]=Ya();return g.exports.useEffect((()=>{s&&l&&l.unreadCount>0&&a({variables:{input:{userId:l.id}},optimisticResponse:{readDm:{...l,unreadCount:0}}})}),[l,s]),f.createElement(Bs,{header:f.createElement(Go,{user:l})},!!l&&f.createElement(gi,{user:l,users:[l,s]}))}const hi=e=>{const{server:t}=Rt(),n=Za((e=>e.setServerPage));g.exports.useEffect((()=>n(t,e)))};function fi({user:e,color:t,roles:n=[]}){return f.createElement(Jl,{data:{type:yl,user:e}},f.createElement(vs,{user:e,role:n,placement:"left"},f.createElement(tl,{small:!0},f.createElement(us,{user:e,size:6,showOnline:!0,dotClassName:"w-2 h-2 ring-2 dark:ring-gray-800"}),f.createElement("div",{className:"ml-3 font-medium text-tertiary"},e.username))))}function bi({server:e,serverUsers:t}){const n=g.exports.useMemo((()=>{var n;const r=[];for(const s of(null!=(n=null==e?void 0:e.roles)?n:[]).filter((e=>e.permissions.includes(lr.DisplayRoleSeparately)))){const e=t.filter((e=>e.isOnline&&e.roles.map((e=>e.id)).includes(s.id)&&!r.includes(e)));e.length&&(r.push(`${s.name} — ${e.length}`),r.push(...e))}const a=t.filter((e=>e.user.isOnline));a.length&&(r.push(`Online — ${a.length}`),r.push(...a));const l=t.filter((e=>!e.user.isOnline));return l.length&&(r.push(`Offline — ${l.length}`),r.push(...l)),r}),[t,e]),r=g.exports.useRef(),a=Za((e=>e.showUsers));return f.createElement(Ja,{right:!0,show:a},f.createElement(ue,{className:"scrollbar-dark",ref:r,style:{height:"100%",width:"100%"},data:n,itemContent:(e,t)=>f.createElement("div",{className:"px-1.5 pb-0.5"},"string"==typeof t?f.createElement(Kl,null,t):f.createElement("div",{className:""+(t.user.isOnline?"":"opacity-35")},f.createElement(fi,{user:t.user,role:t.roles,color:t.color})))}))}const xi=g.exports.createContext({server:null,loading:!0,users:[]});function Ei({children:e,name:n}){var r;const{data:a,loading:l}=function(e){const n={...On,...e};return t(La,n)}({variables:{name:n},skip:!n,fetchPolicy:"cache-and-network"}),s=null==a?void 0:a.server,{data:o}=function(e){const n={...On,...e};return t(Ta,n)}({variables:{serverId:null==s?void 0:s.id},skip:!s,fetchPolicy:"cache-and-network"}),i=null!=(r=null==o?void 0:o.serverUsers)?r:[];return f.createElement(xi.Provider,{value:{server:s,loading:l&&!s,users:i}},e)}const yi=()=>{const{server:e,loading:t,users:n}=g.exports.useContext(xi);return{server:e,loading:t,users:n}};function wi(){const{server:e,users:t}=yi(),[n]=Ya();return hi(""),f.createElement(Bs,{header:f.createElement(ls,{refreshPosts:()=>{}}),rightSidebar:f.createElement(bi,{server:e,serverUsers:t})},f.createElement(Ve,null,f.createElement("title",null,null==e?void 0:e.displayName)),f.createElement(Hs,{serverId:null==e?void 0:e.id,header:n?f.createElement(ho,{server:e}):null}))}function Ni({post:e,users:t=[]}){var n,r,a;const{t:l}=N(),s=Za((e=>e.showUsers));return f.createElement(Ja,{right:!0,show:s},f.createElement("div",{className:"px-1"},(null==e?void 0:e.author)&&f.createElement(f.Fragment,null,f.createElement(Kl,null,l("post.creator")),f.createElement(fi,{user:e.author,color:null==(r=null==(n=e.serverUser)?void 0:n.role)?void 0:r.color,role:null==(a=e.serverUser)?void 0:a.role})),t&&t.length>0&&f.createElement(f.Fragment,null,f.createElement(Kl,null,l("post.participantCount",{count:t.length})),t.map((e=>{var t,n,r;return f.createElement(fi,{key:e.user.id,user:e.user,color:null==(n=null==(t=e.serverUser)?void 0:t.role)?void 0:n.color,role:null==(r=e.serverUser)?void 0:r.role})})))))}const ki=e=>{if(!e.childComments||0===e.childComments.length)return 0;let t=0;return e.childComments.forEach((e=>{t++,e.childCount=ki(e),t+=e.childCount})),t},Ci=e=>((e=(e=>{const t=Object.create(null);e.forEach((e=>t[e.id]={...e,childComments:[]}));const n=[];return e.forEach((e=>{e.parentComment?t[e.parentComment.id].childComments.push(t[e.id]):n.push(t[e.id])})),n})(e)).forEach((e=>e.childCount=ki(e))),e),$i=y("\n  text-base\n  text-primary\n  disabled:opacity-50\n  dark:disabled:bg-gray-600\n  bg-green-600\n  rounded\n  px-3\n  h-8\n  flex\n  items-center\n  disabled:cursor-not-allowed\n  focus:outline-none\n"),Ui=y("\n  text-base\n  text-tertiary\n  focus:outline-none\n  px-2\n  h-8\n  flex\n  items-center\n");function Si({postId:e,parentCommentId:t,setOpen:r}){const[a,l]=g.exports.useState(""),[s,{loading:o}]=function(e){const t={...On,...e};return n(kr,t)}({update(t,{data:{createComment:n}}){const r=t.readQuery({query:Ua,variables:{postId:e}});t.writeQuery({query:Ua,variables:{postId:e},data:{comments:[n,...r.comments]}})}}),{t:i}=N();return f.createElement("div",{className:"max-w-screen-md w-full"},f.createElement(Qs,{text:a,setText:l}),f.createElement("div",{className:"flex justify-end space-x-3 items-center pt-3"},f.createElement("button",{className:Ui,onClick:()=>{r(!1),l("")}},i("comment.create.cancel")),f.createElement("button",{className:$i,disabled:!a||o,onClick:()=>{s({variables:{input:{postId:e,text:a,parentCommentId:t}}}).then((()=>{r(!1),l("")}))}},i("comment.create.submit"),o&&f.createElement(ll,{className:"w-5 h-5 text-primary ml-3"}))))}const Pi=y("\n  ml-4\n  text-xs\n  text-gray-500\n  hover:text-gray-700\n  dark:hover:text-gray-300\n  font-medium\n  leading-none\n  select-none\n  cursor-pointer\n");function Ii({comment:e,post:t,level:n=0,setParentComment:r,isLast:a}){var l,s,o,i,c,m,d,u;const{t:p}=N();Ya();const[v,h]=g.exports.useState(!1),[b,x]=Za((e=>[e.replyingCommentId,e.setReplyingCommentId])),E=b===e.id;return f.createElement("div",{className:"relative rounded dark:bg-gray-800 "+(0===n?"":"pl-4")},f.createElement("div",{id:e.id}),f.createElement(Jl,{data:{type:Nl,comment:e,post:t}},f.createElement("div",{className:"flex px-3 pt-3"},f.createElement(Jl,{data:{type:yl,user:e.author}},f.createElement(vs,{user:e.author,role:null==(l=e.serverUser)?void 0:l.role},f.createElement(us,{size:7,className:"cursor-pointer transition hover:opacity-90",user:e.author}))),f.createElement("div",{className:"pl-3 pb-3 w-full "+(!e.childComments.length&&!a||v?"":"border-b dark:border-gray-750")},f.createElement("div",{className:"flex items-end pb-1.5"},f.createElement(Jl,{data:{type:yl,user:e.author}},f.createElement(vs,{user:e.author,role:null==(s=e.serverUser)?void 0:s.role},f.createElement("div",{className:"text-sm font-medium cursor-pointer hover:underline leading-none "+((null==(i=null==(o=e.serverUser)?void 0:o.role)?void 0:i.color)?"":"text-primary"),style:{color:null==(m=null==(c=e.serverUser)?void 0:c.role)?void 0:m.color}},null!=(u=null==(d=e.author)?void 0:d.username)?u:"[deleted]"))),f.createElement("div",{className:"text-11 text-mid font-medium pl-2 leading-none"},hs(e.createdAt))),f.createElement("div",{className:"prose prose-sm dark:prose-dark max-w-none",dangerouslySetInnerHTML:{__html:e.text}}),f.createElement("div",{className:"flex items-center pt-2"},f.createElement(Fi,{comment:e}),f.createElement("div",{className:Pi,onClick:()=>{x(E?null:e.id)}},p(E?"comment.cancelReply":"comment.reply")),!!e.childCount&&f.createElement("div",{className:Pi,onClick:()=>h(!v)},v?`${p("comment.showReplies")} (${e.childCount})`:p("comment.hideReplies")),f.createElement("div",{className:"ml-4 text-gray-500 hover:text-gray-700 dark:hover:text-gray-300 flex items-center cursor-pointer"},f.createElement(At,{className:"w-5 h-5"}))),E&&f.createElement("div",{className:"pt-3 max-w-screen-md w-full"},f.createElement(Si,{postId:t.id,parentCommentId:e.id,setOpen:()=>x(null)}))))),f.createElement("div",{className:"pl-3"},!v&&e.childComments.map(((a,l)=>f.createElement(Ii,{key:a.id,comment:a,level:n+1,setParentComment:r,post:t,isLast:l<e.childComments.length-1})))))}function Fi({comment:e}){const t=Tl(e),n=Al(),[r]=Ya();return f.createElement("div",{onClick:e=>{e.stopPropagation(),r?t():n()},className:(e.isVoted?"text-red-400":"text-gray-500 hover:text-gray-700 dark:hover:text-gray-300")+" flex items-center cursor-pointer"},f.createElement(me,{className:"w-4 h-4"}),f.createElement("div",{className:"ml-2 text-xs font-medium"},e.voteCount))}function Mi({postId:e}){const[t,n]=g.exports.useState(!1),[r]=Ya(),{t:a}=N();return f.createElement(f.Fragment,null,t?f.createElement("div",{className:"dark:bg-gray-800 pt-3 pb-3 px-3 rounded flex"},f.createElement("div",{className:"pr-3 mr-3 border-r dark:border-gray-750 inline-block h-7"},f.createElement(us,{user:r,size:7})),f.createElement(Si,{postId:e,setOpen:n})):f.createElement("div",{onClick:()=>n(!0),className:"dark:bg-gray-700 h-13 flex items-center rounded transition dark:hover:bg-gray-650 cursor-pointer"},f.createElement("div",{className:"px-3 border-r dark:border-gray-650 h-7"},f.createElement(us,{user:r,size:7})),f.createElement("div",{className:"text-sm text-secondary px-3"},a("post.createComment"))))}function Ri(){const[e,t]=Za((e=>[e.showUsers,e.setShowUsers])),{t:n}=N();return f.createElement(F,{content:n(e?"user.hideUsers":"user.showUsers")},f.createElement("div",{className:"highlightable",onClick:()=>t(!e)},f.createElement(it,{className:"w-5 h-5"})))}function Ai({post:e}){const t=Za((e=>e.canGoBack)),{push:n,goBack:r}=S();return f.createElement("header",{id:"header",className:"h-12 min-h-[3rem] items-center bg-white dark:bg-gray-750 border-b dark:border-gray-800 shadow flex items-center"},f.createElement("div",{className:"flex items-center font-semibold text-base text-primary pl-4"},f.createElement("div",{className:"highlightable mr-3 cursor-pointer",onClick:()=>{t?r():n(`/+${null==e?void 0:e.server.name}`)}},f.createElement(Dt,{className:"w-5 h-5"})),f.createElement("span",{className:"line-clamp-1"},null==e?void 0:e.title)),f.createElement("div",{className:"ml-auto pl-6 pr-4"},f.createElement(Ri,null)),f.createElement("div",{className:"flex w-60 min-w-[15rem] pr-4"},f.createElement(ts,null)))}function Di({postId:e}){const[n]=Ya(),{data:r}=function(e){const n={...On,...e};return t(Fa,n)}({variables:{id:e}}),a=null==r?void 0:r.post,{data:l}=function(e){const n={...On,...e};return t(Ua,n)}({variables:{postId:e}}),s=g.exports.useMemo((()=>{var e;return Ci(null!=(e=null==l?void 0:l.comments)?e:[])}),[null==l?void 0:l.comments]),o=g.exports.useMemo((()=>s.filter((e=>!!e.author)).map((e=>({user:e.author,serverUser:e.serverUser}))).filter(((e,t,n)=>n.findIndex((t=>t.user.id===e.user.id))===t))),[s]);return f.createElement(Bs,{header:f.createElement(Ai,{post:a}),rightSidebar:f.createElement(Ni,{post:a,users:o})},f.createElement(Ve,null,f.createElement("title",null,a?`${a.title} – ${a.server.displayName}`:null)),f.createElement("div",{className:"max-h-full h-full scrollbar-custom dark:bg-gray-750"},f.createElement("div",{className:"pt-4 px-4"},!!a&&f.createElement(zs,{post:a,isPostPage:!0})),!!n&&f.createElement("div",{className:"pt-4 px-4"},f.createElement(Mi,{postId:e})),f.createElement("div",{className:"space-y-2 px-4 pt-4 pb-96"},s.map(((e,t)=>f.createElement(Ii,{key:e.id,comment:e,post:a,isLast:t<s.length-1}))))))}function Oi({name:e,icon:t}){const[n,r]=Za((e=>[e.postsSort,e.setPostsSort])),{server:a}=Rt(),{pathname:l}=C(),{push:s}=S(),o=n===e&&("/"===l||l===`/${a}`),i=t;return f.createElement(tl,{onClick:()=>{r(e),s(a?`/${a}`:"/")},active:o},f.createElement(i,{className:"w-5 h-5 mr-3 text-tertiary"}),e)}function Li(){const{t:e}=N();return f.createElement("div",{className:"space-y-0.5"},f.createElement(Oi,{name:e("post.feed.sort.hot"),icon:_}),f.createElement(Oi,{name:e("post.feed.sort.new"),icon:H}),f.createElement(Oi,{name:e("post.feed.sort.top"),icon:z}))}function Ti(){var e,t,n,r;const{t:a}=N(),[l]=Ya(),s=null!=(e=null==l?void 0:l.groups)?e:[],o=null!=(n=null==(t=null==l?void 0:l.relatedUsers)?void 0:t.filter((e=>e.showChat)))?n:[],i=s.concat(o).sort(((e,t)=>(e.lastMessageAt?new Date(e.lastMessageAt).getTime():0)-(t.lastMessageAt?new Date(t.lastMessageAt).getTime():0))),{data:c}=Oa({variables:{input:{unreadOnly:!0}},skip:!l}),m=null!=(r=null==c?void 0:c.replies)?r:[];return f.createElement(f.Fragment,null,f.createElement(Ja,null,f.createElement("div",{className:"h-12 border-b dark:border-gray-850 shadow flex items-center px-5 text-base font-medium"},f.createElement(Ro,{className:"h-4"})),f.createElement("div",{className:"px-1.5"},!!l&&f.createElement("div",{className:"space-y-0.5 pt-3"},f.createElement(tl,{to:"/friends"},f.createElement(Ye,{className:"mr-3 h-5 w-5"}),a("user.friends.title")),f.createElement(tl,{to:"/inbox"},f.createElement(ct,{className:"mr-3 h-5 w-5"}),a("inbox.title"),!!m.length&&f.createElement("div",{className:"ml-auto"},f.createElement(Co,{count:m.length})))),f.createElement(Kl,null,"Posts"),f.createElement(Li,null),!!l&&f.createElement(f.Fragment,null,f.createElement(Kl,{plusLabel:"Create DM"},a("dm.title")),f.createElement("div",{className:"space-y-0.5"},!!i&&i.map((e=>{if("Group"===e.__typename)return f.createElement("div",null,"Group");if("User"===e.__typename){const t=e;return f.createElement(qi,{user:t,key:`user-${t.id}`})}})))))))}function qi({user:e}){N();const[t]=ia(),{push:n}=S(),{pathname:r}=C(),[a]=Dr(),[{isOver:l,canDrop:s},o]=Ot({accept:Ka,drop:(t,r)=>{n(`/dm/@${e.username}`),a({variables:{input:{userId:e.id,text:`${location.origin}${t.relativeUrl}`}}})},collect:e=>({isOver:e.isOver(),canDrop:e.canDrop()})});return f.createElement("div",null,f.createElement(Jl,{data:{type:yl,user:e,isDm:!0}},f.createElement(tl,{ref:o,large:!0,to:`/dm/@${e.username}`,key:`user-${e.id}`},f.createElement(us,{size:9,showOnline:!0,user:e,dotClassName:"ring-3 w-2.5 h-2.5 dark:ring-gray-800"}),f.createElement("span",{className:"ml-3"},e.username),f.createElement("div",{className:"ml-auto"}),f.createElement("div",{className:"pr-2"},!!e.unreadCount&&f.createElement(Co,{count:e.unreadCount})),f.createElement(T,{onClick:a=>{a.stopPropagation(),a.preventDefault(),t({variables:{input:{userId:e.id}}}),r===`/dm/@${e.username}`&&n("/friends")},className:"group-hover:visible invisible w-5 h-5 cursor-pointer text-gray-600 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300"}))))}const zi=e=>y(`\n  w-12\n  h-12\n  object-cover\n  inline-flex\n  items-center\n  justify-center\n  hover:rounded-2xl\n  ${e?"rounded-2xl":"rounded-3xl"}\n  transform\n  transition-all\n  relative\n  group\n  cursor-pointer\n`),Hi=(e,t)=>y(`\n  absolute\n  left-0\n  w-1\n  dark:bg-white\n  rounded-r-2xl\n  top-1/2\n  -translate-y-1/2\n  transform\n  transition\n  duration-250\n  group-hover:-translate-x-3\n  ${e?"-translate-x-3 h-10":t?"-translate-x-3 h-2.5 group-hover:h-5":"-translate-x-4 h-5"}\n`);var _i=g.exports.forwardRef((({name:e,children:t,to:n,onClick:r,className:a="dark:bg-gray-800 bg-gray-200",active:l=!1,unread:s=!1},o)=>f.createElement(F,{content:e,placement:"right",ref:o,offset:[0,22]},n?f.createElement(E,{to:n,className:`${zi(l)} ${a}`},f.createElement("div",{className:Hi(l,s)}),t):f.createElement("div",{onClick:r,className:`${zi(l)} ${a}`},f.createElement("div",{className:Hi(l,s)}),t))));const Bi=y("\n  relative\n  flex\n  items-center\n  pl-3\n  pr-10\n  text-left\n  bg-white\n  cursor-pointer\n  focus:outline-none\n  text-13\n  rounded\n  border\n  h-10\n  dark:bg-gray-800\n  dark:border-gray-700\n  border-b\n  border-t-0\n  border-r-0\n  border-l-0\n  rounded-none\n  focus:outline-none\n  transition\n  px-4\n  text-secondary\n"),ji=y("\n  scrollbar-thin\n  dark:scrollbar-thumb-gray-750\n  dark:scrollbar-track-gray-850\n  scrollbar-thumb-rounded-md\n  absolute\n  py-1\n  mt-1\n  overflow-auto\n  text-13\n  text-secondary\n  bg-white\n  dark:bg-gray-850\n  rounded-md\n  shadow-lg\n  max-h-60\n  focus:outline-none\n  space-y-0.5\n  font-medium\n");function Gi({category:e,setCategory:t}){const n=Object.values(rr),r=Mo(e);return f.createElement("div",{className:"min-w-full relative z-50"},f.createElement(Te,{value:e,onChange:t},(({open:t})=>f.createElement(f.Fragment,null,f.createElement("div",{className:"relative"},f.createElement(Te.Button,{className:Bi},e?f.createElement(f.Fragment,null,f.createElement(r,{className:"w-5 h-5 text-secondary"}),f.createElement("span",{className:"block truncate pl-3"},e)):f.createElement("span",{className:"block truncate text-tertiary"},"Category"),f.createElement("span",{className:"absolute inset-y-0 right-0 flex items-center pr-4 pointer-events-none"},f.createElement(qe,{className:"w-5 h-5 text-gray-400","aria-hidden":"true"}))),f.createElement(R,{show:t,as:g.exports.Fragment,leave:"transition ease-in duration-100",leaveFrom:"opacity-100",leaveTo:"opacity-0"},f.createElement(Te.Options,{static:!0,className:ji},n.map((e=>f.createElement(Te.Option,{key:e,className:({active:e})=>(e=>y(`\n  ${e?"dark:bg-gray-775":""}\n  cursor-pointer\n  select-none\n  relative\n  focus:outline-none\n`))(e),value:e},(({selected:t})=>f.createElement("div",{className:"flex items-center h-10 pl-3 pr-3 "+(t?"dark:bg-gray-775":"")},(()=>{const t=Mo(e);return f.createElement(t,{className:"w-5 h-5 text-secondary"})})(),f.createElement("span",{className:"block truncate pl-2"},e)))))))))))))}function Vi({children:e,buttons:t,open:n,close:r,closeOnOverlayClick:a,onSubmit:l,small:s=!1,large:o=!1}){return f.createElement(Xl,{isOpen:n,close:r,closeOnOverlayClick:a},f.createElement("form",{onSubmit:l,className:`rounded-lg dark:bg-gray-800 w-full relative text-left ${s||o?"":"max-w-lg"} ${s?"max-w-sm":""} ${o?"max-w-screen-lg":""}`,onClick:e=>e.stopPropagation()},e,!!t&&f.createElement(f.Fragment,null,f.createElement("div",{className:"rounded-b-lg dark:bg-gray-750 h-9"}),f.createElement("div",{className:"absolute right-5 bottom-9 transform translate-y-1/2 flex items-center space-x-3 justify-end h-9"},(t.type===g.exports.Fragment?t.props.children:[t]).map(((e,t)=>f.createElement("div",{key:t,className:"dark:bg-gray-800 rounded"},e)))))))}function Yi({open:e,setOpen:t,server:r}){var a,l;const[s,{loading:o}]=function(e){const t={...On,...e};return n(pa,t)}({update(e,{data:{createServer:t}}){const n=e.readQuery({query:Sa});e.writeQuery({query:Sa,data:{user:{...n.user,servers:[t,...n.user.servers]}}})}}),[i,{loading:c}]=function(e){const t={...On,...e};return n(ga,t)}(),[m,d]=g.exports.useState(null!=(a=null==r?void 0:r.category)?a:rr.Other),{handleSubmit:u,register:p,watch:v,reset:h,setValue:b}=He({mode:"onChange"}),x=v("avatarFile"),E=v("bannerFile"),y=v("name"),w=v("displayName"),[N,k]=g.exports.useState(!1);g.exports.useEffect((()=>{N||null==w||b("name",w.replace(" ","_").replace(/[^A-Za-z0-9_]/i,""))}),[w]),g.exports.useEffect((()=>{y||k(!1)}),[y]);const[C,$]=g.exports.useState(null==r?void 0:r.avatarUrl),[U,P]=g.exports.useState(null==r?void 0:r.bannerUrl);g.exports.useEffect((()=>{r?($(r.avatarUrl),P(r.bannerUrl),b("displayName",r.displayName),b("description",r.description),d(r.category)):(h(),$(null),P(null),d(rr.Other))}),[r]),g.exports.useEffect((()=>{x&&x[0]&&ai(x[0]).then((e=>$(e)))}),[x]),g.exports.useEffect((()=>{E&&E[0]&&ai(E[0]).then((e=>P(e)))}),[E]);const{push:I}=S(),M=(w||"").split(" ").map((e=>e[0])).join("").toUpperCase();return f.createElement(Vi,{open:e,close:()=>{t(!1)},closeOnOverlayClick:!0,onSubmit:u((({name:e,displayName:n,description:a,avatarFile:l,bannerFile:o})=>{r?i({variables:{input:{serverId:r.id,displayName:n,description:a,category:m,avatarFile:l?l[0]:null,bannerFile:o?o[0]:null}}}).then((()=>{t(!1)})):s({variables:{input:{name:e,displayName:n,description:a,category:m,avatarFile:l?l[0]:null,bannerFile:o?o[0]:null}}}).then((({data:{createServer:e}})=>{t(!1),I(`/+${e.name}`)}))})),buttons:r?f.createElement(F,{content:"Save Changes"},f.createElement("button",{type:"submit",className:"form-button-submit",disabled:!w||c||(null==w?void 0:w.length)<2},c?f.createElement(ll,{className:"w-5 h-5 text-primary"}):f.createElement(L,{className:"w-5 h-5 text-primary"}))):f.createElement("button",{type:"submit",className:"form-button-submit",disabled:!w||!y||(null==w?void 0:w.length)<2||(null==y?void 0:y.length)<3||o},o?f.createElement(ll,{className:"w-5 h-5 text-primary"}):f.createElement(ie,{className:"w-5 h-5 text-primary"}))},f.createElement("input",{type:"file",...p("bannerFile"),className:"hidden",id:"bannerFile",accept:"image/png,image/jpeg,image/webp,image/gif"}),f.createElement("label",{htmlFor:"bannerFile",className:"h-24 block relative rounded-t-lg group cursor-pointer bg-center bg-cover "+(U?"":"bg-gradient-to-br from-red-400 to-indigo-600"),style:U?{backgroundImage:`url(${U})`}:{}},f.createElement("div",{className:"rounded-t-lg absolute inset-0 transition bg-black opacity-0 group-hover:opacity-50 flex items-center justify-center"},f.createElement(Lt,{className:"w-10 h-10"}))),f.createElement("input",{type:"file",...p("avatarFile"),className:"hidden",id:"avatarFile",accept:"image/png,image/jpeg,image/webp,image/gif"}),f.createElement("label",{htmlFor:"avatarFile",className:"flex items-center justify-center cursor-pointer rounded-3xl h-24 w-24 absolute left-3 top-24 transform -translate-y-1/2 dark:bg-gray-700 shadow group bg-center bg-cover",style:C?{backgroundImage:`url(${C})`}:{}},!C&&f.createElement("div",{className:"text-tertiary text-3xl font-medium overflow-hidden"},M),f.createElement("div",{className:"absolute rounded-3xl inset-0 transition bg-black opacity-0 group-hover:opacity-50 flex items-center justify-center"},f.createElement(Lt,{className:"w-10 h-10"}))),f.createElement("div",{className:"pl-30 pr-5 pt-2 text-left"},f.createElement("input",{...p("displayName",{maxLength:100,required:!0}),placeholder:"Display Name",className:"form-input-lg",maxLength:100})),f.createElement("div",{className:"pb-5 space-y-3 pt-3 px-5 text-left"},f.createElement("div",{className:"text-sm text-accent flex items-center pt-3"},f.createElement("span",{className:"h-7 flex items-center"},"joincomet.app/+",null!=(l=null==r?void 0:r.name)?l:""),!r&&f.createElement("input",{...p("name"),placeholder:"Name",className:"bg-transparent h-7 w-full border-b dark:border-gray-700 focus:outline-none transition dark:focus:border-blue-500",onKeyPress:()=>k(!0)})),f.createElement("textarea",{...p("description",{maxLength:500}),placeholder:"Description",className:"form-textarea",maxLength:500}),f.createElement("div",{className:"flex items-center"},f.createElement("div",{className:"text-13 font-medium text-tertiary pr-1.5"},"Category"),f.createElement(Gi,{category:m,setCategory:d}))))}function Wi(){const[e,t]=g.exports.useState(!1),{t:n}=N();return f.createElement(f.Fragment,null,f.createElement(_i,{name:n("server.create.title"),onClick:()=>t(!0),className:"dark:bg-gray-800 bg-gray-200 hover:bg-purple-600 dark:hover:bg-purple-600"},f.createElement(al,{className:"w-5 h-5 text-purple-500 group-hover:text-white transition"})),f.createElement(Yi,{open:e,setOpen:t}))}function Qi({showPassword:e,setShowPassword:t}){return f.createElement(F,{content:e?"Hide Password":"Show Password"},f.createElement("div",{className:"form-show-password-button"},e?f.createElement(Tt,{onClick:()=>t(!1),className:"w-5 h-5"}):f.createElement(qt,{onClick:()=>t(!0),className:"w-5 h-5"})))}function Ji(){var e;const{pathname:t}=C(),{t:n}=N(),r=Za((e=>e.homePage)),a="/explore"!==t&&!t.startsWith("/+"),l=t.startsWith("/explore"),s="Mac OS"===jl()&&window.electron,[o]=Ya(),{data:i}=Aa({variables:{featured:!0},fetchPolicy:"cache-and-network",nextFetchPolicy:"cache-first"}),c=o?o.servers:null!=(e=null==i?void 0:i.publicServers)?e:[];return f.createElement(f.Fragment,null,f.createElement("div",{className:"flex flex-col items-center min-w-[4.5rem] w-18 bg-white dark:bg-gray-900 overflow-y-auto scrollbar-none"},s&&f.createElement("div",{className:"h-5"}),f.createElement("div",{className:"h-full flex flex-col items-center w-full divide-y dark:divide-gray-800 divide-gray-200"},f.createElement("div",{className:"space-y-2 flex flex-col items-center py-2"},f.createElement(_i,{name:n("home"),to:""+(r?`/${r}`:"/"),active:a,className:""+(a?"bg-blue-600":"dark:bg-gray-800 bg-gray-200 hover:bg-blue-600 dark:hover:bg-blue-600")},f.createElement(zt,{className:"w-5 h-5 group-hover:text-white transition "+(a?"text-white":"text-blue-500")})),f.createElement(_i,{name:n("explore.title"),to:"/explore",active:l,className:l?"bg-green-600":"dark:bg-gray-800 bg-gray-200 hover:bg-green-600 dark:hover:bg-green-600"},f.createElement(Ht,{className:"w-5 h-5 group-hover:text-white transition "+(l?"text-white":"text-green-500")})),!!o&&f.createElement(Wi,null)),!!c&&c.length>0&&f.createElement("div",{className:"space-y-2 flex flex-col items-center py-2"},c.map((e=>f.createElement(Zi,{server:e,key:e.id})))))))}function Zi({server:e}){var t,n,r;const{pathname:a}=C(),l=P(a,{path:"/:server"}),s=null==(n=null==(t=null==l?void 0:l.params)?void 0:t.server)?void 0:n.substring(1),o=Za((e=>e.serverPages)),[i]=ol({server:e,permissions:[lr.PrivateChannels]}),c=!!(null!=(r=e.channels)?r:[]).filter((e=>e.type!==Ln.Private||i)).find((e=>e.isUnread)),m=s===e.name,[d,u]=g.exports.useState(!1);return f.createElement(f.Fragment,null,f.createElement(Ki,{open:d,setOpen:u,server:e}),f.createElement(Jl,{className:"h-12",data:{type:Cl,server:e,openDelete:()=>u(!0)}},f.createElement(_i,{to:`/+${e.name}${o[e.id]?`/${o[e.id]}`:""}`,name:e.displayName,active:m,unread:c},f.createElement(ps,{server:e,size:12,className:"bg-gray-200 h-12 w-12 dark:bg-gray-800 group-hover:rounded-2xl transition-all "+(m?"rounded-2xl":"rounded-3xl")}))))}function Ki({open:e,setOpen:t,server:r}){const[a,l]=g.exports.useState(""),[s,o]=g.exports.useState(!1),[i,{loading:c}]=function(e){const t={...On,...e};return n(va,t)}(),{push:m}=S();return f.createElement(Vi,{open:e,close:()=>t(!1),closeOnOverlayClick:!0,small:!0,buttons:f.createElement(f.Fragment,null,f.createElement("button",{className:"form-button-cancel",type:"button",onClick:()=>t(!1)},"Cancel"),f.createElement("button",{className:"form-button-delete",type:"button",disabled:!a||c,onClick:()=>{i({variables:{input:{password:a,serverId:r.id}}}).then((()=>{t(!1),m("/")}))}},"Delete",c&&f.createElement(ll,{className:"w-5 h-5 text-primary ml-3"})))},f.createElement("div",{className:"max-w-md w-full rounded-md dark:bg-gray-800 shadow-lg px-5 pt-5 pb-10"},f.createElement("div",{className:"text-red-400 text-lg font-semibold"},"Delete ",r.name),f.createElement("div",{className:"text-tertiary pb-3 pt-3 text-sm"},"All posts, comments, and messages will be lost. Enter your password to continue."),f.createElement("div",{className:"relative"},f.createElement("input",{id:"confirmPassword",name:"confirmPassword",className:"form-input-password",placeholder:"Password",value:a,onChange:e=>l(e.target.value),type:s?"text":"password"}),f.createElement(Qi,{showPassword:s,setShowPassword:o}))))}function Xi({open:e,setOpen:t}){const[r]=Ya(),[a,l]=g.exports.useState(!1),{register:s,handleSubmit:o,watch:i,reset:c,formState:{errors:m}}=He({mode:"onChange"}),d=i("password"),u=i("currentPassword"),[p,{loading:v}]=function(e){const t={...On,...e};return n(wa,t)}(),[h]=function(e){const t={...On,...e};return n(Na,t)}(),b=()=>{t(!1),setTimeout((()=>c()),300)};return f.createElement(f.Fragment,null,f.createElement(Xl,{isOpen:e,close:b},f.createElement("div",{className:"min-w-full h-full min-h-full h-screen dark:bg-gray-800 scrollbar-custom",onClick:e=>e.stopPropagation()},f.createElement("div",{className:"w-full relative flex"},f.createElement("button",{className:"absolute top-3 right-3 focus:outline-none rounded-full transition dark:hover:bg-gray-700 p-2",onClick:b},f.createElement(_t,{className:"w-6 h-6 text-tertiary"})),f.createElement("div",{className:"w-1/3 min-w-[14rem] dark:bg-gray-800 flex justify-end px-4 py-12"},f.createElement("div",{className:"w-56"},f.createElement(Kl,null,"User Settings"),f.createElement(tl,null,"My Account"),f.createElement(tl,{onClick:()=>{localStorage.removeItem("token"),location.reload()}},f.createElement("span",{className:"text-red-500"},"Log Out")))),f.createElement("div",{className:"w-2/3 px-10 py-16 dark:bg-gray-750 min-h-screen"},f.createElement("div",{className:"max-w-screen-sm text-left"},f.createElement("div",{className:"font-semibold text-primary uppercase mb-6"},"My Account"),f.createElement("form",{onSubmit:o((({password:e,currentPassword:t})=>{p({variables:{input:{password:e,currentPassword:t}}}).then((()=>{U.success("Saved changes!"),c()}))})),className:"rounded-lg dark:bg-gray-800 p-4"},f.createElement("div",{className:"flex items-center"},f.createElement("input",{type:"file",accept:"image/png,image/jpeg,image/webp,image/gif",name:"avatarFile",id:"avatarFile",hidden:!0,onChange:e=>{const t=e.target.files[0];t&&h({variables:{input:{avatarFile:t}}})}}),f.createElement("label",{htmlFor:"avatarFile",className:"relative group"},f.createElement(us,{user:r,size:20}),f.createElement("div",{className:"absolute rounded-full cursor-pointer inset-0 bg-black opacity-0 group-hover:opacity-100 bg-opacity-50 z-10 transition flex items-center justify-center"},f.createElement(Lt,{className:"w-1/2 h-1/2"}))),f.createElement("div",{className:"flex items-end ml-6"},f.createElement("div",{className:"font-semibold text-xl text-primary"},r.username))),f.createElement("div",{className:"mt-5 space-y-5"},f.createElement("div",null,f.createElement("label",{htmlFor:"password",className:"label"},"New Password"),f.createElement("input",{className:"textbox",id:"password",...s("password",{minLength:6,required:!0}),type:"password",minLength:6}),m.password&&f.createElement("div",{className:"error"},"Password must be at least 6 characters")),f.createElement("div",null,f.createElement("label",{htmlFor:"currentPassword",className:"label"},"Current Password"),f.createElement("input",{className:"textbox",id:"currentPassword",...s("currentPassword",{required:!0}),type:"password"}))),f.createElement("div",{className:"flex items-center mt-5"},f.createElement("div",{className:"ml-auto"}),f.createElement("button",{type:"submit",disabled:v||!u||!d||(null==d?void 0:d.length)<6,className:"disabled:opacity-50 disabled:cursor-not-allowed rounded px-4 h-9 text-sm text-primary bg-green-600 focus:outline-none flex items-center"},"Save Changes",v&&f.createElement(ll,{className:"w-5 h-5 text-primary ml-3"})))),f.createElement("div",{className:"mt-10 flex items-center justify-end"},f.createElement("button",{type:"button",onClick:()=>l(!0),className:"delete-button"},"Delete Account")))))),f.createElement(ec,{deleteOpen:a,setDeleteOpen:l})))}function ec({deleteOpen:e,setDeleteOpen:t}){const[r,a]=g.exports.useState(""),[l,{loading:s}]=function(e){const t={...On,...e};return n(ka,t)}(),{push:o}=S(),i=I();return f.createElement(Xl,{isOpen:e,close:()=>t(!1)},f.createElement("div",{className:"max-w-md w-full rounded-md dark:bg-gray-800 shadow-lg p-4"},f.createElement("div",{className:"text-red-400 text-2xl font-semibold"},"Delete Account"),f.createElement("div",{className:"text-secondary pb-5 pt-3 text-base"},"You will not be able to recover your account."),f.createElement("div",{className:"text-left"},f.createElement("label",{htmlFor:"confirmPassword",className:"label"},"Password"),f.createElement("input",{id:"confirmPassword",name:"confirmPassword",className:"textbox",value:r,onChange:e=>a(e.target.value),type:"password"})),f.createElement("div",{className:"flex items-center justify-end space-x-4 pt-4"},f.createElement("button",{className:"cancel-button",type:"button",onClick:()=>t(!1)},"Cancel"),f.createElement("button",{className:"delete-button",type:"button",disabled:!r||s,onClick:()=>{l({variables:{input:{password:r}}}).then((()=>{t(!1),o("/"),i.resetStore()}))}},"Delete Account",s&&f.createElement(ll,{className:"w-5 h-5 text-primary ml-3"})))))}function tc(){const[e]=Ya(),t=[0,14],[r,a]=g.exports.useState(!1),[l,s]=Za((e=>[e.updateAvailable,e.setUpdateAvailable]));g.exports.useEffect((()=>{window.electron&&window.electron.on("updateAvailable",(()=>{s(!0)}))}),[]),function(e){const t={...On,...e};n($a,t)}(),(()=>{const e=jl()})();const[o,i,c,m]=Rl();return f.createElement(f.Fragment,null,!!e&&f.createElement(Xi,{open:r,setOpen:a}),f.createElement("div",{className:"flex items-center shadow-md px-3 bottom-0 h-5.5 bg-gray-700 z-50"},e?f.createElement(f.Fragment,null,f.createElement(us,{size:4.5,className:"mr-2",user:e}),f.createElement("div",{className:"text-primary text-13 font-medium cursor-pointer"},e.username),f.createElement("div",{className:"w-2 h-2 rounded-full bg-green-500 ml-2"})):f.createElement("div",{className:"flex items-center text-primary text-13 font-medium"},f.createElement("div",{className:"cursor-pointer hover:underline",onClick:()=>{m(!1),i(!0)}},"Log In"),"  ·  ",f.createElement("div",{className:"cursor-pointer hover:underline",onClick:()=>{m(!0),i(!0)}},"Create account")),f.createElement("div",{className:"ml-auto flex items-center space-x-4 text-primary"},f.createElement(F,{content:""+(window.electron&&l?"Update available":"Up to date!")},f.createElement("div",{className:"flex items-center "+(window.electron&&l?"cursor-pointer":""),onClick:()=>{window.electron&&l&&window.electron.restart()}},f.createElement("div",{className:"text-xs font-medium "+(l&&window.electron?"text-green-500":"text-tertiary")},"Comet v","0.0.70"),window.electron&&l&&f.createElement("div",{className:"pl-2"},f.createElement(Bt,{className:"w-4.5 h-4.5 text-green-500 cursor-pointer"})))),!!e&&f.createElement(f.Fragment,null,f.createElement(F,{content:"Notifications",offset:t},f.createElement(b,{to:"/inbox"},f.createElement(jt,{className:"w-4.5 h-4.5 cursor-pointer"}))),f.createElement(F,{content:"Settings",offset:t},f.createElement("div",{onClick:()=>a(!0)},f.createElement(Gt,{className:"w-4.5 h-4.5 cursor-pointer"})))))))}function nc({channel:e,server:t}){const{t:n}=N(),[r]=ol({server:t,permissions:[lr.ManageChannels]}),{hash:a}=C(),l=`/+${null==t?void 0:t.name}/#${e.name}`,s=a.substring(1)===e.name,[o,i]=g.exports.useState(!1);return f.createElement(f.Fragment,null,f.createElement(Jl,{data:{type:Ul,channel:e,server:t,openDelete:()=>i(!0)}},f.createElement(tl,{to:l,active:s},e.isUnread&&!s&&f.createElement("div",{className:"absolute -left-1.5 top-1/2 transform -translate-y-1/2 rounded-r-full dark:bg-gray-100 h-2 w-1"}),f.createElement(sl,{className:"w-5 h-5 mr-3 text-tertiary"}),f.createElement("span",{className:""+(e.isUnread?"text-primary":"")},e.name),f.createElement("div",{className:"ml-auto"}),!!e.mentionCount&&f.createElement("div",{className:r?"group-hover:hidden block":""},f.createElement(Co,{count:e.mentionCount})),r&&f.createElement(F,{content:n("channel.edit")},f.createElement("div",{className:"group-hover:block hidden"},f.createElement(Gt,{className:"w-4 h-4 text-tertiary"}))))),f.createElement(rc,{open:o,setOpen:i,channel:e,server:t}))}function rc({server:e,channel:t,open:r,setOpen:a}){const[l,{loading:s}]=function(e){const t={...On,...e};return n(wr,t)}(),{push:o}=S(),{pathname:i,hash:c}=C();return f.createElement(Vi,{closeOnOverlayClick:!0,small:!0,open:r,close:()=>a(!1),buttons:f.createElement(f.Fragment,null,f.createElement("button",{className:"form-button-cancel",onClick:()=>a(!1),type:"button"},"Cancel"),f.createElement("button",{className:"form-button-delete",disabled:s,onClick:()=>{l({variables:{input:{channelId:t.id}},update(t,{data:{deleteChannel:n}}){t.writeQuery({query:La,variables:{name:e.name},data:{server:{...e,channels:e.channels.filter((e=>e.id!==n))}}})}}).then((()=>{a(!1),i===`/+${e.name}/`&&c===`#${t.name}`&&o(`/+${e.name}`)}))},type:"button"},s?f.createElement(ll,null):"Delete"))},f.createElement("div",{className:"px-4 pt-4 pb-10"},f.createElement("div",{className:"text-lg font-medium text-secondary"},"Delete ",f.createElement("span",{className:"text-primary"},"#",t.name),"?"),f.createElement("div",{className:"text-tertiary pt-3 text-sm"},"Messages in this channel will be lost.")))}const ac=e=>y(`\n  h-1.5\n  w-1.5\n  rounded-full\n  dark:bg-gray-100\n  mr-2\n  ${e?"opacity-100":"opacity-0"}\n`),lc=e=>y(`\n  flex\n  items-center\n  cursor-pointer\n  ${e?"text-primary":"text-gray-600 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300"}\n`);function sc({open:e,setOpen:t,server:r}){const{handleSubmit:a,register:l,setValue:s,watch:o,reset:i}=He({mode:"onChange"}),c=o("name");g.exports.useEffect((()=>{c&&s("name",c.toLowerCase().replace(" ","-").replace(/[^a-z0-9-_]+/,""))}),[c]);const[m,d]=g.exports.useState(Ln.Public),{push:u}=S(),[p,{loading:v}]=function(e){const t={...On,...e};return n(yr,t)}({update(e,{data:{createChannel:t}}){e.writeQuery({query:La,variables:{name:r.name},data:{server:{...r,channels:[...r.channels,t]}}})}}),h=()=>{t(!1)},b=!!c&&r.channels.map((e=>e.name)).includes(c);return f.createElement(Vi,{onSubmit:a((({name:e,description:t})=>{p({variables:{input:{name:e,description:t,serverId:r.id,type:m}}}).then((({data:{createChannel:e}})=>{h(),u(`/+${r.name}/#${e.name}`),i(),d(Ln.Public)}))})),open:e,close:h,closeOnOverlayClick:!0,buttons:f.createElement("button",{type:"submit",className:"form-button-submit",disabled:!c||b||v},v?f.createElement(ll,{className:"w-5 h-5"}):f.createElement(L,{className:"w-5 h-5"}))},f.createElement("div",{className:"p-5 space-y-4 w-full text-left"},f.createElement("div",{className:"flex items-center font-semibold text-primary"},f.createElement(ps,{server:r,size:6,className:"rounded-md mr-2"}),f.createElement("div",{className:"truncate"},r.displayName),"  ·  Create Channel",f.createElement(T,{className:"h-5 w-5 highlightable ml-auto",onClick:()=>h()})),f.createElement("div",null,f.createElement("div",{className:"relative"},f.createElement("input",{...l("name",{required:!0,maxLength:100}),maxLength:100,className:"form-input-icon",spellCheck:!1,autoCapitalize:"none",id:"name",placeholder:"Channel name"}),f.createElement(sl,{className:"form-input-icon-icon"})),b&&f.createElement("div",{className:"form-error"},"Channel already exists")),f.createElement("textarea",{placeholder:"Description",...l("description"),className:"form-textarea"}),f.createElement("div",{className:"flex items-center space-x-4 text-sm text-tertiary"},f.createElement(F,{content:"Anyone can view and send messages"},f.createElement("div",{onClick:()=>d(Ln.Public),className:lc(m===Ln.Public)},f.createElement("div",{className:ac(m===Ln.Public)}),"Public")),f.createElement(F,{content:"Anyone can view, but only members with permission can send messages"},f.createElement("div",{onClick:()=>d(Ln.Restricted),className:lc(m===Ln.Restricted)},f.createElement("div",{className:ac(m===Ln.Restricted)}),"Restricted")),f.createElement(F,{content:"Only members with permission can view and send messages"},f.createElement("div",{onClick:()=>d(Ln.Private),className:lc(m===Ln.Private)},f.createElement("div",{className:ac(m===Ln.Private)}),"Private")))))}function oc({server:e}){const{t:t}=N(),[n,r]=g.exports.useState(!1),[a]=ol({server:e,permissions:[lr.ManageChannels]});return a?f.createElement(f.Fragment,null,f.createElement(Kl,{onClick:()=>r(!0),plusLabel:t("channel.create")},"Channels"),f.createElement(sc,{open:n,setOpen:r,server:e})):f.createElement(Kl,null,"Channels")}function ic({open:e,setOpen:t,server:r}){var a;const{t:l}=N(),[s,o]=g.exports.useState(null==(a=r.roles.find((e=>e.isDefault)))?void 0:a.id),i=r.roles.find((e=>e.id===s)),[c,m]=g.exports.useState(i.color),[d,u]=g.exports.useState(i.name),[p,v]=g.exports.useState(i.permissions);g.exports.useEffect((()=>{v(i.permissions),u(i.name),m(i.color)}),[i]),I(),function(e){const t={...On,...e};n(ua,t)}({update(e,{data:{deleteRole:t}}){const n=e.readQuery({query:Sa}),a=JSON.parse(JSON.stringify(n));a.user.servers.find((e=>e.id===r.id)).roles=r.roles.filter((e=>e.id!==t)),e.writeQuery({query:Sa,data:a})}});const[h,{loading:b}]=function(e){const t={...On,...e};return n(da,t)}(),x=!((e,t)=>{if(e.length!==t.length)return!1;for(const n of e)if(!t.includes(n))return!1;for(const n of t)if(!e.includes(n))return!1;return!0})(p,i.permissions)||d!==i.name||c!==i.color,E=[lr.SendMessages,lr.RestrictedChannels,lr.PrivateChannels,lr.ManageChannels,lr.ManageServer,lr.ManagePosts,lr.ManageComments,lr.DisplayRoleSeparately,lr.Admin],[y,w]=g.exports.useState(!1),[k,C]=g.exports.useState(""),[$,{loading:U}]=function(e){const t={...On,...e};return n(ma,t)}({update(e,{data:{createRole:t}}){e.writeQuery({query:La,variables:{name:r.name},data:{server:{...r,roles:[...r.roles,t]}}})}}),S=()=>{k&&$({variables:{input:{serverId:r.id,name:k}}}).then((e=>{C(""),o(e.data.createRole.id)}))};return f.createElement(Vi,{open:e,close:()=>{t(!1)},closeOnOverlayClick:!0,large:!0},f.createElement("div",{className:"flex"},f.createElement("div",{className:"h-[40rem] max-h-screen w-60 dark:bg-gray-750 rounded-l-lg space-y-0.5 scrollbar-custom p-1.5"},null==r?void 0:r.roles.map((e=>f.createElement(tl,{key:e.id,light:!0,active:s===e.id,onClick:()=>o(e.id)},f.createElement("span",{style:{color:e.color}},e.name),e.isDefault&&f.createElement(F,{content:"Delete Role"},f.createElement("div",{className:"group-hover:visible invisible ml-auto highlightable"},f.createElement(Vt,{className:"w-4 h-4"})))))),y&&f.createElement("div",{className:"relative py-1 px-1.5"},f.createElement("input",{className:"form-input-password",placeholder:"Name",autoFocus:!0,value:k,onChange:e=>C(e.target.value),onKeyDown:e=>{"Enter"===e.code&&d&&S()},type:"text",maxLength:100}),f.createElement(L,{onClick:S,className:"form-show-password-button"})),f.createElement(tl,{light:!0,onClick:()=>w(!0)},"Add Role",f.createElement(M,{className:"w-5 h-5 ml-auto"}))),f.createElement("div",{className:"relative py-5 px-7 w-full h-[40rem] max-h-screen scrollbar-thin dark:scrollbar-thumb-gray-850 scrollbar-track-transparent scrollbar-thumb-rounded-md rounded-tr-lg"},f.createElement("div",{className:"flex items-center justify-between pb-5"},f.createElement("div",{className:"text-primary text-base font-semibold"},"Edit Role - ",i.name,!!(null==i?void 0:i.isDefault)&&" (Default)")),f.createElement("div",{className:"mb-6"},f.createElement("label",{className:"label"},"Name"),f.createElement("input",{className:"form-input",placeholder:"Name",value:d,onChange:e=>u(e.target.value),id:"name"})),f.createElement("div",{className:"label"},"Color"),f.createElement("div",{className:"grid grid-cols-4 gap-2 mb-10 w-60"},Object.keys(cs).map((e=>f.createElement("div",{key:e,className:"h-6 rounded relative cursor-pointer",style:{backgroundColor:cs[e][500]},onClick:()=>{c===cs[e][500]?m(null):m(cs[e][500])}},c===cs[e][500]&&f.createElement("div",{className:"inset-0 absolute flex items-center justify-center"},f.createElement(L,{className:"w-4 h-4 text-white"})))))),f.createElement("div",{className:"label"},"Permissions"),f.createElement("div",{className:"space-y-0.5 divide-y divide-gray-700"},E.map((e=>f.createElement("div",{key:e,className:"flex w-full py-4 text-base cursor-pointer "+(p.includes(lr.Admin)&&e!==lr.Admin?"opacity-50":""),onClick:()=>{p.includes(lr.Admin)&&e!==lr.Admin||(p.includes(e)?v(p.filter((t=>t!==e))):v([...p,e]))}},f.createElement("div",null,f.createElement("div",{className:"font-medium"},l(`permissions.server.${e}.title`)),!!l(`permissions.server.${e}.description`)&&f.createElement("div",{className:"text-13 text-tertiary pt-1"},l(`permissions.server.${e}.description`))),f.createElement("div",{className:"pl-6 ml-auto"},f.createElement(as,{disabled:p.includes(lr.Admin)&&e!==lr.Admin,green:!0,checked:p.includes(e),onChange:()=>{p.includes(e)?v(p.filter((t=>t!==e))):v([...p,e])}})))))),f.createElement("div",{className:"h-16"}),f.createElement(Yt,null,!!x&&f.createElement(Y.div,{initial:{y:"500px"},animate:{y:0},exit:{y:"500px"},transition:{ease:[.4,0,.2,1],duration:.15},className:"sticky z-50 flex items-center rounded-lg shadow-lg bottom-0 w-full dark:bg-gray-725 pr-3 pl-6 h-14 transform transition "},f.createElement("div",{className:"text-secondary text-sm"},"Changes not saved"),f.createElement("div",{className:"flex items-center space-x-3 ml-auto"},f.createElement("button",{type:"button",className:"form-button-cancel",onClick:()=>{u(i.name),m(i.color),v(i.permissions)}},"Discard"),f.createElement("button",{type:"button",disabled:!d||!x||b,className:"form-button-submit",onClick:()=>h({variables:{input:{roleId:s,name:d,color:c,permissions:p}}})},"Save",b&&f.createElement(ll,{className:"w-5 h-5 text-primary ml-3"}))))))))}function cc(){const{server:e}=yi(),[t]=Ya(),[r,a]=g.exports.useState(!1),[l,s]=g.exports.useState(!1),[o,i]=ol({server:e,permissions:[lr.ManageServer,lr.PrivateChannels]}),[c,{loading:m}]=function(e){const t={...On,...e};return n(ha,t)}(),[d,{loading:u}]=ba(),p=Mo(null==e?void 0:e.category);return e?f.createElement(f.Fragment,null,f.createElement(Yi,{open:r,setOpen:a,server:e}),f.createElement(ic,{open:l,setOpen:s,server:e}),f.createElement(Ja,null,e.bannerUrl?f.createElement("div",{className:"h-20 relative bg-center bg-cover bg-no-repeat "+(e.bannerUrl?"":"bg-gradient-to-br from-red-400 to-indigo-600"),style:e.bannerUrl?{backgroundImage:`url(${e.bannerUrl})`}:{}}):f.createElement("div",{className:"h-12 border-b dark:border-gray-850 shadow flex items-center px-5 text-base font-medium"},f.createElement(Ro,{className:"h-4"})),f.createElement("div",{className:"px-1.5 pt-4"},f.createElement("div",{className:"shadow-inner dark:bg-gray-850 p-2.5 space-y-2.5 rounded"},f.createElement("div",{className:"flex items-center"},f.createElement(ps,{server:e,size:6,className:"rounded-md mr-2 dark:bg-gray-750"}),f.createElement("div",{className:"font-semibold text-primary pr-2.5 truncate"},e.displayName),!!t&&t.id!==e.owner.id&&f.createElement("button",{className:(v=e.isJoined,h=m||u,y(`\n  ml-auto\n  px-3\n  h-6\n  rounded\n  text-13\n  font-medium\n  focus:outline-none\n  ${v?"border border-gray-700 text-blue-500":"bg-blue-500 text-primary"}\n  ${h?"opacity-50":"opacity-100"}\n`)),type:"button",onClick:()=>{m||u||(e.isJoined?d({variables:{input:{serverId:e.id}}}):c({variables:{input:{serverId:e.id}}}))}},e.isJoined?"Leave":"Join")),f.createElement("div",{className:"text-13 text-secondary pb-1.5"},e.description||"No description"),f.createElement("div",{className:"flex items-center justify-between"},f.createElement("div",{className:"text-xs font-medium flex items-center text-tertiary"},f.createElement(it,{className:"w-4 h-4 mr-2.5"}),e.userCount," Member",1===e.userCount?"":"s"),f.createElement("div",{className:"text-xs font-medium flex items-center text-tertiary"},f.createElement(p,{className:"w-4 h-4 mr-2.5"}),e.category))),f.createElement(Kl,{plusLabel:"Create Post"},"Posts"),f.createElement(Li,null),f.createElement(oc,{server:e}),f.createElement("div",{className:"space-y-0.5"},e.channels.filter((e=>e.type!==Ln.Private||i)).map((t=>f.createElement(nc,{key:t.id,channel:t,server:e})))),o&&f.createElement(f.Fragment,null,f.createElement(Kl,null,"Admin"),f.createElement("div",{className:"space-y-0.5"},f.createElement(tl,{onClick:()=>a(!0)},f.createElement(Gt,{className:"mr-3 w-5 h-5"}),"Edit Planet"),f.createElement(tl,{onClick:()=>s(!0)},f.createElement(Wt,{className:"mr-3 w-5 h-5"}),"Manage Roles")))))):null;var v,h}function mc({channel:e}){var t;return f.createElement(ns,{showDivider:!!(null==e?void 0:e.description),icon:f.createElement(sl,{className:"w-5 h-5"}),title:`${null!=(t=null==e?void 0:e.name)?t:""}`},(null==e?void 0:e.description)&&f.createElement("div",{className:"text-13 text-tertiary font-medium leading-5 truncate"},"Description"),f.createElement("div",{className:"ml-auto pl-6 flex items-center space-x-5"},f.createElement(Ri,null)))}function dc({channelName:e}){var t;const{server:r,users:a}=yi(),l=(null!=(t=null==r?void 0:r.channels)?t:[]).find((t=>t.name===e));hi(`channel/${null==l?void 0:l.id}`);const[s]=function(e){const t={...On,...e};return n(Nr,t)}(),[o]=Ya(),[i,c]=g.exports.useState(!1),m=Mt(l);return g.exports.useEffect((()=>{l&&m&&l.id!==m.id&&c(!1)}),[l,m]),g.exports.useEffect((()=>{o&&l&&l.isUnread&&!i&&(c(!0),s({variables:{input:{channelId:l.id}},optimisticResponse:{readChannel:{...l,isUnread:!1}}}))}),[l,o]),r&&!l?f.createElement(Qt,{to:`/+${r.name}`}):f.createElement(Bs,{header:f.createElement(mc,{channel:l}),rightSidebar:f.createElement(bi,{channel:l,serverUsers:a,server:r})},f.createElement(Ve,null,f.createElement("title",null,l&&r?`#${null==l?void 0:l.name} – ${null==r?void 0:r.displayName}`:null)),!!l&&f.createElement(gi,{server:r,channel:l,users:a.map((e=>e.user))}))}const uc=()=>{var e,t,n,a;const[l]=Ya(),{push:s}=S(),{pathname:o,hash:i}=C(),c=P(o,{path:"/:server"}),m=null==(e=null==c?void 0:c.params)?void 0:e.server.substring(1),d=m&&i?i.substring(1):null,u=P(o,{path:"/dm/:username"}),p=null==(n=null==(t=null==u?void 0:u.params)?void 0:t.username)?void 0:n.substring(1),v=P(o,{path:"/group/:groupId"}),h=null==(a=null==v?void 0:v.params)?void 0:a.groupId,[f,b]=g.exports.useState(!0);g.exports.useEffect((()=>{window.electron&&(window.electron.on("windowOpened",(()=>b(!0))),window.electron.on("windowClosed",(()=>b(!1))))}),[]),function(e){const t={...On,...e};r(Ha,t)}({skip:!l,onSubscriptionData({client:e,subscriptionData:t}){var n,r,a,o,i;if(t.data){const c=t.data.messageChanged,u=null==c?void 0:c.added,g=null==c?void 0:c.deleted;let v;if(null==c||c.updated,u){v=u;const t=null==(n=v.channel)?void 0:n.id,c=null==(r=v.group)?void 0:r.id,g=v.toUser?null==(a=v.author)?void 0:a.id:void 0,b={query:Ia,variables:{userId:g,groupId:c,channelId:t,cursor:null}},x=e.cache.readQuery(b);x&&!x.messages.messages.map((e=>e.id)).includes(v.id)&&e.cache.writeQuery({...b,data:{messages:{...x.messages,messages:[...x.messages.messages,v]}}});const E=p&&v.toUser&&p===v.toUser.username,y=h&&v.group&&h===v.group.id,w=d&&v.channel&&v.channel.server.name===m&&d===v.channel.name;if(v.toUser&&!E){const t=e.cache.readFragment({fragment:cr,id:`User:${v.author.id}`});t&&e.cache.writeFragment({fragment:cr,id:`User:${v.author.id}`,data:{...t,unreadCount:t.unreadCount+1}})}else if(v.group&&!y){const t=e.cache.readFragment({fragment:ur,id:`User:${v.group.id}`});t&&e.cache.writeFragment({fragment:ur,id:`Group:${v.group.id}`,data:{...t,unreadCount:t.unreadCount+1}})}else if(v.channel&&!w){const t=e.cache.readFragment({fragment:mr,id:`Channel:${v.channel.id}`});if(t){const n={...t,isUnread:!0};(v.isEveryoneMentioned||l&&v.mentionedUsers.map((e=>e.id)).includes(l.id))&&(n.mentionCount=t.mentionCount+1),e.cache.writeFragment({fragment:mr,id:`Channel:${v.channel.id}`,data:n})}}if(v.author.id!==l.id){if((!window.electron||window.electron&&f)&&(y||E||w))return;if(v.type===Gn.Normal&&v.text&&(v.toUser||v.group||v.isEveryoneMentioned||l&&v.mentionedUsers.map((e=>e.id)).includes(l.id))){let e=`@${v.author.username}`;v.channel&&(e+=` · #${v.channel.name}`),v.group&&(e+=` · #${v.group.displayName}`),fo({title:e,body:pc(v.text),icon:null!=(o=v.author.avatarUrl)?o:(window.electron?".":"")+"/icons/icon.png",timestamp:v.createdAt,onClick:()=>{g?s(`/dm/@${v.author.username}`):c?s(`/group/${c}`):t&&s(`/+${v.server.name}/#${v.channel.name}`),window.electron&&window.electron.show()}})}else v.type===Gn.FriendRequestReceived&&fo({title:`@${v.author.username}`,body:"Sent a friend request",icon:null!=(i=v.author.avatarUrl)?i:(window.electron?".":"")+"/icons/icon.png",timestamp:v.createdAt,onClick:()=>{s("/friends"),window.electron&&window.electron.show()}})}}else g&&(v=g)}}})};function pc(e){let t=document.createElement("DIV");return t.innerHTML=e,t.textContent||t.innerText||""}const gc="\\+[A-Za-z0-9_]+";function vc(){var e,t;uc();const{pathname:n}=C(),r=P(n,{path:"/dm/:username"}),a=null==(t=null==(e=null==r?void 0:r.params)?void 0:e.username)?void 0:t.substring(1);return f.createElement(Jt,null,f.createElement(Zt,{path:"/"},f.createElement(Jt,null,f.createElement(Zt,{path:["/","/friends","/inbox","/dm/:username(@[A-Za-z0-9-_]+)",`/:server(${gc})`,`/:server(${gc})/post/:postId`,`/:server(${gc})/post/:postId/:slug`,"/explore"],exact:!0},f.createElement("div",{className:"flex-grow"},f.createElement("div",{className:"flex h-full",style:{height:"calc(100% - 1.375rem)"}},f.createElement(Ji,null),f.createElement(Zt,{path:"/explore"},f.createElement(To,null)),f.createElement(Zt,{path:`/:server(${gc})`},f.createElement(hc,null)),f.createElement(Zt,{exact:!0,path:["/","/friends","/inbox","/dm/:username(@[A-Za-z0-9-_]+)"]},f.createElement(Ti,null),f.createElement(Zt,{path:"/",exact:!0},f.createElement(Eo,null)),f.createElement(Zt,{path:"/friends"},f.createElement(Fo,null)),f.createElement(Zt,{path:"/inbox"},f.createElement(jo,null)),f.createElement(Zt,{path:"/dm/:username(@[A-Za-z0-9-_]+)"},f.createElement(vi,{username:a})))),f.createElement(tc,null))),f.createElement(Zt,null,f.createElement(Qa,null)))))}function hc(){const{server:e}=Rt(),t=e.substring(1);return f.createElement(Ei,{name:t},f.createElement(fc,null))}function fc(){var e;const{server:t,loading:n}=yi(),{hash:r,pathname:a}=C(),l=r.substring(1),s=P(a,{path:"/:server/post/:postId"}),o=null==(e=null==s?void 0:s.params)?void 0:e.postId;return t||n?f.createElement(f.Fragment,null,f.createElement(cc,null),f.createElement(Zt,{path:`/:server(${gc})`,exact:!0,render:({location:e})=>e.hash?f.createElement(dc,{channelName:l}):f.createElement(wi,null)}),f.createElement(Zt,{path:[`/:server(${gc})/post/:postId`,`/:server(${gc})/post/:postId/:slug`]},f.createElement(Di,{postId:o}))):f.createElement(Qa,null)}function bc(){return Kt("(min-width: 1024px)"),f.createElement(Xt,{position:"bottom-center",toastOptions:{className:"toast",success:{className:"toast",iconTheme:{primary:"#059669"}},error:{className:"toast",iconTheme:{primary:"#EF4444"}}}})}function xc({post:e,show:t}){const n=e?e.title.split(" "):[],r=`${n.slice(0,9).join(" ")}${n.length>=9?"...":""}`;return f.createElement("div",null,f.createElement(Yt,null,t&&f.createElement(Y.div,{initial:{scale:.75,opacity:0},animate:{scale:1,opacity:1},exit:{scale:.75,opacity:0},transition:{duration:.15,ease:"easeInOut"},className:"bg-blue-500 bg-opacity-75 truncate w-64 rounded-md shadow-lg text-white text-sm font-medium h-10 px-2 flex items-center"},f.createElement("div",{className:"truncate"},r))))}const Ec={position:"fixed",pointerEvents:"none",zIndex:100,left:0,top:0};function yc(e,t,n,r){e||(e={x:0,y:0});let a=n.x-e.x,l=n.y-e.y,{x:s,y:o}=t||{x:r.x-e.x,y:r.y-e.y};const i=`translate(${s+a}px, ${o+l}px)`;return{transform:i,WebkitTransform:i}}var wc=g.exports.memo((function(){const[e,t]=g.exports.useState({x:0,y:0}),[n,r]=g.exports.useState({x:0,y:0}),a=e=>t({x:e.clientX,y:e.clientY}),l=e=>t({x:e.clientX,y:e.clientY});g.exports.useEffect((()=>(window.addEventListener("mousedown",a),window.addEventListener("mouseup",l),()=>{window.removeEventListener("mousedown",a),window.removeEventListener("mouseup",l)})));const{itemType:s,isDragging:o,item:i,initialOffset:c,currentOffset:m}=en((e=>({item:e.getItem(),itemType:e.getItemType(),initialOffset:e.getInitialSourceClientOffset(),currentOffset:e.getSourceClientOffset(),isDragging:e.isDragging()})));return f.createElement("div",{style:Ec},f.createElement("div",{style:yc(c,m,e,n)},s===Ka&&f.createElement(xc,{post:i,show:o})))}));const Nc="_window-button_19ru1_11",kc="_window-button-icon_19ru1_18";function Cc(){const{close:e,minimize:t,maximize:n,unmaximize:r,isMaximized:a}=window.electron,[l,s]=g.exports.useState(a()),o=()=>s(a());return f.createElement("header",{className:"_titlebar_19ru1_1"},f.createElement(Ro,{className:"h-3 text-tertiary"}),f.createElement("div",{className:"_window-controls_19ru1_6"},f.createElement("div",{className:`${Nc} flex`,onClick:()=>{t(),o()}},f.createElement("img",{className:`${kc} hidden dark:block`,srcSet:"./icons/titlebar/min-w-10.png 1x, ./icons/titlebar/min-w-12.png 1.25x, ./icons/titlebar/min-w-15.png 1.5x, ./icons/titlebar/min-w-15.png 1.75x, ./icons/titlebar/min-w-20.png 2x, ./icons/titlebar/min-w-20.png 2.25x, ./icons/titlebar/min-w-24.png 2.5x, ./icons/titlebar/min-w-30.png 3x, ./icons/titlebar/min-w-30.png 3.5x",draggable:"false"}),f.createElement("img",{className:`${kc} block dark:hidden`,srcSet:"./icons/titlebar/min-k-10.png 1x, ./icons/titlebar/min-k-12.png 1.25x, ./icons/titlebar/min-k-15.png 1.5x, ./icons/titlebar/min-k-15.png 1.75x, ./icons/titlebar/min-k-20.png 2x, ./icons/titlebar/min-k-20.png 2.25x, ./icons/titlebar/min-k-24.png 2.5x, ./icons/titlebar/min-k-30.png 3x, ./icons/titlebar/min-k-30.png 3.5x",draggable:"false"})),f.createElement("div",{className:`${Nc} ${l?"hidden":"flex"}`,onClick:()=>{n(),o()}},f.createElement("img",{className:`${kc} hidden dark:block`,srcSet:"./icons/titlebar/max-w-10.png 1x, ./icons/titlebar/max-w-12.png 1.25x, ./icons/titlebar/max-w-15.png 1.5x, ./icons/titlebar/max-w-15.png 1.75x, ./icons/titlebar/max-w-20.png 2x, ./icons/titlebar/max-w-20.png 2.25x, ./icons/titlebar/max-w-24.png 2.5x, ./icons/titlebar/max-w-30.png 3x, ./icons/titlebar/max-w-30.png 3.5x",draggable:"false"}),f.createElement("img",{className:`${kc} block dark:hidden`,srcSet:"./icons/titlebar/max-k-10.png 1x, ./icons/titlebar/max-k-12.png 1.25x, ./icons/titlebar/max-k-15.png 1.5x, ./icons/titlebar/max-k-15.png 1.75x, ./icons/titlebar/max-k-20.png 2x, ./icons/titlebar/max-k-20.png 2.25x, ./icons/titlebar/max-k-24.png 2.5x, ./icons/titlebar/max-k-30.png 3x, ./icons/titlebar/max-k-30.png 3.5x",draggable:"false"})),f.createElement("div",{className:`${Nc} ${l?"flex":"hidden"}`,onClick:()=>{r(),o()}},f.createElement("img",{className:`${kc} hidden dark:block`,srcSet:"./icons/titlebar/restore-w-10.png 1x, ./icons/titlebar/restore-w-12.png 1.25x, ./icons/titlebar/restore-w-15.png 1.5x, ./icons/titlebar/restore-w-15.png 1.75x, ./icons/titlebar/restore-w-20.png 2x, ./icons/titlebar/restore-w-20.png 2.25x, ./icons/titlebar/restore-w-24.png 2.5x, ./icons/titlebar/restore-w-30.png 3x, ./icons/titlebar/restore-w-30.png 3.5x",draggable:"false"}),f.createElement("img",{className:`${kc} block dark:hidden`,srcSet:"./icons/titlebar/restore-k-10.png 1x, ./icons/titlebar/restore-k-12.png 1.25x, ./icons/titlebar/restore-k-15.png 1.5x, ./icons/titlebar/restore-k-15.png 1.75x, ./icons/titlebar/restore-k-20.png 2x, ./icons/titlebar/restore-k-20.png 2.25x, ./icons/titlebar/restore-k-24.png 2.5x, ./icons/titlebar/restore-k-30.png 3x, ./icons/titlebar/restore-k-30.png 3.5x",draggable:"false"})),f.createElement("div",{className:`${Nc} _close-button_19ru1_32 flex`,onClick:()=>{e(),o()}},f.createElement("img",{className:`${kc} hidden dark:block`,srcSet:"./icons/titlebar/close-w-10.png 1x, ./icons/titlebar/close-w-12.png 1.25x, ./icons/titlebar/close-w-15.png 1.5x, ./icons/titlebar/close-w-15.png 1.75x, ./icons/titlebar/close-w-20.png 2x, ./icons/titlebar/close-w-20.png 2.25x, ./icons/titlebar/close-w-24.png 2.5x, ./icons/titlebar/close-w-30.png 3x, ./icons/titlebar/close-w-30.png 3.5x",draggable:"false"}),f.createElement("img",{className:`${kc} block dark:hidden`,srcSet:"./icons/titlebar/close-k-10.png 1x, ./icons/titlebar/close-k-12.png 1.25x, ./icons/titlebar/close-k-15.png 1.5x, ./icons/titlebar/close-k-15.png 1.75x, ./icons/titlebar/close-k-20.png 2x, ./icons/titlebar/close-k-20.png 2.25x, ./icons/titlebar/close-k-24.png 2.5x, ./icons/titlebar/close-k-30.png 3x, ./icons/titlebar/close-k-30.png 3.5x",draggable:"false"}))))}const{hasOwnProperty:$c}=Object.prototype;const Uc=(e,t)=>{let n;try{n=JSON.stringify(e)}catch(r){const e=new nn(`Network request failed. ${t} is not serializable: ${r.message}`);throw e.parseError=r,e}return n};function Sc(e,t,n){e.append(t,n,n.name)}const Pc=(e={})=>{let{uri:t="/graphql",fetch:n,includeExtensions:r,useGETForQueries:a,isExtractableFile:l=sn,formDataAppendFile:s=Sc,...i}=e;on(n),n||(n=fetch);const c={http:{includeExtensions:r},options:i.fetchOptions,credentials:i.credentials,headers:i.headers};return new o((e=>{let r=rn(e,t);const o=e.getContext(),i={};if(o.clientAwareness){const{name:e,version:t}=o.clientAwareness;e&&(i["apollographql-client-name"]=e),t&&(i["apollographql-client-version"]=t)}const m={...i,...o.headers},u={http:o.http,options:o.fetchOptions,credentials:o.credentials,headers:m},{options:g,body:v}=((e,t,...n)=>{let r={...t.options,headers:t.headers,credentials:t.credentials},a=t.http||{};n.forEach((e=>{r={...r,...e.options,headers:{...r.headers,...e.headers}},e.credentials&&(r.credentials=e.credentials),a={...a,...e.http}}));const{operationName:l,extensions:s,variables:o,query:i}=e,c={operationName:l,variables:o};return a.includeExtensions&&(c.extensions=s),a.includeQuery&&(c.query=p(i)),{options:r,body:c}})(e,cn,c,u),{clone:h,files:f}=an(v,"",l),b=Uc(h,"Payload");let x;if(!g.signal){const{controller:e,signal:t}=(()=>{if("undefined"==typeof AbortController)return{controller:!1,signal:!1};const e=new AbortController;return{controller:e,signal:e.signal}})();x=e,x&&(g.signal=t)}if(a&&!e.query.definitions.some((e=>"OperationDefinition"===e.kind&&"mutation"===e.operation))&&(g.method="GET"),"GET"===g.method){const{newURI:e,parseError:t}=function(e,n){const r=[],a=(e,t)=>{r.push(`${e}=${encodeURIComponent(t)}`)};if("query"in n&&a("query",n.query),n.operationName&&a("operationName",n.operationName),n.variables){let e;try{e=Uc(n.variables,"Variables map")}catch(t){return{parseError:t}}a("variables",e)}if(n.extensions){let e;try{e=Uc(n.extensions,"Extensions map")}catch(t){return{parseError:t}}a("extensions",e)}let l="",s=e;const o=e.indexOf("#");-1!==o&&(l=e.substr(o),s=e.substr(0,o));const i=-1===s.indexOf("?")?"?":"&";return{newURI:s+i+r.join("&")+l}}(r,v);if(t)return ln(t);r=e}else if(f.size){delete g.headers["content-type"];const e=new FormData;e.append("operations",b);const t={};let n=0;f.forEach((e=>{t[++n]=e})),e.append("map",JSON.stringify(t)),n=0,f.forEach(((t,r)=>{s(e,++n,r)})),g.body=e}else try{g.body=Uc(v,"Payload")}catch(E){return ln(E)}return new d((t=>{var a;return n(r,g).then((t=>(e.setContext({response:t}),t))).then((a=e,e=>e.text().then((t=>{try{return JSON.parse(t)}catch(n){const r=n;throw r.name="ServerParseError",r.response=e,r.statusCode=e.status,r.bodyText=t,r}})).then((t=>(e.status>=300&&tn(e,t,`Response not successful: Received status code ${e.status}`),Array.isArray(t)||$c.call(t,"data")||$c.call(t,"errors")||tn(e,t,`Server response was missing for query '${Array.isArray(a)?a.map((e=>e.operationName)):a.operationName}'.`),t))))).then((e=>(t.next(e),t.complete(),e))).catch((e=>{"AbortError"!==e.name&&(e.result&&e.result.errors&&e.result.data&&t.next(e.result),t.error(e))})),()=>{x&&x.abort()}}))}))};const Ic=hn((({graphQLErrors:e,networkError:t})=>{e&&e.map((({message:e,locations:t,path:n})=>{console.log(`[GraphQL error]: Message: ${e}, Location: ${t}, Path: ${n}`),"Access denied! You need to be authorized to perform this action!"!==e&&U.error(a.t(e))})),t&&(console.log(`[Network error]: ${t}`),U.error(t.message))})),Fc=new class extends o{constructor(e={}){super(Pc(e).request),this.options=e}}({uri:"https://api.joincomet.app/graphql",headers:{token:localStorage.getItem("token")}}),Mc=fn(((e,{headers:t})=>{const n=localStorage.getItem("token");return{headers:n?{...t,token:n}:t}})),Rc=new class extends o{constructor(){super(),this.client=i({url:"wss://api.joincomet.app/graphql",lazy:!1,connectionParams:()=>{const e=localStorage.getItem("token");return e?{token:e}:{}},on:{connected:()=>{ja.status="connected"},error:()=>{ja.status="error"},closed:()=>{ja.status="closed"},connecting:()=>{ja.status="connecting"}}})}wsFetcher(e){return c((t=>this.client.subscribe(e,t)))}request(e){const t=m();return new d((n=>u(t(this.wsFetcher({operationName:e.operationName,query:p(e.query),variables:e.variables})),n)))}},Ac=new gn({link:pn([Ic,(new mn).split((({query:e})=>{const t=dn(e);return"OperationDefinition"===t.kind&&("subscription"===t.operation||un(t))}),Rc,Mc.concat(Fc))]),cache:new vn({typePolicies:{User:{fields:{servers:{merge:!1},folders:{merge:!1},relatedUsers:{merge:!1}}},Server:{fields:{channels:{merge:!1},folders:{merge:!1},owner:{merge:!0},permissions:{merge:!1},roles:{merge:!1}}},Post:{fields:{author:{merge:!0},serverUser:{merge:!0},server:{merge:!0}}},Comment:{fields:{author:{merge:!0},serverUser:{merge:!0}}},Message:{fields:{author:{merge:!0},serverUser:{merge:!0},channel:{merge:!0},group:{merge:!0},toUser:{merge:!0}}},Query:{fields:{serverUsers:{merge:!1},user:{merge:!0},server:{merge:!0},folder:{merge:!0},publicServers:{merge:!1}}}}})});var Dc="_meteor-1_1rpvx_1",Oc="_meteor-2_1rpvx_24",Lc="_meteor-3_1rpvx_47",Tc="_meteor-4_1rpvx_70",qc="_meteor-5_1rpvx_93",zc="_meteor-6_1rpvx_116",Hc="_meteor-7_1rpvx_139";function _c(){return f.createElement(f.Fragment,null,f.createElement("div",{className:Dc}),f.createElement("div",{className:Oc}),f.createElement("div",{className:Lc}),f.createElement("div",{className:Tc}),f.createElement("div",{className:qc}),f.createElement("div",{className:zc}),f.createElement("div",{className:Hc}))}function Bc(){return f.createElement("div",{className:"relative h-full w-full dark:bg-gray-750 flex flex-col items-center justify-center md:hidden p-6 text-center"},f.createElement(_c,null),f.createElement("div",{className:"z-10 flex flex-col items-center"},f.createElement(Ro,{className:"w-48"}),f.createElement("img",{alt:"astronaut",src:"/astronaut.png",className:"object-contain opacity-75 h-48 animate-float mt-5"}),f.createElement("div",{className:"pt-5 font-medium text-primary text-lg"},"Support for mobile devices is coming soon!"),f.createElement("div",{className:"text-tertiary text-base pt-2 font-medium"},"Please visit"," ",f.createElement(b,{to:"/",className:"text-accent hover:underline"},"joincomet.app")," ","from a laptop or desktop computer."),f.createElement("div",{className:"text-tertiary text-base pt-5 font-medium"},"Stay updated:"),f.createElement("div",{className:"space-y-4 text-tertiary text-sm font-medium pt-5"},f.createElement("a",{href:"https://discord.gg/NPCMGSm",target:"_blank",rel:"noopener noreferrer",className:"flex items-center"},f.createElement(bn,{className:"h-6 w-6 mr-4 text-tertiary"}),"Discord"),f.createElement("a",{href:"https://github.com/joincomet/comet",target:"_blank",rel:"noopener noreferrer",className:"flex items-center"},f.createElement(xn,{className:"h-6 w-6 mr-4 text-tertiary"}),"GitHub"),f.createElement("a",{href:"https://twitter.com/joincometapp",target:"_blank",rel:"noopener noreferrer",className:"flex items-center"},f.createElement(En,{className:"h-6 w-6 mr-4 text-tertiary"}),"Twitter"))))}const jc=/^[A-Za-z0-9-_]+$/gi;function Gc(){var e,t,r,a;const[l,s,o,i]=Rl(),[c,m]=g.exports.useState(!1),{handleSubmit:d,register:u,watch:p,reset:v,getValues:h,formState:{errors:b}}=He({mode:"onChange",shouldUnregister:!0}),x=p("email"),E=p("username"),y=p("usernameOrEmail"),w=p("password"),N=p("confirmPassword"),[k,{loading:C}]=function(e){const t={...On,...e};return n(ya,t)}(),[$,{loading:U}]=function(e){const t={...On,...e};return n(Ca,t)}(),S=()=>{v(),s(!1)},P=!(o?E&&E.length>=3&&E.length<=20&&jc.test(E)&&(!x||x&&yn(x))&&w&&w.length>=6&&N&&N===w:y&&w);return f.createElement(Vi,{close:S,open:l,onSubmit:d((({usernameOrEmail:e,email:t,username:n,password:r})=>{if(o)k({variables:{input:{username:n,password:r,email:t||null}}}).then((({data:{createAccount:{accessToken:e,user:t}}})=>{localStorage.setItem("token",e),location.reload()}));else{const t=yn(e)?{email:e}:{username:e};$({variables:{input:{...t,password:r}}}).then((({data:{login:{accessToken:e,user:t}}})=>{localStorage.setItem("token",e),location.reload()}))}})),buttons:f.createElement("button",{type:"submit",className:"form-button-submit",disabled:P},o&&C||!o&&U?f.createElement(ll,{className:"w-5 h-5"}):f.createElement(ie,{className:"w-5 h-5"}))},f.createElement("div",{className:"rounded-t-lg bg-gradient-to-r from-red-400 to-indigo-600 h-2"}),f.createElement("div",{className:"px-5 pt-2 pb-9 text-left"},f.createElement("div",{className:"pb-4 flex items-center"},f.createElement("div",{onClick:()=>{o&&(i(!1),v())},className:"text-sm cursor-pointer mr-3 py-3 border-b-2 inline-flex items-center justify-center px-3 "+(o?"border-transparent text-secondary":"dark:border-gray-300 text-primary")},"Log In"),f.createElement("div",{onClick:()=>{o||(i(!0),v())},className:"text-sm cursor-pointer py-3 border-b-2 inline-flex items-center justify-center px-3 "+(o?"dark:border-gray-300 text-primary":"border-transparent text-secondary")},"Create Account"),f.createElement("div",{className:"ml-auto"},f.createElement(Ro,{className:"h-3.5 text-secondary"})),f.createElement(T,{className:"ml-5 w-5 h-5 text-tertiary highlightable",onClick:()=>S()})),f.createElement("div",{className:"space-y-4"},o?f.createElement(f.Fragment,null,f.createElement("div",null,f.createElement("div",{className:"relative"},f.createElement("input",{id:"username",...u("username",{required:!0,pattern:jc,maxLength:20,minLength:3}),className:"form-input-icon",placeholder:"Username",minLength:3,maxLength:20}),f.createElement(j,{className:"form-input-icon-icon"})),"minLength"===(null==(e=b.username)?void 0:e.type)&&f.createElement("div",{className:"form-error"},"Username must be between 3 and 20 characters"),"pattern"===(null==(t=b.username)?void 0:t.type)&&f.createElement("div",{className:"form-error"},"Letters, numbers, dashes, and underscores only")),f.createElement("div",null,f.createElement("div",{className:"relative"},f.createElement("input",{id:"email",...u("email",{validate:{email:e=>!e||yn(e)||"Invalid email"}}),className:"form-input-icon",placeholder:"Email (Optional)",type:"email"}),f.createElement(wn,{className:"form-input-icon-icon"})),"email"===(null==(r=b.email)?void 0:r.type)&&f.createElement("div",{className:"form-error"},b.email.message))):f.createElement("input",{id:"usernameOrEmail",...u("usernameOrEmail",{shouldUnregister:!0}),className:"form-input",placeholder:"Username or email"}),o?f.createElement(f.Fragment,null,f.createElement("div",null,f.createElement("div",{className:"relative"},f.createElement("input",{id:"password",...u("password",{required:!0,minLength:6}),className:"form-input-password",placeholder:"Password",type:c?"text":"password",minLength:6}),f.createElement(Qi,{showPassword:c,setShowPassword:m})),"minLength"===(null==(a=b.password)?void 0:a.type)&&f.createElement("div",{className:"form-error"},"Password must be at least 6 characters")),f.createElement("div",null,f.createElement("div",{className:"relative"},f.createElement("input",{id:"confirmPassword",...u("confirmPassword",{required:!0,validate:{matchesPreviousPassword:e=>{const{password:t}=h();return t===e||"Passwords do not match"}}}),className:"form-input-password",placeholder:"Confirm Password",type:c?"text":"password"}),f.createElement(Qi,{showPassword:c,setShowPassword:m})),!!w&&!!N&&w!==N&&f.createElement("div",{className:"form-error"},"Passwords do not match"))):f.createElement("div",{className:"relative"},f.createElement("input",{id:"password",...u("password",{required:!0}),className:"form-input",placeholder:"Password",type:c?"text":"password"}),f.createElement(Qi,{showPassword:c,setShowPassword:m})))))}const Vc=e=>y(`\n  h-full\n  cursor-pointer\n  select-none\n  focus:outline-none\n  text-13\n  border-b-4\n  flex\n  items-center\n  box-content\n  ${e?"text-gray-900 dark:text-gray-100 dark:border-white":"text-gray-600 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300 border-transparent"}\n`),Yc=e=>y(`\n  px-4\n  h-8\n  flex\n  items-center\n  rounded\n  ${e?"bg-green-600":"bg-gray-500"}\n  disabled:opacity-50\n  disabled:cursor-not-allowed\n  text-primary\n  select-none\n  cursor-pointer\n  text-13\n  focus:outline-none\n`),Wc=y("\n  flex\n  w-full\n  items-center\n  dark:hover:bg-gray-725\n  px-2\n  py-1\n  h-12\n  rounded\n  cursor-pointer\n"),Qc="MutualServers",Jc="MutualFriends";var Zc=g.exports.memo((function(){var e,t,r,a;const[l]=Ya(),[s,o,i,c]=Za((e=>[e.dialogUserId,e.setDialogUserId,e.userDialogOpen,e.setUserDialogOpen])),{t:m}=N(),[d,u]=g.exports.useState(Qc),{data:p}=za({variables:{id:s},skip:!s}),v=null==p?void 0:p.user,[h]=Qr(),[x]=Zr(),[E]=Xr();!function(e){const t={...On,...e};n(ea,t)}();const[y]=function(e){const t={...On,...e};return n(ta,t)}();ra();const w=null!=(t=null==(e=null==p?void 0:p.user)?void 0:e.relatedUsers)?t:[],k=null!=(a=null==(r=null==p?void 0:p.user)?void 0:r.servers)?a:[],C=g.exports.useCallback((()=>{c(!1)}),[c]),$=g.exports.useMemo((()=>(null==v?void 0:v.relationshipStatus)===tr.FriendRequestIncoming?f.createElement(f.Fragment,null,f.createElement("button",{className:Yc(!0),onClick:()=>E({variables:{input:{userId:s,accept:!0}}})},m("user.context.accept")),f.createElement("button",{className:Yc(!1),onClick:()=>E({variables:{input:{userId:s,accept:!0}}})},m("user.context.ignore"))):(null==v?void 0:v.relationshipStatus)===tr.FriendRequestOutgoing?f.createElement("button",{className:Yc(!1),onClick:()=>x({variables:{input:{userId:s}},optimisticResponse:{deleteFriendRequest:{...v,relationshipStatus:tr.None}}})},m("user.context.revoke")):(null==v?void 0:v.relationshipStatus)===tr.Friends?f.createElement(b,{to:`/dm/@${null==v?void 0:v.username}`,onClick:()=>C(),className:Yc(!0)},m("user.context.sendMessage")):(null==v?void 0:v.relationshipStatus)===tr.Blocking?f.createElement("button",{className:Yc(!1),onClick:()=>y({variables:{input:{userId:s}}})},m("user.context.unblock")):(null==v?void 0:v.relationshipStatus)===tr.Blocked?f.createElement("button",{disabled:!0,className:Yc(!1)},m("user.context.blockingYou")):f.createElement("button",{className:Yc(!0),onClick:()=>h({variables:{input:{userId:s}},optimisticResponse:{createFriendRequest:{...v,relationshipStatus:tr.FriendRequestOutgoing}}})},m("user.context.sendFriendRequest"))),[v,m,s,E,x,C,y,h]);return f.createElement(Xl,{closeOnOverlayClick:!0,isOpen:i,close:C},f.createElement("div",{onClick:e=>e.stopPropagation(),className:"rounded-lg max-w-xl w-full dark:bg-gray-850"},f.createElement("div",{className:"flex p-5"},f.createElement(us,{user:v,size:20,showOnline:!0,dotClassName:"ring-5 dark:ring-gray-850 w-4 h-4"}),f.createElement("div",{className:"ml-5 flex w-full pt-5"},f.createElement("div",{className:"font-semibold text-lg text-primary"},null==v?void 0:v.username),s!==(null==l?void 0:l.id)&&f.createElement(f.Fragment,null,f.createElement("div",{className:"ml-auto"}),f.createElement("div",{className:"flex items-center space-x-2.5 h-8"},$),f.createElement(Jl,{data:{type:yl,user:v},leftClick:!0},f.createElement("button",{className:"h-8 cursor-pointer highlightable ml-3 focus:outline-none"},f.createElement(de,{className:"w-5 h-5"})))))),l&&(null==v?void 0:v.id)===l.id?f.createElement("div",{className:"h-36 dark:bg-gray-750 rounded-b-lg p-5 flex items-center justify-center"},f.createElement("button",{className:"h-0 w-0 overflow-hidden"}),f.createElement("div",{className:"text-lg font-medium text-tertiary"},"Improved profile coming soon!")):f.createElement(f.Fragment,null,f.createElement("div",{className:"px-5 dark:border-gray-775 border-t h-14 flex items-center space-x-10"},f.createElement("button",{className:Vc(d===Qc),onClick:()=>u(Qc)},f.createElement("div",{className:"transform translate-y-0.5"},"Mutual Planets")),f.createElement("button",{className:Vc(d===Jc),onClick:()=>u(Jc)},f.createElement("div",{className:"transform translate-y-0.5"},"Mutual Friends"))),f.createElement("div",{className:"rounded-b-lg dark:bg-gray-750 p-2 max-h-[15rem] min-h-[15rem] h-full scrollbar-custom"},d===Qc&&(k.length>0?k.map((e=>f.createElement(b,{to:`/+${e.name}`,key:e.id,className:Wc,onClick:()=>C()},f.createElement(ps,{server:e,size:10,className:"dark:bg-gray-800 rounded-full"}),f.createElement("div",{className:"pl-2.5 text-base text-secondary font-medium"},e.name)))):f.createElement(Wa,{className:"h-36"},"No mutual planets")),d===Jc&&(w.length>0?w.map((e=>f.createElement("div",{key:e.id,className:Wc,onClick:()=>o(e.id)},f.createElement(us,{user:e,size:10,showOnline:!0,dotClassName:"ring-3 dark:ring-gray-750 w-2.5 h-2.5"}),f.createElement("div",{className:"pl-2.5"},f.createElement("div",{className:"text-base text-secondary font-medium"},e.username))))):f.createElement(Wa,{className:"h-36"},"No mutual friends"))))))}));var Kc=Nn((function({history:e}){const t="Mac OS"===jl();return f.createElement(kn,{client:Ac},f.createElement(Cn,null,f.createElement(Ve,null,f.createElement("meta",{charSet:"UTF-8"}),f.createElement("link",{rel:"icon",type:"image/svg+xml",href:"/logos/logo_icon.svg"}),f.createElement("meta",{name:"viewport",content:"width=device-width, initial-scale=1.0"}),f.createElement("title",null,"Comet – All-in-one chat & forums for communities")),f.createElement(Va,null,f.createElement($n,{history:e},f.createElement(Ql,null,f.createElement(Un,{backend:Sn,options:{enableTouchEvents:!1,enableMouseEvents:!0}},f.createElement(Bc,null),f.createElement(bc,null),f.createElement(wc,null),window.electron&&!t&&f.createElement(Cc,null),f.createElement(Gc,null),f.createElement(Zc,null),f.createElement("div",{style:window.electron?{height:t?"100%":"calc(100% - 1.375rem)"}:{height:"100%"},className:"hidden md:flex"},f.createElement(vc,null))))))))}));const Xc=Pn();In({dsn:"https://1cff6f3dfcb844e8bd098e35a0498e5a@o683674.ingest.sentry.io/5771326",integrations:[new Fn.BrowserTracing({routingInstrumentation:Mn(Xc)})],release:"web@0.0.70",tracesSampleRate:1,enabled:{}.PROD&&"https://1cff6f3dfcb844e8bd098e35a0498e5a@o683674.ingest.sentry.io/5771326"}),window.electron&&document.documentElement.classList.add("electron"),Rn.render(f.createElement(Kc,{history:Xc}),document.getElementById("root"));
