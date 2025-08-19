import React, { createContext } from 'react';

export interface AuthContextType {
    user: { id: string; name: string } | null;
    login: (username: string, password: string) => Promise<void>;
    logout: () => void;
}

export const AuthContext = createContext<AuthContextType>({
    user: { id: '1', name: 'Mock User' },
    login: async () => {},
    logout: () => {},
});

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    // Mock implementation
    const value: AuthContextType = {
        user: { id: '1', name: 'Mock User' },
        login: async () => {},
        logout: () => {},
    };

    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

// AuthContext is now exported from auth-context.tsx for Fast Refresh compliance.
// This file should only export AuthProvider if needed.