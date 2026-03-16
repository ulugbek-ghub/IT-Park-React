import { useParams } from 'react-router-dom'

const UserDetails = () => {
  const { id } = useParams()

  const users = {
    1: { name: 'Ulugbek Safarboyev', role: 'Developer', email: 'ulugbek.github@gmail.com', location: 'Urgenc, Uzbekistan', joined: '2024' },
  }

  const user = users[id]

  if (!user) {
    return (
      <div className="page-wrapper">
        <h1>Foydalanuvchi topilmadi</h1>
      </div>
    )
  }

  return (
    <div className="page-wrapper">
      <div className="user-details-wrapper">
        <h1>Foydalanuvchi ma'lumotlari</h1>
        <div className="user-card">
          <img src={`https://picsum.photos/id/${id * 10}/100/100`} alt="user" />
          <h2>{user.name}</h2>
          <div className="user-info-row"><span>Lavozim</span><span>{user.role}</span></div>
          <div className="user-info-row"><span>Email</span><span>{user.email}</span></div>
          <div className="user-info-row"><span>Joylashuv</span><span>{user.location}</span></div>
          <div className="user-info-row"><span>Qoshilgan yil</span><span>{user.joined}</span></div>
          <div className="user-info-row"><span>ID</span><span>#{id}</span></div>
        </div>
      </div>
    </div>
  )
}

export default UserDetails