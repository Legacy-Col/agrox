'use client';


import { motion } from 'framer-motion';
import Link from 'next/link';
import { Facebook, Instagram, Twitter, Mail } from 'lucide-react';
import Image from 'next/image';

export default function Footer() {
    return (
        <footer className="bg-neutral-900 text-white py-12 px-6">
            <motion.div
                className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, ease: 'easeOut' }}
            >
                {/* AGROX Brand Section */}
                <div>
                    <div className="flex items-center gap-3">
                        <Image src="/agrox-icon.png" alt="AGROX Logo" width={40} height={40} />
                        <h2 className="text-3xl font-serif">AGROX</h2>
                    </div>
                    <p className="mt-4 text-neutral-400 text-sm max-w-sm">
                        Empowering farmers and connecting markets across West Africa and beyond. Grow. Connect. Thrive.
                    </p>
                </div>

                {/* Navigation Links */}
                <div>
                    <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
                    <ul className="space-y-2 text-neutral-400">
                        <li><Link href="/">Home</Link></li>
                        <li><Link href="/about">About Us</Link></li>
                        <li><Link href="/marketplace">Marketplace</Link></li>
                        <li><Link href="/farmers">Meet Our Farmers</Link></li>
                        <li><Link href="/contact">Contact</Link></li>
                    </ul>
                </div>

                {/* Social / Contact */}
                <div>
                    <h3 className="text-lg font-semibold mb-4">Connect With Us</h3>
                    <div className="flex gap-4 mb-4">
                        <Link href="https://facebook.com" target="_blank" aria-label="Facebook">
                            <Facebook className="w-6 h-6 hover:text-green-400 transition" />
                        </Link>
                        <Link href="https://instagram.com" target="_blank" aria-label="Instagram">
                            <Instagram className="w-6 h-6 hover:text-green-400 transition" />
                        </Link>
                        <Link href="https://twitter.com" target="_blank" aria-label="Twitter">
                            <Twitter className="w-6 h-6 hover:text-green-400 transition" />
                        </Link>
                        <Link href="mailto:support@agrox.com" aria-label="Email">
                            <Mail className="w-6 h-6 hover:text-green-400 transition" />
                        </Link>
                    </div>
                    <p className="text-sm text-neutral-400">Email: support@agrox.com</p>
                    <p className="text-sm text-neutral-400">Phone: +234 123 4567 890</p>
                </div>
            </motion.div>

            {/* Bottom Note */}
            <div className="text-center text-neutral-500 text-sm mt-12 border-t border-neutral-700 pt-6">
                © {new Date().getFullYear()} AGROX. All rights reserved.
            </div>
        </footer>
    );
}
