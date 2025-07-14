import React from 'react';

export function Footer() {
  return (
    <footer className="bg-background border-t">
      <div className="container mx-auto py-6 px-4 sm:px-6 lg:px-8 text-center text-muted-foreground">
        <p>&copy; {new Date().getFullYear()} Avinash Kumar. All rights reserved.</p>
      </div>
    </footer>
  );
}
