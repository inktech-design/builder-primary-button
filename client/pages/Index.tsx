import React, { useState } from "react";
import { Button } from "@/components/ui/button-figma";

export default function Index() {
  const [loadingStates, setLoadingStates] = useState<{
    [key: string]: boolean;
  }>({});

  const handleButtonClick = (buttonId: string) => {
    setLoadingStates((prev) => ({ ...prev, [buttonId]: true }));
    setTimeout(() => {
      setLoadingStates((prev) => ({ ...prev, [buttonId]: false }));
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <div className="container mx-auto px-4 py-8 md:py-16">
        <div className="text-center mb-12 md:mb-16">
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-4 md:mb-6 text-foreground">
            Pixel Perfect
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-6 md:mb-8 max-w-2xl mx-auto px-2">
            A modern button component system with smooth transition animations.
            Experience all button states with perfect pixel precision and fluid
            animations.
          </p>
        </div>

        {/* Button States Showcase */}
        <div className="space-y-12">
          {/* Default States */}
          <section>
            <h2 className="text-2xl font-semibold mb-6 text-foreground">
              Button States
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3 md:gap-4 items-center">
              <div className="text-center space-y-3">
                <Button state="default">Button</Button>
                <p className="text-sm text-muted-foreground">Default</p>
              </div>

              <div className="text-center space-y-3">
                <Button state="hover">Button</Button>
                <p className="text-sm text-muted-foreground">Hover</p>
              </div>

              <div className="text-center space-y-3">
                <Button state="pressed">Button</Button>
                <p className="text-sm text-muted-foreground">Pressed</p>
              </div>

              <div className="text-center space-y-3">
                <Button disabled>Button</Button>
                <p className="text-sm text-muted-foreground">Disabled</p>
              </div>

              <div className="text-center space-y-3">
                <Button loading>Button</Button>
                <p className="text-sm text-muted-foreground">Loading</p>
              </div>
            </div>
          </section>

          {/* Interactive Buttons */}
          <section>
            <h2 className="text-2xl font-semibold mb-6 text-foreground">
              Interactive Examples
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
              <div className="bg-card p-6 rounded-lg border">
                <h3 className="font-semibold mb-4">Standard Button</h3>
                <Button
                  loading={loadingStates.standard}
                  onClick={() => handleButtonClick("standard")}
                >
                  Click Me
                </Button>
              </div>

              <div className="bg-card p-6 rounded-lg border">
                <h3 className="font-semibold mb-4">Left Icon Only</h3>
                <Button
                  leftIcon={true}
                  rightIcon={false}
                  loading={loadingStates.leftIcon}
                  onClick={() => handleButtonClick("leftIcon")}
                >
                  Add Item
                </Button>
              </div>

              <div className="bg-card p-6 rounded-lg border">
                <h3 className="font-semibold mb-4">Right Icon Only</h3>
                <Button
                  leftIcon={false}
                  rightIcon={true}
                  loading={loadingStates.rightIcon}
                  onClick={() => handleButtonClick("rightIcon")}
                >
                  Continue
                </Button>
              </div>

              <div className="bg-card p-6 rounded-lg border">
                <h3 className="font-semibold mb-4">Icon Only</h3>
                <Button
                  iconOnly={true}
                  loading={loadingStates.iconOnly}
                  onClick={() => handleButtonClick("iconOnly")}
                  className="w-14"
                />
              </div>

              <div className="bg-card p-6 rounded-lg border">
                <h3 className="font-semibold mb-4">No Icons</h3>
                <Button
                  leftIcon={false}
                  rightIcon={false}
                  loading={loadingStates.noIcons}
                  onClick={() => handleButtonClick("noIcons")}
                >
                  Text Only
                </Button>
              </div>

              <div className="bg-card p-6 rounded-lg border">
                <h3 className="font-semibold mb-4">Disabled</h3>
                <Button disabled>Disabled</Button>
              </div>
            </div>
          </section>

          {/* Size Variations */}
          <section>
            <h2 className="text-2xl font-semibold mb-6 text-foreground">
              Responsive Design
            </h2>
            <div className="space-y-4">
              <div className="flex flex-col sm:flex-row flex-wrap gap-3 md:gap-4 items-center">
                <Button className="w-auto">Auto Width</Button>
                <Button className="w-32">Fixed Width</Button>
                <Button className="w-full max-w-sm">Responsive Width</Button>
              </div>
            </div>
          </section>

          {/* Design Tokens */}
          <section>
            <h2 className="text-2xl font-semibold mb-6 text-foreground">
              Design Specifications
            </h2>
            <div className="bg-card p-6 rounded-lg border">
              <dl className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 text-sm">
                <div>
                  <dt className="font-semibold text-foreground">Height</dt>
                  <dd className="text-muted-foreground">56px (3.5rem)</dd>
                </div>
                <div>
                  <dt className="font-semibold text-foreground">
                    Border Radius
                  </dt>
                  <dd className="text-muted-foreground">16px (1rem)</dd>
                </div>
                <div>
                  <dt className="font-semibold text-foreground">Padding</dt>
                  <dd className="text-muted-foreground">
                    16px vertical, 12px horizontal
                  </dd>
                </div>
                <div>
                  <dt className="font-semibold text-foreground">Font</dt>
                  <dd className="text-muted-foreground">
                    Inter, 16px, 500 weight
                  </dd>
                </div>
                <div>
                  <dt className="font-semibold text-foreground">Icon Size</dt>
                  <dd className="text-muted-foreground">24px (1.5rem)</dd>
                </div>
                <div>
                  <dt className="font-semibold text-foreground">Gap</dt>
                  <dd className="text-muted-foreground">8px (0.5rem)</dd>
                </div>
              </dl>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
