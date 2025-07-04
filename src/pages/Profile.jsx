import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { 
  User, 
  Heart, 
  Clock, 
  Download, 
  CreditCard, 
  Edit3, 
  Camera,
  
  Star,
  Calendar,
  Eye,
  Play,
  Award,
  Trash2,
  LogOut
} from "lucide-react";
import "../css/Profile.scss";
import Home from "../components/Home";
import Footer from './Footer'

const ProfilePage = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('profile');
  const [isEditing, setIsEditing] = useState(false);
  const [userProfile, setUserProfile] = useState({
    name: "John Doe",
    email: "john.doe@example.com",
    phone: "+91 98765 43210",
    avatar: "/assets/images/Cast/Jack.jpeg",
    joinDate: "January 2024",
    subscription: "Premium",
    watchTime: "127 hours",
    moviesWatched: 45,
    favoriteGenres: ["Drama", "Action", "Comedy"],
    language: "English",
    quality: "4K Ultra HD"
  });

  const [editForm, setEditForm] = useState({
    name: userProfile.name,
    email: userProfile.email,
    phone: userProfile.phone
  });

  const [validationErrors, setValidationErrors] = useState({});

  // Load user data from localStorage on component mount
  useEffect(() => {
    const loadUserData = () => {
      try {
        const storedUser = JSON.parse(localStorage.getItem('classicUser'));
        if (storedUser) {
          // Update user profile with actual logged-in user data
          setUserProfile(prev => ({
            ...prev,
            name: storedUser.name || "User",
            email: storedUser.email || "user@example.com"
          }));

          // Update edit form with actual user data
          setEditForm(prev => ({
            ...prev,
            name: storedUser.name || "User",
            email: storedUser.email || "user@example.com"
          }));
        } else {
          // For testing purposes, show profile with default data
          // In production, you might want to redirect to login
          console.log('No user data found. Using default profile data.');
          // Uncomment the line below to redirect to login in production
          // navigate('/login');
        }
      } catch (error) {
        console.error('Error loading user data:', error);
        // For testing purposes, don't redirect on error
        // Uncomment the line below to redirect to login in production
        // navigate('/login');
      }
    };

    loadUserData();
  }, [navigate]);

  // Update editForm when userProfile changes
  useEffect(() => {
    setEditForm({
      name: userProfile.name,
      email: userProfile.email,
      phone: userProfile.phone
    });
  }, [userProfile.name, userProfile.email, userProfile.phone]);

  const watchHistory = [
    {
      id: 1,
      title: "Casablanca",
      year: "1942",
      duration: "1h 42m",
      rating: "8.5",
      genre: "Romance, Drama",
      poster: "/assets/images/1940's/Casablanca_1942.jpeg",
      lastWatched: "2 hours ago",
      progress: 85
    },
    {
      id: 2,
      title: "The Godfather",
      year: "1972",
      duration: "2h 55m",
      rating: "9.2",
      genre: "Crime, Drama",
      poster: "/assets/images/The GodFather.jpeg",
      lastWatched: "1 day ago",
      progress: 100
    },
    {
      id: 3,
      title: "Citizen Kane",
      year: "1941",
      duration: "1h 59m",
      rating: "8.3",
      genre: "Drama, Mystery",
      poster: "/assets/images/1940's/Citizen Kane_1941.jpeg",
      lastWatched: "3 days ago",
      progress: 60
    }
  ];

  const [favoriteMovies, setFavoriteMovies] = useState([
    {
      id: 1,
      title: "Casablanca",
      year: "1942",
      duration: "1h 42m",
      rating: "8.5",
      genre: "Romance, Drama",
      poster: "/assets/images/1940's/Casablanca_1942.jpeg",
      userRating: 5
    },
    {
      id: 2,
      title: "The Godfather",
      year: "1972",
      duration: "2h 55m",
      rating: "9.2",
      genre: "Crime, Drama",
      poster: "/assets/images/The GodFather.jpeg",
      userRating: 5
    },
    {
      id: 3,
      title: "Citizen Kane",
      year: "1941",
      duration: "1h 59m",
      rating: "8.3",
      genre: "Drama, Mystery",
      poster: "/assets/images/1940's/Citizen Kane_1941.jpeg",
      userRating: 4
    }
  ]);

  const [downloadedMovies, setDownloadedMovies] = useState([
    {
      id: 1,
      title: "Casablanca",
      year: "1942",
      duration: "1h 42m",
      rating: "8.5",
      genre: "Romance, Drama",
      poster: "/assets/images/1940's/Casablanca_1942.jpeg",
      size: "1.2 GB"
    },
    {
      id: 2,
      title: "The Godfather",
      year: "1972",
      duration: "2h 55m",
      rating: "9.2",
      genre: "Crime, Drama",
      poster: "/assets/images/The GodFather.jpeg",
      size: "2.1 GB"
    }
  ]);

  // Navigation functions
  const handleNavigateToSubscription = () => {
    navigate('/subscription');
  };

  const handleNavigateToLogin = () => {
    navigate('/login');
  };

  const handleNavigateToVideo = (movie) => {
    navigate('/video', { state: { movie } });
  };

  const handleNavigateToHistory = () => {
    navigate('/history');
  };

  const handleNavigateToDownloads = () => {
    navigate('/download');
  };

  // Remove functions
  const handleRemoveFavorite = (id) => {
    setFavoriteMovies(prev => prev.filter(movie => movie.id !== id));
  };

  const handleRemoveDownload = (id) => {
    setDownloadedMovies(prev => prev.filter(movie => movie.id !== id));
  };

  // Profile image change
  const handleProfileImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setUserProfile(prev => ({
          ...prev,
          avatar: e.target.result
        }));
      };
      reader.readAsDataURL(file);
    }
  };
 const handleLogout = () => {
  localStorage.removeItem('classicUser'); // Clear user data
  navigate('/login'); // Redirect to login
};

  // Mobile validation
  const validateMobile = (phone) => {
    const mobileRegex = /^(\+91|91)?[6-9]\d{9}$/;
    return mobileRegex.test(phone.replace(/\s/g, ''));
  };

  const handleEditSave = () => {
    const errors = {};
    
    // Validate mobile number
    if (!validateMobile(editForm.phone)) {
      errors.phone = "Please enter a valid Indian mobile number";
    }
    
    // Validate email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(editForm.email)) {
      errors.email = "Please enter a valid email address";
    }
    
    // Validate name
    if (editForm.name.trim().length < 2) {
      errors.name = "Name must be at least 2 characters long";
    }

    if (Object.keys(errors).length > 0) {
      setValidationErrors(errors);
      return;
    }

    // Update user profile
    setUserProfile(prev => ({
      ...prev,
      ...editForm
    }));

    // Save updated user data to localStorage
    try {
      const storedUser = JSON.parse(localStorage.getItem('classicUser'));
      if (storedUser) {
        const updatedUser = {
          ...storedUser,
          name: editForm.name,
          email: editForm.email
        };
        localStorage.setItem('classicUser', JSON.stringify(updatedUser));
      }
    } catch (error) {
      console.error('Error saving user data:', error);
    }

    setIsEditing(false);
    setValidationErrors({});
  };

  const handleCancelEdit = () => {
    setEditForm({
      name: userProfile.name,
      email: userProfile.email,
      phone: userProfile.phone
    });
    setIsEditing(false);
    setValidationErrors({});
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditForm(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear validation error when user starts typing
    if (validationErrors[name]) {
      setValidationErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const renderStars = (rating) => {
    return [...Array(5)].map((_, i) => (
      <Star
        key={i}
        className={`w-3 h-3 ${i < rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-400'}`}
      />
    ));
  };

  const renderProgressBar = (progress) => (
    <div className="absolute bottom-0 left-0 right-0 bg-black/80 p-2">
      <div className="w-full bg-amber-700/30 rounded-full h-1">
        <div className="bg-amber-400 h-1 rounded-full transition-all duration-300" style={{ width: `${progress}%` }}></div>
      </div>
      <p className="text-amber-300 text-xs text-center mt-1">{progress}% watched</p>
    </div>
  );

  const renderMovieCard = (movie, type = 'history') => (
    <div
      key={movie.id}
      className="relative bg-gradient-to-b from-[#4b2e1e] to-black border border-amber-700 rounded-xl overflow-hidden shadow-xl hover:scale-105 transition duration-300 group w-full max-w-sm mx-auto"
    >
      {/* Top filmstrip */}
      <div className="h-2 bg-gradient-to-r from-amber-600/60 to-amber-400/60 flex items-center justify-center gap-1">
        {[...Array(7)].map((_, i) => (
          <div key={i} className="w-1 h-1 bg-black/60 rounded-full"></div>
        ))}
      </div>

      {/* Poster */}
      <div className="relative h-[400px] overflow-hidden">
        <img
          src={movie.poster}
          alt={movie.title}
          className="w-full h-full object-cover transition group-hover:blur-[1px]"
        />

        {/* Play icon on hover */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="hidden group-hover:flex">
            <div 
              className="bg-amber-500 text-black p-4 rounded-full shadow-xl animate-pulse cursor-pointer"
              onClick={() => handleNavigateToVideo(movie)}
            >
              <Play className="w-6 h-6" />
            </div>
          </div>
        </div>

        {/* Progress bar for history */}
        {type === 'history' && movie.progress < 100 && renderProgressBar(movie.progress)}

        {/* Download status for downloads */}
        {type === 'downloads' && (
          <div className="absolute top-2 left-2 bg-green-600 rounded-full p-1">
            <Download className="w-3 h-3 text-white" />
          </div>
        )}

        {/* User rating for favorites */}
        {type === 'favorites' && (
          <div className="absolute top-2 left-2 bg-amber-600 rounded-full p-2">
            <div className="flex gap-0.5">
              {renderStars(movie.userRating)}
            </div>
          </div>
        )}
      </div>

      {/* Rating */}
      <div className="absolute top-2 right-2 bg-black/80 text-amber-300 px-2 py-1 text-xs rounded-full flex items-center gap-1 border border-amber-500">
        <Star className="w-3 h-3 fill-current" />
        {movie.rating}
      </div>

      {/* Award for high ratings */}
      {parseFloat(movie.rating) >= 8.5 && (
        <div className="absolute top-2 left-2 bg-amber-600 rounded-full p-1">
          <Award className="w-3 h-3 text-white" />
        </div>
      )}

      {/* Info */}
      <div className="p-4 text-amber-100">
        <h3 className="text-lg font-semibold mb-1">{movie.title}</h3>

        <div className="flex justify-between text-xs text-amber-400 mb-2">
          <span className="flex items-center gap-1">
            <Calendar className="w-3 h-3" />
            {movie.year}
          </span>
          <span className="flex items-center gap-1">
            <Clock className="w-3 h-3" />
            {movie.duration}
          </span>
        </div>

        {/* Last watched for history */}
        {type === 'history' && (
          <p className="text-xs text-amber-300 mb-2 italic">{movie.lastWatched}</p>
        )}

        {/* Download size for downloads */}
        {type === 'downloads' && (
          <p className="text-xs text-green-400 mb-2">{movie.size}</p>
        )}

        <div className="flex flex-wrap gap-2 mt-1">
          {movie.genre.split(",").map((g, i) => (
            <span
              key={i}
              className="bg-amber-700/20 border border-amber-500 text-amber-200 text-[11px] px-2 py-[2px] rounded-full"
            >
              {g.trim()}
            </span>
          ))}
        </div>
      </div>

      {/* Bottom filmstrip */}
      <div className="h-2 bg-gradient-to-r from-amber-600/60 to-amber-400/60 flex items-center justify-center gap-1">
        {[...Array(7)].map((_, i) => (
          <div key={i} className="w-1 h-1 bg-black/60 rounded-full"></div>
        ))}
      </div>

      {/* Action buttons */}
      {type === 'history' && (
        <button 
          className="absolute bottom-4 right-4 bg-blue-700 hover:bg-blue-800 text-white font-semibold px-4 py-2 text-sm rounded-full shadow-lg border border-blue-900 flex items-center gap-2 transition"
          onClick={() => handleNavigateToVideo(movie)}
        >
          <Play className="w-4 h-4" />
          Continue
        </button>
      )}

      {type === 'downloads' && (
        <button 
          className="absolute bottom-4 right-4 bg-red-700 hover:bg-red-800 text-white font-semibold px-4 py-2 text-sm rounded-full shadow-lg border border-red-900 flex items-center gap-2 transition"
          onClick={() => handleRemoveDownload(movie.id)}
        >
          <Trash2 className="w-4 h-4" />
          Remove
        </button>
      )}

      {type === 'favorites' && (
        <button 
          className="absolute bottom-4 right-4 bg-red-700 hover:bg-red-800 text-white font-semibold px-4 py-2 text-sm rounded-full shadow-lg border border-red-900 flex items-center gap-2 transition"
          onClick={() => handleRemoveFavorite(movie.id)}
        >
          <Heart className="w-4 h-4" />
          Remove
        </button>
      )}
    </div>
  );

  return (
    <>
    <Home />
    <div className="profile-page">
      <div className="profile-container">
        {/* Header */}
        <div className="profile-header">
          <h1 className="profile-title">✦ My Profile ✦</h1>
          <p className="profile-subtitle">Manage your account and preferences</p>
        </div>

        {/* Navigation Tabs */}
        <div className="profile-tabs">
          <button
            className={`tab-button ${activeTab === 'profile' ? 'active' : ''}`}
            onClick={() => setActiveTab('profile')}
          >
            <User className="w-5 h-5" />
            Profile
          </button>
          <button
            className={`tab-button ${activeTab === 'history' ? 'active' : ''}`}
            onClick={() => setActiveTab('history')}
          >
            <Clock className="w-5 h-5" />
            History
          </button>
          <button
            className={`tab-button ${activeTab === 'favorites' ? 'active' : ''}`}
            onClick={() => setActiveTab('favorites')}
          >
            <Heart className="w-5 h-5" />
            Favorites
          </button>
          <button
            className={`tab-button ${activeTab === 'downloads' ? 'active' : ''}`}
            onClick={() => setActiveTab('downloads')}
          >
            <Download className="w-5 h-5" />
            Downloads
          </button>
          <button
            className={`tab-button ${activeTab === 'subscription' ? 'active' : ''}`}
            onClick={() => setActiveTab('subscription')}
          >
            <CreditCard className="w-5 h-5" />
            Subscription
          </button>
        </div>

        {/* Tab Content */}
        <div className="tab-content">
          {/* Profile Tab */}
          {activeTab === 'profile' && (
            <div className="profile-section">
              <div className="profile-card">
                <div className="profile-avatar-section">
                  <div className="avatar-container">
                    <img src={userProfile.avatar} alt="Profile" className="profile-avatar" />
                    <label className="avatar-edit-btn cursor-pointer">
                      <Camera className="w-4 h-4" />
                      <input
                        type="file"
                        accept="image/*"
                        onChange={handleProfileImageChange}
                        className="hidden"
                      />
                    </label>
                  </div>
                  <div className="profile-info">
                    <h2 className="user-name">{userProfile.name}</h2>
                    <p className="user-email">{userProfile.email}</p>
                    <p className="user-join-date">Member since {userProfile.joinDate}</p>
                  </div>
                  <button
                      onClick={handleLogout}
                      className="btn-logout mt-4 bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg shadow-md transition flex items-center gap-2"
                    >
                      <LogOut className="w-4 h-4" />
                      Logout
                    </button>
                </div>

                <div className="profile-stats">
                  <div className="stat-item">
                    <Clock className="w-6 h-6 text-amber-400" />
                    <div>
                      <p className="stat-value">{userProfile.watchTime}</p>
                      <p className="stat-label">Watch Time</p>
                    </div>
                  </div>
                  <div className="stat-item">
                    <Eye className="w-6 h-6 text-amber-400" />
                    <div>
                      <p className="stat-value">{userProfile.moviesWatched}</p>
                      <p className="stat-label">Movies Watched</p>
                    </div>
                  </div>
                  <div className="stat-item">
                    <Star className="w-6 h-6 text-amber-400" />
                    <div>
                      <p className="stat-value">{userProfile.subscription}</p>
                      <p className="stat-label">Plan</p>
                    </div>
                  </div>
                </div>

                {isEditing ? (
                  <div className="edit-form">
                    <div className="form-group">
                      <label>Full Name</label>
                      <input
                        type="text"
                        name="name"
                        value={editForm.name}
                        onChange={handleInputChange}
                        className={`form-input ${validationErrors.name ? 'error' : ''}`}
                      />
                      {validationErrors.name && <span className="error-message">{validationErrors.name}</span>}
                    </div>
                    <div className="form-group">
                      <label>Email</label>
                      <input
                        type="email"
                        name="email"
                        value={editForm.email}
                        onChange={handleInputChange}
                        className={`form-input ${validationErrors.email ? 'error' : ''}`}
                      />
                      {validationErrors.email && <span className="error-message">{validationErrors.email}</span>}
                    </div>
                    <div className="form-group">
                      <label>Phone</label>
                      <input
                        type="tel"
                        name="phone"
                        value={editForm.phone}
                        onChange={handleInputChange}
                        className={`form-input ${validationErrors.phone ? 'error' : ''}`}
                        placeholder="+91 98765 43210"
                      />
                      {validationErrors.phone && <span className="error-message">{validationErrors.phone}</span>}
                    </div>
                    <div className="form-actions">
                      <button onClick={handleEditSave} className="btn-save">
                        Save Changes
                      </button>
                      <button onClick={handleCancelEdit} className="btn-cancel">
                        Cancel
                      </button>
                    </div>
                  </div>
                ) : (
                  <div className="profile-details">
                    <div className="detail-item">
                      <span className="detail-label">Full Name:</span>
                      <span className="detail-value">{userProfile.name}</span>
                    </div>
                    <div className="detail-item">
                      <span className="detail-label">Email:</span>
                      <span className="detail-value">{userProfile.email}</span>
                    </div>
                    <div className="detail-item">
                      <span className="detail-label">Phone:</span>
                      <span className="detail-value">{userProfile.phone}</span>
                    </div>
                    <div className="detail-item">
                      <span className="detail-label">Favorite Genres:</span>
                      <span className="detail-value">{userProfile.favoriteGenres.join(', ')}</span>
                    </div>
                    <div className="detail-item">
                      <span className="detail-label">Language:</span>
                      <span className="detail-value">{userProfile.language}</span>
                    </div>
                    <div className="detail-item">
                      <span className="detail-label">Quality:</span>
                      <span className="detail-value">{userProfile.quality}</span>
                    </div>
                    <button onClick={() => setIsEditing(true)} className="btn-edit">
                      <Edit3 className="w-4 h-4" />
                      Edit Profile
                    </button>
                  </div>
                )}
              </div>
            </div>
          )}

          {/* History Tab */}
          {activeTab === 'history' && (
            <div className="history-section">
              <div className="flex justify-between items-center mb-6">
                <h3 className="section-title">Watch History</h3>
                <button 
                  onClick={handleNavigateToHistory}
                  className="bg-amber-600 hover:bg-amber-700 text-white px-4 py-2 rounded-lg transition-colors duration-300 flex items-center gap-2"
                >
                  <Clock className="w-4 h-4" />
                  View All History
                </button>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 justify-center">
                {watchHistory.map((movie) => renderMovieCard(movie, 'history'))}
              </div>
            </div>
          )}

          {/* Favorites Tab */}
          {activeTab === 'favorites' && (
            <div className="favorites-section">
              <h3 className="section-title">Favorite Movies</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 justify-center">
                {favoriteMovies.map((movie) => renderMovieCard(movie, 'favorites'))}
              </div>
            </div>
          )}

          {/* Downloads Tab */}
          {activeTab === 'downloads' && (
            <div className="downloads-section">
              <div className="flex justify-between items-center mb-6">
                <h3 className="section-title">Downloaded Movies</h3>
                <button 
                  onClick={handleNavigateToDownloads}
                  className="bg-amber-600 hover:bg-amber-700 text-white px-4 py-2 rounded-lg transition-colors duration-300 flex items-center gap-2"
                >
                  <Download className="w-4 h-4" />
                  View All Downloads
                </button>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 justify-center">
                {downloadedMovies.map((movie) => renderMovieCard(movie, 'downloads'))}
              </div>
            </div>
          )}

          {/* Subscription Tab */}
          {activeTab === 'subscription' && (
            <div className="subscription-section">
              <div className="subscription-card">
                <h3 className="section-title">Subscription Details</h3>
                <div className="subscription-info">
                  <div className="subscription-item">
                    <span className="subscription-label">Current Plan:</span>
                    <span className="subscription-value premium">{userProfile.subscription}</span>
                  </div>
                  <div className="subscription-item">
                    <span className="subscription-label">Billing Cycle:</span>
                    <span className="subscription-value">Monthly</span>
                  </div>
                  <div className="subscription-item">
                    <span className="subscription-label">Next Billing:</span>
                    <span className="subscription-value">March 15, 2024</span>
                  </div>
                  <div className="subscription-item">
                    <span className="subscription-label">Amount:</span>
                    <span className="subscription-value">₹599/month</span>
                  </div>
                </div>
                <div className="subscription-actions">
                  <button 
                    className="btn-upgrade"
                    onClick={handleNavigateToSubscription}
                  >
                    Upgrade Plan
                  </button>
                  <button 
                    className="btn-cancel-sub"
                    onClick={handleNavigateToLogin}
                  >
                    Cancel Subscription
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
    <Footer />
    </>
  );
};

export default ProfilePage; 