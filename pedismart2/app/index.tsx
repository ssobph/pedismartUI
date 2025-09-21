import { FontAwesome5 } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { router } from 'expo-router';
import React from 'react';
import { Image, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function RoleSelection() {
  const handleRoleSelect = (role: 'passenger' | 'driver') => {
    router.push(`/${role}`);
  };

  const handleAuth = () => {
    router.push('/auth');
  };

  return (
    <SafeAreaView style={styles.container}>
      <LinearGradient
        colors={['#4A90E2', '#357ABD', '#2E5984']}
        style={styles.gradient}
      >
        <View style={styles.content}>
          <View style={styles.logoSection}>
            <View style={styles.logoContainer}>
              <Image 
                source={require('../assets/images/pedicab-logo.png')} 
                style={styles.logoImage}
                resizeMode="contain"
              />
            </View>
            <Text style={styles.appName}>PediSmart</Text>
            <Text style={styles.tagline}>Smart Transport for Everyone</Text>
          </View>

          <View style={styles.roleSection}>
            <TouchableOpacity
              style={styles.roleCard}
              onPress={() => handleRoleSelect('passenger')}
            >
              <View style={styles.roleIcon}>
                <FontAwesome5 name="user" size={32} color="#4A90E2" />
              </View>
              <Text style={styles.roleTitle}>Passenger</Text>
              <Text style={styles.roleDescription}>
                Book rides and travel safely
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.roleCard}
              onPress={() => handleRoleSelect('driver')}
            >
              <View style={styles.roleIcon}>
                <Image 
                  source={require('../assets/images/pedicab-logo.png')} 
                  style={styles.rolePedicabImage}
                  resizeMode="contain"
                />
              </View>
              <Text style={styles.roleTitle}>Driver</Text>
              <Text style={styles.roleDescription}>
                Accept rides and earn money
              </Text>
            </TouchableOpacity>
          </View>

          <TouchableOpacity style={styles.authButton} onPress={handleAuth}>
            <Text style={styles.authButtonText}>Sign In / Sign Up</Text>
          </TouchableOpacity>
        </View>
      </LinearGradient>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  gradient: {
    flex: 1,
  },
  content: {
    flex: 1,
    justifyContent: 'space-between',
    paddingTop: 60,
    paddingBottom: 60, // Increased bottom padding for Android
    paddingHorizontal: 20,
  },
  logoSection: {
    alignItems: 'center',
    marginTop: 40,
  },
  logoContainer: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
    shadowColor: '#4A90E2',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 6,
  },
  logoImage: {
    width: 50,
    height: 50,
  },
  appName: {
    fontSize: 36,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 10,
  },
  tagline: {
    fontSize: 18,
    color: 'rgba(255, 255, 255, 0.9)',
    textAlign: 'center',
  },
  roleSection: {
    gap: 20,
    marginBottom: 20, // Added bottom margin for Android
  },
  roleCard: {
    backgroundColor: 'white',
    borderRadius: 16,
    padding: 24,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 5,
  },
  roleIcon: {
    width: 64,
    height: 64,
    borderRadius: 32,
    backgroundColor: '#F8F9FA',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 16,
  },
  rolePedicabImage: {
    width: 32,
    height: 32,
  },
  roleTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#2C3E50',
    marginBottom: 8,
  },
  roleDescription: {
    fontSize: 16,
    color: '#7F8C8D',
    textAlign: 'center',
    lineHeight: 22,
  },
  authButton: {
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    paddingHorizontal: 30,
    paddingVertical: 16,
    borderRadius: 25,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.3)',
  },
  authButtonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: '600',
  },
});
