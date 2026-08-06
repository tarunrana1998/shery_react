import './Card.css';

export default function Card({ name, role, bio, image }) {
    return (
        <div className="profile-card">
            <div className="profile-card-header">
                <img 
                    src={image || `https://ui-avatars.com/api/?name=${name}&background=random&color=fff&size=150`} 
                    alt={`${name}'s profile`} 
                    className="profile-image" 
                />
            </div>
            <div className="profile-card-body">
                <h2 className="profile-name">{name}</h2>
                <p className="profile-role">{role || "Software Engineer"}</p>
                <p className="profile-bio">
                    {bio || "Passionate about creating beautiful, intuitive, and dynamic user experiences."}
                </p>
                <div className="profile-socials">
                    <button className="social-btn">Follow</button>
                    <button className="social-btn outline">Message</button>
                </div>
            </div>
        </div>
    );  
}
