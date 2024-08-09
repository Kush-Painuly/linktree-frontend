import React, { useState } from "react";

const FAQ = () => {
  const [isOpen, setIsOpen] = useState(false);

  const togglelist = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <div className="w-full p-12">
        <div>
          <p className="text-textcolor text-6xl pt-8 text-center font-extrabold">
            Got questions?
          </p>
        </div>
        <div>
          <div className="flex flex-col pt-8">
            <div className="bg-listcolor rounded-lg my-8 py-4">
              <h3
                onClick={togglelist}
                className="text-textcolor p-4 font-medium text-3xl"
              >
                Why do i need a link in bio tool ?
              </h3>
              {isOpen && (
                <p className="text-textcolor text-sm font-medium p-2">
                  Right now, every time you’ve got something new to share, you
                  have to go to every single one of your channels to change the
                  link in each of your bios. It’s time-consuming and complicated
                  – making it so much harder to keep everything up to date. A
                  link in bio tool means you never have to compromise, or remove
                  one link from your bio so you can add another. You can keep
                  everything you want to share online in one link. When you’ve
                  got a change, you only ever have to make it once.
                </p>
              )}
            </div>
            <div className="bg-listcolor rounded-lg my-8 py-4">
              <h3
                onClick={togglelist}
                className="text-textcolor p-4 font-medium text-3xl"
              >
                Is Linktree the original link in bio tool?
              </h3>
              {isOpen && (
                <p className="text-textcolor text-sm font-medium p-2">
                  The short answer? Yes! Back in 2016, we created Linktree as an
                  easy way to link out to all socials and unify digital
                  ecosystems, pioneering the link-in-bio category. Linktree
                  remains the leading, biggest and most popular link-in-bio
                  solution – but that’s just the beginning. You can use your
                  Linktree URL or QR code anywhere your audience is, including
                  on your business cards, in your email signature, on
                  paper-based posters and brochures, and even on your resumé. If
                  you don’t have a website, that’s fine. If you have a Linktree,
                  you don’t need one!
                </p>
              )}
            </div>
            <div className="bg-listcolor rounded-lg my-8 py-4">
              <h3
                onClick={togglelist}
                className="text-textcolor p-4 font-medium text-3xl"
              >
                Can you get paid and sell things from a Linktree?
              </h3>
              {isOpen && (
                <p className="text-textcolor text-sm font-medium p-2">
                  Yes, you can! We offer plenty of ways to sell products and
                  monetize your audience. You can collect tips, request payments
                  for services, collect revenue from affiliate links, and sell
                  your products right in your Linktree. A lot of Linktree
                  creators see incredible results with online sales on Linktree,
                  because it removes the extra steps involved in a purchase.
                  With Paypal or Square right in your Linktree, your customers
                  won’t even need to leave your social media to go to another
                  site and pay! “We love how Linktree has helped us manage our
                  business by having all social media and ways to pay in one
                  location. The QR code has made it easy for customers to access
                  it all!” – Tiffany
                </p>
              )}
            </div>
            <div className="bg-listcolor rounded-lg my-8 py-4">
              <h3
                onClick={togglelist}
                className="text-textcolor p-4 font-medium text-3xl"
              >
                Why do i need a link in bio tool ?
              </h3>
              {isOpen && (
                <p className="text-textcolor text-sm font-medium p-2">
                  Right now, every time you’ve got something new to share, you
                  have to go to every single one of your channels to change the
                  link in each of your bios. It’s time-consuming and complicated
                  – making it so much harder to keep everything up to date. A
                  link in bio tool means you never have to compromise, or remove
                  one link from your bio so you can add another. You can keep
                  everything you want to share online in one link. When you’ve
                  got a change, you only ever have to make it once.
                </p>
              )}
            </div>
            <div className="bg-listcolor rounded-lg my-8 py-4">
              <h3
                onClick={togglelist}
                className="text-textcolor p-4 font-medium text-3xl"
              >
                Is Linktree the original link in bio tool?
              </h3>
              {isOpen && (
                <p className="text-textcolor text-sm font-medium p-2">
                  The short answer? Yes! Back in 2016, we created Linktree as an
                  easy way to link out to all socials and unify digital
                  ecosystems, pioneering the link-in-bio category. Linktree
                  remains the leading, biggest and most popular link-in-bio
                  solution – but that’s just the beginning. You can use your
                  Linktree URL or QR code anywhere your audience is, including
                  on your business cards, in your email signature, on
                  paper-based posters and brochures, and even on your resumé. If
                  you don’t have a website, that’s fine. If you have a Linktree,
                  you don’t need one!
                </p>
              )}
            </div>
            <div className="bg-listcolor rounded-lg my-8 py-4">
              <h3
                onClick={togglelist}
                className="text-textcolor p-4 font-medium text-3xl"
              >
                Can you get paid and sell things from a Linktree?
              </h3>
              {isOpen && (
                <p className="text-textcolor text-sm font-medium p-2">
                  Yes, you can! We offer plenty of ways to sell products and
                  monetize your audience. You can collect tips, request payments
                  for services, collect revenue from affiliate links, and sell
                  your products right in your Linktree. A lot of Linktree
                  creators see incredible results with online sales on Linktree,
                  because it removes the extra steps involved in a purchase.
                  With Paypal or Square right in your Linktree, your customers
                  won’t even need to leave your social media to go to another
                  site and pay! “We love how Linktree has helped us manage our
                  business by having all social media and ways to pay in one
                  location. The QR code has made it easy for customers to access
                  it all!” – Tiffany
                </p>
              )}
            </div>
            <div className="bg-listcolor rounded-lg my-8 py-4">
              <h3
                onClick={togglelist}
                className="text-textcolor p-4 font-medium text-3xl"
              >
                Why do i need a link in bio tool ?
              </h3>
              {isOpen && (
                <p className="text-textcolor text-sm font-medium p-2">
                  Right now, every time you’ve got something new to share, you
                  have to go to every single one of your channels to change the
                  link in each of your bios. It’s time-consuming and complicated
                  – making it so much harder to keep everything up to date. A
                  link in bio tool means you never have to compromise, or remove
                  one link from your bio so you can add another. You can keep
                  everything you want to share online in one link. When you’ve
                  got a change, you only ever have to make it once.
                </p>
              )}
            </div>
            <div className="bg-listcolor rounded-lg my-8 py-4">
              <h3
                onClick={togglelist}
                className="text-textcolor p-4 font-medium text-3xl"
              >
                Is Linktree the original link in bio tool?
              </h3>
              {isOpen && (
                <p className="text-textcolor text-sm font-medium p-2">
                  The short answer? Yes! Back in 2016, we created Linktree as an
                  easy way to link out to all socials and unify digital
                  ecosystems, pioneering the link-in-bio category. Linktree
                  remains the leading, biggest and most popular link-in-bio
                  solution – but that’s just the beginning. You can use your
                  Linktree URL or QR code anywhere your audience is, including
                  on your business cards, in your email signature, on
                  paper-based posters and brochures, and even on your resumé. If
                  you don’t have a website, that’s fine. If you have a Linktree,
                  you don’t need one!
                </p>
              )}
            </div>
            <div className="bg-listcolor rounded-lg my-8 py-4">
              <h3
                onClick={togglelist}
                className="text-textcolor p-4 font-medium text-3xl"
              >
                Can you get paid and sell things from a Linktree?
              </h3>
              {isOpen && (
                <p className="text-textcolor text-sm font-medium p-2">
                  Yes, you can! We offer plenty of ways to sell products and
                  monetize your audience. You can collect tips, request payments
                  for services, collect revenue from affiliate links, and sell
                  your products right in your Linktree. A lot of Linktree
                  creators see incredible results with online sales on Linktree,
                  because it removes the extra steps involved in a purchase.
                  With Paypal or Square right in your Linktree, your customers
                  won’t even need to leave your social media to go to another
                  site and pay! “We love how Linktree has helped us manage our
                  business by having all social media and ways to pay in one
                  location. The QR code has made it easy for customers to access
                  it all!” – Tiffany
                </p>
              )}
            </div>
            <div className="bg-listcolor rounded-lg my-8 py-4">
              <h3
                onClick={togglelist}
                className="text-textcolor p-4 font-medium text-3xl"
              >
                Why do i need a link in bio tool ?
              </h3>
              {isOpen && (
                <p className="text-textcolor text-sm font-medium p-2">
                  Right now, every time you’ve got something new to share, you
                  have to go to every single one of your channels to change the
                  link in each of your bios. It’s time-consuming and complicated
                  – making it so much harder to keep everything up to date. A
                  link in bio tool means you never have to compromise, or remove
                  one link from your bio so you can add another. You can keep
                  everything you want to share online in one link. When you’ve
                  got a change, you only ever have to make it once.
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FAQ;
