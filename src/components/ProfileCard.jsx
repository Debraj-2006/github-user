import React from 'react';
import { Users, UserPlus, BookOpen, Link as LinkIcon, MapPin, AtSign, Building } from 'lucide-react';

export default function ProfileCard({ user }) {
  if (!user) return null;

  return (
    <div className="w-full max-w-2xl mx-auto glass rounded-3xl p-6 sm:p-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
      <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 sm:gap-8">
        
        {/* Avatar */}
        <div className="relative group">
          <div className="absolute -inset-0.5 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full blur opacity-50 group-hover:opacity-75 transition duration-500"></div>
          <img 
            src={user.avatar_url} 
            alt={`${user.login}'s avatar`} 
            className="relative w-32 h-32 sm:w-40 sm:h-40 rounded-full object-cover border-4 border-slate-900 z-10"
          />
        </div>

        {/* Info */}
        <div className="flex-1 text-center sm:text-left">
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-4">
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                {user.name || user.login}
              </h2>
              <a 
                href={user.html_url} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-indigo-400 hover:text-indigo-300 font-medium inline-block mt-1 transition-colors"
              >
                @{user.login}
              </a>
            </div>
            <div className="text-slate-400 text-sm font-medium bg-slate-800/50 px-3 py-1.5 rounded-lg inline-block">
              Joined {new Date(user.created_at).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
            </div>
          </div>

          {user.bio ? (
            <p className="mt-4 text-slate-300 leading-relaxed text-sm sm:text-base">
              {user.bio}
            </p>
          ) : (
            <p className="mt-4 text-slate-500 italic text-sm sm:text-base">
              This profile has no bio
            </p>
          )}

          {/* Stats Box */}
          <div className="mt-6 grid grid-cols-3 gap-2 sm:gap-4 bg-slate-900/50 rounded-2xl p-4 border border-slate-700/50">
            <div className="text-center sm:text-left flex flex-col items-center sm:items-start">
              <span className="text-xs text-slate-400 font-semibold uppercase tracking-wider mb-1">Repos</span>
              <span className="text-xl font-bold text-white flex items-center gap-2">
                <BookOpen className="w-4 h-4 text-indigo-400 hidden sm:block" />
                {user.public_repos}
              </span>
            </div>
            <div className="text-center sm:text-left flex flex-col items-center sm:items-start">
              <span className="text-xs text-slate-400 font-semibold uppercase tracking-wider mb-1">Followers</span>
              <span className="text-xl font-bold text-white flex items-center gap-2">
                <Users className="w-4 h-4 text-indigo-400 hidden sm:block" />
                {user.followers}
              </span>
            </div>
            <div className="text-center sm:text-left flex flex-col items-center sm:items-start">
              <span className="text-xs text-slate-400 font-semibold uppercase tracking-wider mb-1">Following</span>
              <span className="text-xl font-bold text-white flex items-center gap-2">
                <UserPlus className="w-4 h-4 text-indigo-400 hidden sm:block" />
                {user.following}
              </span>
            </div>
          </div>

          {/* Links Grid */}
          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 text-sm">
            <div className={`flex items-center gap-3 ${user.location ? 'text-slate-300' : 'text-slate-500 opacity-50'}`}>
              <MapPin className="w-5 h-5 flex-shrink-0" />
              <span className="truncate">{user.location || 'Not Available'}</span>
            </div>
            <div className={`flex items-center gap-3 ${user.twitter_username ? 'text-slate-300 hover:text-indigo-400 transition-colors cursor-pointer' : 'text-slate-500 opacity-50'}`}>
              <AtSign className="w-5 h-5 flex-shrink-0" />
              {user.twitter_username ? (
                <a href={`https://twitter.com/${user.twitter_username}`} target="_blank" rel="noopener noreferrer" className="truncate">
                  {user.twitter_username}
                </a>
              ) : (
                <span className="truncate">Not Available</span>
              )}
            </div>
            <div className={`flex items-center gap-3 ${user.blog ? 'text-slate-300 hover:text-indigo-400 transition-colors cursor-pointer' : 'text-slate-500 opacity-50'}`}>
              <LinkIcon className="w-5 h-5 flex-shrink-0" />
              {user.blog ? (
                <a href={user.blog.startsWith('http') ? user.blog : `https://${user.blog}`} target="_blank" rel="noopener noreferrer" className="truncate">
                  {user.blog}
                </a>
              ) : (
                <span className="truncate">Not Available</span>
              )}
            </div>
            <div className={`flex items-center gap-3 ${user.company ? 'text-slate-300' : 'text-slate-500 opacity-50'}`}>
              <Building className="w-5 h-5 flex-shrink-0" />
              <span className="truncate">{user.company || 'Not Available'}</span>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
